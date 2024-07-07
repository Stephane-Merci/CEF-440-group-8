import  {View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import  React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';



const Settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <Ionicons name="settings-outline" size={30}/>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 5}}>Settings</Text>
            </View>
            <View>
                <Ionicons name="person-circle-outline" size={200} style={styles.person}/>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.text1}> Gilles Christan</Text>
                        <Text style={styles.text2}> Douala, Cameroon</Text>
                    </View>
                    <View>
                        <MaterialIcons name="keyboard-arrow-right" size={30} style={styles.icon}/>
                    </View>   
                </View>
            </TouchableOpacity>

            <Text style={{marginBottom: 5, marginTop: 10, fontSize: 18, fontWeight:'700'}}> General </Text>

            <TouchableOpacity onPress={() => navigation.navigate('NotifPref')}>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.text1}> Notifications </Text>
                        <Text style={styles.text2}> Change your Notiicaton Preferences </Text>
                    </View>
                    <View>
                        <MaterialIcons name="keyboard-arrow-right" size={30} style={styles.icon}/>
                    </View>    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onpress={() => console.log('Pressed')}>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.text1}> Language </Text>
                        <Text style={styles.text2}> Choose your Default Language </Text>
                    </View>
                    <View>
                        <MaterialIcons name="keyboard-arrow-right"  size={30} style={styles.icon}/>
                    </View>   
                </View>
            </TouchableOpacity>

            <TouchableOpacity onpress={() => console.log('Pressed')}>
                <View style={styles.box}>
                    <Text style={styles.text11}> Dark Mode </Text>
                    <MaterialCommunityIcons name="toggle-switch" size={30} style={styles.icon}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onpress={() => console.log('Pressed')}>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.text1}> Help Center </Text>
                        <Text style={styles.text2}> Frequently Asked Questions </Text>
                    </View>
                    <View>
                        <MaterialIcons name="keyboard-arrow-right" size={30} style={styles.icon}/>
                    </View>     
                </View>
            </TouchableOpacity>

            <View style={styles.bottomContent}>
                <TouchableOpacity onpress={() => console.log('Pressed')}>
                    <View style={styles.bottom}>
                        <View>
                            <Text style={{fontWeight:'bold', marginTop: 5, marginLeft:'8%'}}> Reset Zaapa </Text>
                        </View>
                        <View>
                            <MaterialIcons name="lock-reset" size={30} style={styles.icons}/>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onpress={() => navigation.navigate('LoginPage')}>
                    <View style={styles.bottom}>
                        <View>
                            <Text style={{marginLeft:'20%', fontWeight:'bold', marginTop: 5}}> Logout </Text>
                        </View>
                        <View>
                            <MaterialCommunityIcons name="logout" size={30}  style={styles.iconss}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <Navbar Settings={true}/>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container:{
        paddingTop: 45,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        flex: 1
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
        marginLeft: '25%',
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