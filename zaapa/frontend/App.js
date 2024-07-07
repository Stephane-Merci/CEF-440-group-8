import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import RoadSignList from './pages/RoadSignList';
import NavigationScreen from './pages/NavigationScreen';
import RoadStateUpdate from './pages/RoadStateUpdate';
import { View, StyleSheet } from 'react-native'
import DestinationDetails from './components/DestinationDetails';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import NotifPref from './pages/NotifPref';
import LoginPage from './pages/LoginPage';
import UpdatePassword from './pages/UpdatePassword';
import LearnPage from './pages/LearnPage';
import SavedLocations from './pages/SavedLocations';
import PassForgotEmail from './pages/PassForgotEmail';
import PassForgotPhone from './pages/PassForgotPhone';
import GuidePageOne from './pages/GuidePageOne';
import GuidePageTwo from './pages/GuidePageTwo';
import GuidePageThree from './pages/GuidePageThree';
import Navbar from './components/Navbar';
import SuccessPage from './components/SuccessPage';





const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="Settings" options={{ headerShown:false }} component={Settings} />
        <Stack.Screen name="Profile" options={{ headerShown:false }} component={Profile} />
        <Stack.Screen name="NotifPref" options={{ headerShown:false }} component={NotifPref} />
        <Stack.Screen name="LearnPage" options={{ headerShown:false }} component={LearnPage} />
        <Stack.Screen name="SavedLocations" options={{ headerShown:false }} component={SavedLocations} />
        <Stack.Screen name="PassForgotEmail" options={{ headerShown:false }} component={PassForgotEmail} />
        <Stack.Screen name="PassForgotPhone" options={{ headerShown:false }} component={PassForgotPhone} />
        <Stack.Screen name="GuidePageOne" options={{ headerShown:false }} component={GuidePageOne} />
        <Stack.Screen name="GuidePageTwo" options={{ headerShown:false }} component={GuidePageTwo} />
        <Stack.Screen name="GuidePageThree" options={{ headerShown:false }} component={GuidePageThree} />
        <Stack.Screen name="UpdatePassword" options={{ headerShown:false }} component={UpdatePassword} />
        <Stack.Screen name="LoginPage" options={{ headerShown:false }} component={LoginPage} />
        <Stack.Screen name="Home" options={{ headerShown:false }} component={HomeScreen} />
        <Stack.Screen name="Navigation" options={{ headerShown:false }} component={NavigationScreen} />
        <Stack.Screen name="Navbar" options={{ headerShown:false }} component={Navbar} />
        <Stack.Screen name="SuccessPage" options={{ headerShown:false }} component={SuccessPage} />
      </Stack.Navigator>
    </NavigationContainer>

      {/* <View style={{backgroundColor: 'red', flex: 1}}>
      <DestinationDetails />
      </View> */}

      {/* <View style={{backgroundColor: 'red', flex: 1}}>
        <NavigationScreen />
      </View> */}

      {/* <LoginPage/> */}
      {/* <CreateNewPassword/> */}
    </>
  );
}

