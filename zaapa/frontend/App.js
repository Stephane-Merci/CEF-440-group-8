<<<<<<< HEAD
// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import  Settings  from './screens/Settings';
import  Password from './screens/Password';
import  UpdatePassword  from './screens/UpdatePassword';
// import Navigator from './routes/homeStack';
=======
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, } from 'react-native';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import GuidePageOne from './pages/GuidePageOne';
import GuidePageTwo from './pages/GuidePageTwo';
import GuidePageThree from './pages/GuidePageThree';
import RoadStateUpdate from './pages/RoadStateUpdate';
import LearnPage from './pages/LearnPage';
import RoadSignList from './pages/RoadSignList';
>>>>>>> 41dd16d78fa6c8c216efa5c12c5db580d45be3bf



const Stack = createStackNavigator();
export default function App() {
  return (
<<<<<<< HEAD
    // <Navigator/>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName= 'Settings'
      >
        <Stack.Screen
          name= 'Settings'
          component= {Settings}
          options={{
            headerShown:false
          }}
        />
       <Stack.Screen
          name= 'Profile'
          component= {Profile}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name= 'UpdatePassword'
          component= {UpdatePassword}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}



=======
    <View style={styles.container}>
      <LoginPage />
      {/* <RegisterPage /> */}
      {/* <GuidePageOne /> */}
      {/* <GuidePageTwo /> */}
      {/* <GuidePageThree /> */}
      {/* <RoadStateUpdate /> */}
      {/* <LearnPage /> */}
      {/* <RoadSignList /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 15,

  },
});
>>>>>>> 41dd16d78fa6c8c216efa5c12c5db580d45be3bf
