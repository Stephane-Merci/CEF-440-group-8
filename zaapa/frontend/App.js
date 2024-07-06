import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import NavigationScreen from './pages/NavigationScreen';

const Stack = createStackNavigator();
// import { NavigationContainer} from '@react-navigation/native'; 
// import { createStackNavigator } from '@react-navigation/stack';
// import  Settings  from './pages/Settings';
// import  UpdatePassword  from './pages/UpdatePassword';
// import  CreateNewPassword  from './pages/CreateNewPassword';
// import  PassForgotEmail  from './pages/PassForgotEmail';
// import  PassForgotPhone  from './pages/PassForgotPhone';
// import  Profile  from './pages/Profile';
// import  SavedLocations  from './pages/SavedLocations';

// import  RegistrationForm  from './components/RegistrationForm';


// import Navigator from './routes/homeStack';

// import { StatusBar } from 'expo-status-bar';
// import { View, StyleSheet, } from 'react-native';
// import RegisterPage from './pages/RegisterPage';
// import LoginPage from './pages/LoginPage';
// import GuidePageOne from './pages/GuidePageOne';
// import GuidePageTwo from './pages/GuidePageTwo';
// import GuidePageThree from './pages/GuidePageThree';
// import RoadStateUpdate from './pages/RoadStateUpdate';
// import LearnPage from './pages/LearnPage';
// import RoadSignList from './pages/RoadSignList';
// import NotifPref from './pages/NotifPref';





// const Stack = createStackNavigator();
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
//     <View style={styles.container}>
//     <LoginPage />
    {/* <LearnPage /> */}
    {/* <NotifPref /> */}
    {/* <RegistrationForm /> */}
    {/* <RegisterPage /> */}
    {/* <GuidePageOne /> */}
    {/* <GuidePageTwo /> */}
    {/* <GuidePageThree /> */}
    {/* <RoadStateUpdate /> */}
    {/* <SavedLocations /> */}
    {/* <Profile /> */}
    {/* <PassForgotPhone /> */}
    {/* <PassForgotEmail /> */}
    {/* <CreateNewPassword /> */}
    {/* <UpdatePassword /> */}
    {/* <Settings /> */}
    {/* <RoadSignList /> */}
//     <StatusBar style="auto" />
//   </View>
// );
// }
    // <Navigator/>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName= 'Settings'
    //   >
    //     <Stack.Screen
    //       name= 'Settings'
    //       component= {Settings}
    //       options={{
    //         headerShown:false
    //       }}
    //     />
    //    <Stack.Screen
    //       name= 'Profile'
    //       component= {Profile}
    //       options={{
    //         headerShown:false
    //       }}
    //     />
    //     <Stack.Screen
    //       name= 'UpdatePassword'
    //       component= {UpdatePassword}
    //       options={{
    //         headerShown:false
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 15,

  },
});
