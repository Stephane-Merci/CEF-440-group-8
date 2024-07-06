import  {View, Text,  StyleSheet, TouchableOpacity } from 'react-native'
import  React from 'react'
import { MaterialIcons } from '@expo/vector-icons';


const PopupQuestion = () => {
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <MaterialIcons name="security" size={54} style={styles.icon}/>
            </View>
            
            <Text style={styles.text}> Are you sure you want to update?</Text>

            <View style={styles.boxes}>
                <View style={styles.box}>
                    <Text style={{color: 'white'}}> Yes </Text>       
                </View>
                <View style={styles.box}>
                    <Text style={{color: 'white'}}> No </Text>
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
        borderRadius: 8,
        padding: 20,

        
        backgroundColor: 'transparent',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4, 
        position: 'absolute',
        top: 0,
        left: 0,
    },
    boxes:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    box:{
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 5,
        paddingVertical: 5,
        paddingHorizontal: 30,
        backgroundColor: '#41B5CF',
    },
    icon:{
        size: 44,
        color: '#41B5CF',
    },
    circle:{
        borderRadius: 80,
        width: 70,
        height: 70,
        alignItems: 'center',
        borderColor: '#41B5CF',
        justifyContent: 'center',
        backgroundColor: 'rgba(65, 181, 207, 0.4)',
        left: 90,
    },
    text:{
        textAlign: 'center', 
        fontSize: 24, 
        fontWeight: '400',
        marginTop: 10,
        marginBottom: 35,
    },
})
export default PopupQuestion;