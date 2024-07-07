// NavigationScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Location from 'expo-location';
import MapView, { Marker, Polyline } from "react-native-maps";
import { AntDesign } from '@expo/vector-icons'

export default function NavigationScreen({ route, navigation }) {
  const { routeCoords, destination } = route.params;
  const [currentLocation, setCurrentLocation] = useState(null);
  const [speed, setSpeed] = useState(0);
  const [distance, setDistance] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let locationSubscription;
    const startLocationTracking = async () => {
      locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (location) => {
          const newLocation = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          };
          setCurrentLocation(newLocation);
          setSpeed(location.coords.speed);
          const dist = getDistance(newLocation, destination);
          setDistance(dist);
          setTimeLeft(dist / (location.coords.speed / 60)); // time left in minutes
        }
      );
    };

    startLocationTracking();

    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
    };
  }, []);

  const getDistance = (start, end) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (end.latitude - start.latitude) * Math.PI / 180;
    const dLon = (end.longitude - start.longitude) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(start.latitude * Math.PI / 180) * Math.cos(end.latitude * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const formatTime = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = Math.floor(minutes % 60);
    return `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')}`;
  };

  const getArrivalTime = (duration) => {
    const now = new Date();
    const arrival = new Date(now.getTime() + duration * 60000); // Add duration in minutes
    const hours = arrival.getHours().toString().padStart(2, '0');
    const minutes = arrival.getMinutes().toString().padStart(2, '0');
    return `${hours} : ${minutes}`;
  };


  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {currentLocation && (
          <Marker coordinate={currentLocation} title="Current Location" pinColor="blue" />
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
      </MapView>
      <View style={{position: 'absolute', left: 30, bottom: 100, backgroundColor: '#fff', borderRadius: 100, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 20 }}>
        <Text style={{fontSize: 18, color: 'red', fontWeight: '800'}}>50</Text>
        <Text style={{fontSize: 12, color: 'red'}}>Km/h</Text>
      </View>
      <View style={styles.infoContainer}>
        {/* <Text>Speed: {speed ? speed.toFixed(2) : 0} m/s</Text>*/}
        <View>
          <Text style={{fontSize: 12, color: 'rgba(156, 163, 175, 0.7)'}}>Arrival Time</Text>
          <Text style={{fontSize: 16, color: '#41B5CF', fontWeight: '800'}}>{timeLeft ? getArrivalTime(timeLeft) : '00 : 00'}</Text>

        </View>
        <View>
          <Text style={{fontSize: 12, color: 'rgba(156, 163, 175, 0.7)'}}>Distance</Text>
          <Text style={{fontSize: 16, color: '#41B5CF', fontWeight: '800'}}>{distance.toFixed(2)} km</Text>
        </View>
        <View>
          <Text style={{fontSize: 12, color: 'rgba(156, 163, 175, 0.7)'}}>Time Left</Text>
          <Text style={{fontSize: 16, color: '#41B5CF', fontWeight: '800'}}>{timeLeft ? formatTime(timeLeft) : '00 : 00'}</Text>

        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={32} color="#41B5CF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '90%',
    position: 'absolute',
    bottom: 20,
  },
});
