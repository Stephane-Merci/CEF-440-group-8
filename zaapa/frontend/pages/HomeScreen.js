import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert, ActivityIndicator, Modal } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from 'expo-location';
import axios from 'axios';
import polyline from '@mapbox/polyline';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import DestinationDetails from "../components/DestinationDetails";
import Navbar from "../components/Navbar";


export default function HomeScreen() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 4.0479,
    longitude: 9.6966,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
  });
  const [originQuery, setOriginQuery] = useState('');
  const [destinationQuery, setDestinationQuery] = useState('Limbe');
  const [errorMsg, setErrorMsg] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [roadSigns, setRoadSigns] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [routeInfo, setRouteInfo] = useState({ distance: 0, duration: 0 });

  const navigation = useNavigation();

  const userLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      console.log("Location:", location);

      const currentLoc = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setOrigin(currentLoc);

      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
      });
    } catch (error) {
      setErrorMsg('Error fetching location');
      console.error(error);
    }
  };

  const searchLocation = async () => {
    try {
      setLoading(true);

      let originCoords;

      if (originQuery.trim() === '') {
        if (!origin) {
          Alert.alert('Error', 'Unable to get current location');
          setLoading(false);
          return;
        }
        originCoords = origin;
      } else {
        const originResponse = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
          params: {
            q: originQuery,
            key: '230f9ec0ec0c478baf22d20b4094cf02',
          }
        });

        if (originResponse.data.results.length === 0) {
          Alert.alert('Error', 'Origin location not found');
          setLoading(false);
          return;
        }

        originCoords = originResponse.data.results[0].geometry;
        setOrigin({
          latitude: originCoords.lat,
          longitude: originCoords.lng,
        });
      }

      const destinationResponse = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          q: destinationQuery,
          key: '230f9ec0ec0c478baf22d20b4094cf02',
        }
      });

      if (destinationResponse.data.results.length === 0) {
        Alert.alert('Error', 'Destination location not found');
        setLoading(false);
        return;
      }

      const destinationCoords = destinationResponse.data.results[0].geometry;
      setDestination({
        latitude: destinationCoords.lat,
        longitude: destinationCoords.lng,
      });

      setMapRegion({
        latitude: originCoords.latitude || originCoords.lat,
        longitude: originCoords.longitude || originCoords.lng,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
      });

    } catch (error) {
      Alert.alert('Error', 'Unable to find location');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getRoute = async (origin, destination) => {
    try {
      setLoading(true);

      const url = `http://router.project-osrm.org/route/v1/driving/${origin.longitude.toFixed(6)},${origin.latitude.toFixed(6)};${destination.longitude.toFixed(6)},${destination.latitude.toFixed(6)}?overview=full&geometries=polyline`;
      console.log('Request URL:', url);

      const response = await axios.get(url);

      if (response.status !== 200) {
        console.error('Error fetching route:', response.data);
        return;
      }

      const route = response.data.routes[0];
      const coords = polyline.decode(route.geometry).map(point => ({
        latitude: point[0],
        longitude: point[1]
      }));

      setRouteCoords(coords);
      setRouteInfo({
        distance: route.distance / 1000, // convert to kilometers
        duration: route.duration / 60, // convert to minutes
      });
      setModalVisible(true);

      const roadSignsResponse = await axios.get('http://localhost:4000/api/roadsigns/get');
      if (roadSignsResponse.status === 200) {
        const fetchedRoadSigns = roadSignsResponse.data;
        setRoadSigns(fetchedRoadSigns);
      }

    } catch (error) {
      console.error('Error fetching route:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    userLocation();
  }, []);

  useEffect(() => {
    if (origin && destination) {
      getRoute(origin, destination);
    }
  }, [origin, destination]);

  const startNavigation = () => {
    setModalVisible(false);
    navigation.navigate('Navigation', {
      routeCoords: routeCoords,
      destination: destination,
    });
  };

  const closeNavigation = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <>
          <SafeAreaView>
            <View style={styles.searchContainer}>
              {/* <TextInput
                style={[styles.searchInput, { marginRight: 10 }]}
                placeholder="Origin"
                value={originQuery}
                onChangeText={setOriginQuery}
              /> */}
              <TextInput
                style={styles.input}
                placeholder="Destination"
                value={destinationQuery}
                onChangeText={setDestinationQuery}
              />
              <EvilIcons name="location" size={32} style={styles.icon} color="#227B98cc" />

              <TouchableOpacity onPress={searchLocation} style={{ backgroundColor: '#227B98cc', borderRadius: 25, paddingHorizontal: 20, paddingVertical: 5, justifyContent: 'center',
    alignItems: 'center', }}>
                <Text style={{ color: '#ffffff', fontSize: 16 }}> Search </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          ) : (
            <MapView style={styles.map} region={mapRegion}>
              {origin && (
                <Marker coordinate={origin} title="Origin" pinColor="green" />
              )}
              {destination && (
                <Marker coordinate={destination} title="Destination" pinColor="red" />
              )}
              {routeCoords.length > 0 && (
                <Polyline
                  coordinates={routeCoords}
                  strokeWidth={3}
                  strokeColor="blue"
                />
              )}
              {roadSigns.map(sign => (
                <Marker
                  key={sign.id}
                  coordinate={{ latitude: sign.latitude, longitude: sign.longitude }}
                  title={sign.title}
                />
              ))}
            </MapView>
          )}
        </>
      )}

      {modalVisible && (
        <DestinationDetails
          distance={routeInfo.distance.toFixed(1)}
          duration={routeInfo.duration.toFixed(0)}
          startNavigation={startNavigation}
          cancel={closeNavigation}
        />
      )}
{ !modalVisible && <Navbar Explore={true}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 20,
    zIndex: 1,
    color: 'rgba(255, 255, 255, 0)',
  },
  searchInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 45,
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.8)',
    borderColor: '#9CA3AF',
    opacity: 0.75,
    borderWidth: 1,
    paddingLeft: 40,
    borderRadius: 20,
    marginRight: 10,
    position: 'relative',
    flexBasis: '75%'

  },
  icon: {
    position: 'absolute',
    top: 32,
    left: 25
  },
});
