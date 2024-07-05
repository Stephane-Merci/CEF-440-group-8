import  {View, Text,  StyleSheet, TouchableOpacity, Image } from 'react-native'
import  React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const SuccessPage = () => {
    const handlePress= () => {
        console.log('Road State Updated');
    };
    return (
        <View style={styles.container}>
            <Image source={require('../assets/lock.png')} style={{marginBottom: 19, marginLeft: 50}}/>
            <Text style={{textAlign: 'center', fontSize: 22}}>Password changed Succesfully !</Text>
            <Text style={{textAlign: 'center', color: 'gray', marginBottom: 15}}>Your password has been changed Succesfully</Text>
            <TouchableOpacity style={styles.button} onpress={handlePress}> 
                <Text style={styles.buttonText}>ok</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
    },
    button:{
        borderRadius: 20,
        backgroundColor: '#41B5CF',
        border: 1,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 12
    },  
    buttonText:{
        fontWeight: '600',
        color: 'white',
    }, 
})
export default SuccessPage;