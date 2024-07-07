import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import LearnRoad from '../components/LearnRoad';

const NotifPref = ({ navigation }) => {
    const handlePress = () => {
        console.log(`GO Next guide page`);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection: "row"}} onPress={() => navigation.navigate('Settings')}>
                <Feather name="arrow-left" size={24} style={styles.icon1}/>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 5, color:'#227B98'}}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.heading}> Notification Preferences </Text>
            <Text style={styles.heading2}> Zaapa notification preferences setting </Text>
            <View>
                <LearnRoad title={"Road signs"}
                    description={"Learn a bout different road signs for a save drive in Zaapa"} handlePress={handlePress} />
                <LearnRoad title={"Road states"}
                    description={"Learn a bout different road states for a save drive in Zaapa"} handlePress={handlePress} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        flex: 1
    },
    icon1:{
        color:'#227B98'
    },
    head: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 3
    },
    heading: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    heading2: {
        color: 'gray',
        textAlign: 'center',
        marginBottom: 60
    },
    roadTip: {
        width: 345,
        backgroundColor: 'rgba(156, 163, 175, 0.2)',
        borderRadius: 20,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    signName: {
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 0
    },
    descript: {
        fontSize: 14,
        width: 210,
        color: 'rgba(156, 163, 175, 1)',
    },
    learnMore: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#41B5CF',
        padding: 5,
        borderRadius: 20,
        marginTop: 20
    },
    learnText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    small: {
        fontSize: 14,
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 10
    },

})
export default NotifPref;