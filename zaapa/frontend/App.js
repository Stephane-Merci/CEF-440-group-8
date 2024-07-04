// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import  Settings  from './screens/Settings';
import  Password from './screens/Password';
import  UpdatePassword  from './screens/UpdatePassword';
// import Navigator from './routes/homeStack';



const Stack = createStackNavigator();
export default function App() {
  return (
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



