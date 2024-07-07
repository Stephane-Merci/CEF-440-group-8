import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const GuidePageOne = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log(`GO to next guide page`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image 
          source={require("../assets/Frame 34.jpg")}
          style={styles.iconWrapper}
        />
      </View>
      <View>
        <Text style={styles.heading}>Road Sign & State Notification</Text>
        <Text style={styles.smallText}>Real time location tracking for better user experience.</Text>
        <View style={styles.wrapper}>
          <TouchableOpacity style={[styles.circle, styles.bold]}></TouchableOpacity>
          <TouchableOpacity style={styles.circle}></TouchableOpacity>
          <TouchableOpacity style={styles.circle}></TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('GuidePageTwo')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 220,
    height: 220,
    borderRadius: 1000,
    backgroundColor: '#D6F2F7',
    alignSelf: 'center',
    marginBottom: 25
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '300',
    textAlign: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 50
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 100,
    backgroundColor: '#D6F2F7',
  },
  bold: {
    backgroundColor: '#41B5CF'
  },
  button: {
    backgroundColor: '#41B5CF',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 8
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
  },
})
export default GuidePageOne