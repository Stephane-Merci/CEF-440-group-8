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

export default function App() {
  return (
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
