import  {View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import  React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';



const Settings = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <Ionicons name="settings-outline" size={30}/>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 5}}>Settings</Text>
            </View>
            <View>
                <Ionicons name="person-circle-outline" size={200} style={styles.person}/>
            </View>
            <View style={styles.box}>
                <View>
                    <Text style={styles.text1}> Gilles Christan</Text>
                    <Text style={styles.text2}> Douala, Cameroon</Text>
                </View>
                <View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} style={styles.icon}/>
                </View>   
            </View>
            <Text style={{marginBottom: 5, marginTop: 20, fontSize: 18, fontWeight:'700'}}> General </Text>
            <View style={styles.box}>
                <View>
                    <Text style={styles.text1}> Notifications </Text>
                    <Text style={styles.text2}> Change your Notiicaton Preferences </Text>
                </View>
                <View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} style={styles.icon}/>
                </View>    
            </View>
            <View style={styles.box}>
                <View>
                    <Text style={styles.text1}> Language </Text>
                    <Text style={styles.text2}> Choose your Default Language </Text>
                </View>
                <View>
                    <MaterialIcons name="keyboard-arrow-right"  size={30} style={styles.icon}/>
                </View>   
            </View>
            <View style={styles.box}>
                <Text style={styles.text11}> Dark Mode </Text>
                <MaterialCommunityIcons name="toggle-switch" size={30} style={styles.icon}/>
            </View>
            <View style={styles.box}>
                <View>
                    <Text style={styles.text1}> Help Center </Text>
                    <Text style={styles.text2}> Frequently Asked Questions </Text>
                </View>
                <View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} style={styles.icon}/>
                </View>     
            </View>
            <View style={styles.bottomContent}>
                <TouchableOpacity onpress={() => console.log('Pressed')}>
                    <View style={styles.bottom}>
                        <View>
                            <Text style={{fontWeight:'bold', marginTop: 5}}> Reset Zaapa </Text>
                        </View>
                        <View>
                            <MaterialIcons name="lock-reset" size={30} style={styles.icons}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onpress={() => console.log('Pressed')}>
                    <View style={styles.bottom}>
                        <View>
                            <Text style={{marginLeft:35, fontWeight:'bold', right: 35, marginTop: 5}}> Logout </Text>
                        </View>
                        <View>
                            <MaterialCommunityIcons name="logout" size={30}  style={styles.iconss}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <Navbar/>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
    },
    text1:{
        fontSize: 16,
        fontWeight: '600'
    },
    text11:{
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5
    },
    text2:{
        fontSize: 12,
        color: 'gray'
    },
    box:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(217, 217, 217, 0.2)',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
    },
    person: {
        color: '#41B5CF',
        position: 'relative',
        marginLeft: 60,
    },
    icon: {
        right: 5,
        color: '#41B5CF',
        marginTop: 5
    },
    icons:{
        color: '#41B5CF',
        marginLeft: 10
    },
    iconss:{
        color: '#FF5757',
        marginLeft: 10
    },
    bottomContent:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottom:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(217, 217, 217, 0.2)',
        borderRadius: 15,
        padding: 15,
        marginBottom: 10,
    }
})
export default Settings;