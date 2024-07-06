// import { createAppContainer } from '@react-navigation';
// import { createStackNavigator } from '@react-navigation-stack';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';

// const pages = {
//     Home: {
//         screen: LoginPage
//     },
//     Register: {
//         screen: RegisterPage
//     }
// }


// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import GuidePageOne from '../pages/GuidePageOne';
import GuidePageTwo from '../pages/GuidePageTwo';
import GuidePageThree from '../pages/GuidePageThree';

const screens = {
  GuidePageOne:{
    screen: GuidePageOne
  },
  GuidePageTwo:{
    screen: GuidePageTwo
  },
  GuidePageThree:{
    screen: GuidePageThree
  },
}

const LoginStack = createStackNavigator(screens);
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialTouteName = 'LoginPage'
//       >
//         <Stack.Screen
//           name = 'LoginPage'
//           component = {LoginPage}
//           options = {{
//             headerShown: false
//           }}
//         />
//          <Stack.Screen
//           name = 'RegisterPage'
//           component = {RegisterPage}
//           options = {{
//             headerShown: false
//           }}
//         />
//          <Stack.Screen
//           name = 'GuidePageOne'
//           component = {GuidePageOne}
//           options = {{
//             headerShown: false
//           }}
//         />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


