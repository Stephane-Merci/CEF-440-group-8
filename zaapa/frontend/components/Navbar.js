import  {View, Text,  StyleSheet, TouchableOpacity } from 'react-native'
import  React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';




const Navbar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <SimpleLineIcons name="location-pin" style={styles.icon}/>
                <Text style={styles.text}> Explore </Text>                
            </TouchableOpacity>

            <TouchableOpacity>
                <FontAwesome5  name="location-arrow" style={styles.icon}/>
                <Text style={styles.text}> Saved </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Entypo name='open-book' style={styles.icon}/>
                <Text style={styles.text}> Learn </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="settings-outline" style={styles.icon}/>
                <Text style={styles.text}> Settings </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        justifyContent: 'space-evenly',
        padding: 5,
        // marginTop: 30,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: 'rgba(217, 217, 217, 0.2)',
    },
    icon:{
        marginLeft: 10,
        fontSize: 20,
    },
    text:{
        fontSize: 12,
    }
})
export default Navbar;