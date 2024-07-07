import {View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import  React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




const Profile = ({ navigation }) => {
    const handlePress= () => {
        console.log('Road State Updated');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection: "row"}} onPress={() => navigation.navigate('Settings')}>
                <Feather name="arrow-left" size={24} style={styles.icon1}/>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 5, color:'#227B98'}}>Back</Text>
            </TouchableOpacity>
            <Text style={{fontWeight: 700, textAlign: 'center', fontSize: 20, marginTop: 10}}>Profile</Text>
            <Text style={{textAlign: 'center', color: 'gray'}}>Enjoy your fast and safe driving</Text>
            <View>
                <Ionicons name="person-circle-outline" size={200} style={styles.person}/>
            </View>

            <Text style={{fontWeight: 700, textAlign: 'center', fontSize: 20, marginRight: 15, marginTop: -15}}> Gilles Christan</Text>   

            <Text style={{marginBottom: 5, marginTop: 20, fontSize: 18, fontWeight:'700'}}> Details </Text>

            <View style={styles.box}>
                <View>
                    <Text style={styles.text1}> Christian </Text>
                    <Text style={styles.text2}> Username </Text>
                </View>
                <View>
                <FontAwesome5 name="pen" size={24} style={styles.icon}/>
                </View>    
            </View>

            <View style={styles.box}>
                <View>
                    <Text style={styles.text1}> kamdem.gilles@gmail.com </Text>
                    <Text style={styles.text2}> E-mail </Text>
                </View>
                <View>
                    <FontAwesome5 name="pen" size={24} style={styles.icon}/>
                </View>   
            </View>
           
           <View style={styles.box}>
                <View>
                    <Text style={styles.text1}> +237 693746372 </Text>
                    <Text style={styles.text2}> Phone Number </Text>
                </View>
                <View>
                     <FontAwesome5 name="pen" size={24} style={styles.icon}/>
                </View>   
            </View>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('UpdatePassword')}>
                <View>
                    <Text style={styles.text1}> Password </Text>
                </View>
                <View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} style={styles.icon}/>
                </View>     
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onpress={handlePress}> 
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
            
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
    icon1:{
        color:'#227B98'
    },
    text1:{
        fontSize: 16,
        fontWeight: '600'
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
        marginLeft: '23%',
    },
    icon: {
        right: 5,
        color: '#41B5CF',
    },
    button:{
        borderRadius: 20,
        backgroundColor: '#41B5CF',
        border: 1,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: '25%'
    },  
    buttonText:{
        fontWeight: '600',
        color: 'white',
    }, 

})
export default Profile;