import  {View, Text,  StyleSheet, TouchableOpacity } from 'react-native'
import  React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';


const Notif = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontWeight: 'bold'}}> Speed Bump </Text>
                <Text> In 30mins there is a speed bump be careful </Text>
            </View>
            <View style={styles.line}></View>
            <View>
                 <FontAwesome6 name="diamond-turn-right" size={40} style={styles.icon}/>
            </View>
           
        </View>

    );
}

const styles=StyleSheet.create({
    icon:{
        color: 'white',
    },
    container:{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 90,
        padding: 19,
        borderRadius: 8,
        backgroundColor: '#227B98',
        flexDirection: 'row',
    },
    line:{
        height: 90,
        width: 10,
        backgroundColor: 'white',
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    }
})
export default Notif;