import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import NavigationScreen from './pages/NavigationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown:false }} component={HomeScreen} />
        <Stack.Screen name="Navigation" options={{ headerShown:false }} component={NavigationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
