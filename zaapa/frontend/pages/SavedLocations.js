import  {View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import  React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';



const SavedLocations = () => {
    const handlePress= () => {
        console.log('Road State Updated');
    };
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <MaterialIcons name='add-location-alt' size={30}/>
                <Text style={{color: 'black', fontSize: 18, marginTop: 5, marginLeft: 5}}>Saved Locations</Text>
            </View>
  

            <Text style={{marginBottom: 5, marginTop: 20, fontSize: 18, fontWeight:'700'}}> My Location </Text>

            <View style={styles.box}>
                <View style={{flexDirection:'row'}}>
                <View style={styles.circle}>
                    <EvilIcons name="location" size={35} style={styles.icon}/>
                </View>
                <View>
                    <Text style={styles.text1}> Me </Text>
                    <Text style={styles.text2}> Douala, Cameroon </Text>
                </View>
                </View>
                
                <View>
                <MaterialCommunityIcons name="share-variant-outline" size={30} style={styles.icon}/>
                </View>    
            </View>

            <Text style={{marginBottom: 5, marginTop: 20, fontSize: 18, fontWeight:'700'}}> My Stations </Text>

            <View style={styles.box}>
                <View style={{flexDirection:'row'}}>
                <View style={styles.circle}>
                    <MaterialIcons name="house" size={35} style={styles.iconss}/>
                </View>
                <View>
                    <Text style={styles.text1}> Parcour Vita </Text>
                    <Text style={styles.text2}> Douala, Cameroon </Text>
                </View>
                </View>
               
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome name="share-square" size={30} style={styles.icon}/>
                    <MaterialCommunityIcons name="close" size={30} style={styles.icon}/>
                </View>   
            </View>
           
           <View style={styles.box}>
            <View style={{flexDirection:'row'}}>
                <View style={styles.circle}>
                    <MaterialIcons name="wallet-travel" size={35} style={styles.iconss}/>
                </View>
                <View>
                    <Text style={styles.text1}> Santa Lucia </Text>
                    <Text style={styles.text2}> Yaounde, Cameroon </Text>
                </View>
            </View>
                
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome name="share-square" size={30} style={styles.icon}/>
                    <MaterialCommunityIcons name="close" size={30} style={styles.icon}/>
                </View>   
            </View>
            
            
            <TouchableOpacity style={styles.button} onpress={handlePress}> 
                <Ionicons name="add-circle-outline" size={28} color="#FFFFFF" />
                <Text style={styles.buttonText}> Add Location</Text>
            </TouchableOpacity>
            <Navbar Saved={true}/>
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
    circle:{
        borderRadius: 50,
        borderColor: '#41B5CF',
        backgroundColor: 'rgba(65, 181, 207, 0.4)',
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
        marginLeft: 60,
    },
    icon: {
        right: 5,
        color: '#41B5CF',
        marginLeft: 12,
        marginTop: 5,
    },
    iconss: {
        right: 5,
        color: '#41B5CF',
        marginLeft: 12,
        marginTop: 5,
        top: -3
    },
    button:{
        borderRadius: 25,
        backgroundColor: '#41B5CF',
        border: 1,
        paddingVertical: 12,
        alignItems: 'center',
        alignSelf: 'flex-end',
        width: '40%',
        justifyContent: 'center',
        gap: 5,
        position: 'absolute',
        bottom: 100,
        right: 25,
        flexDirection: 'row',
    },  
    buttonText:{
        fontWeight: '600',
        fontSize: 16,
        color: 'white',
    }, 

})
export default SavedLocations;