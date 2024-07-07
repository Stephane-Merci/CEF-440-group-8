import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const Navbar = ({ Explore, Saved, Learn, Settings }) => {
    const navigation = useNavigation();
    const startNavigation = () => {
        navigation.navigate('Home')
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <SimpleLineIcons name="location-pin" style={[styles.icon, Explore && styles.active]} size={24}  />
                <Text style={[styles.text, Explore && styles.active]}> Explore </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SavedLocations')}>
                <FontAwesome5 name="location-arrow" style={[styles.icon, Saved && styles.active]}  size={24} />
                <Text style={[styles.text, Saved && styles.active]}> Saved </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LearnPage')}>
                <Entypo name='open-book' style={[styles.icon, Learn && styles.active]}  size={24} />
                <Text style={[styles.text, Learn && styles.active]}> Learn </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Ionicons name="settings-outline" style={[styles.icon, Settings && styles.active]}  size={24} />
                <Text style={[styles.text, Settings && styles.active]}> Settings </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignSelf: 'center',
        position: 'absolute',
        width: '94%',
        bottom: 20,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: 'rgba(217, 217, 217, 0.9)',
    },
    icon: {
        marginLeft: 10,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.5)',

    },
    active:{
        color: '#41B5CF',
    }
})
export default Navbar;