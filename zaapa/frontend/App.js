import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import RoadSignList from './pages/RoadSignList';
import NavigationScreen from './pages/NavigationScreen';
import RoadStateUpdate from './pages/RoadStateUpdate';
import { View, StyleSheet } from 'react-native'
import DestinationDetails from './components/DestinationDetails';



const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown:false }} component={HomeScreen} />
        <Stack.Screen name="Navigation" options={{ headerShown:false }} component={NavigationScreen} />
      </Stack.Navigator>
    </NavigationContainer>

      {/* <View style={{backgroundColor: 'red', flex: 1}}>
      <DestinationDetails />
      </View> */}
    </>
  );
}

