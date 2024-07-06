// NavigationScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as Location from 'expo-location';
import MapView, { Marker, Polyline } from "react-native-maps";

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
      <View style={styles.infoContainer}>
        <Text>Speed: {speed ? speed.toFixed(2) : 0} m/s</Text>
        <Text>Distance to Destination: {distance.toFixed(2)} km</Text>
        <Text>Time Left: {timeLeft ? timeLeft.toFixed(2) : 0} mins</Text>
        <Button title="End Navigation" onPress={() => navigation.goBack()} />
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
    padding: 10,
    backgroundColor: '#fff',
  },
});
