import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import LearnRoad from '../components/LearnRoad';
import RoadLearnList from '../components/RoadLearnList';
import Navbar from '../components/Navbar';
const LearnPage = () => {
    const handlePress = () => {
        console.log(`GO Next guide page`);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.flex}>
                <Entypo name="open-book" size={28} color="black" />
                <Text style={styles.head}>Learn</Text>
            </TouchableOpacity>
            <Text style={styles.heading}>Zaapa guides on Road Safety to help you optimize your driving journey .</Text>
            <View>
                <LearnRoad title={"Road signs"}
                    description={"Learn a bout different road signs for a save drive in Zaapa"} handlePress={handlePress} />
                <LearnRoad title={"Road states"}
                    description={"Learn a bout different road states for a save drive in Zaapa"} handlePress={handlePress} />
            </View>
            <Text style={styles.small}>Today save tip</Text>
            <RoadLearnList title={"Turn Left"} description={"Logistic regression is a fundamental classification technique..."} />

            <Navbar Learn={true}/>
        </View>
    )
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
        paddingHorizontal: 15
    },
    flex: {
        flexDirection: 'row',
        gap: 5,
        marginBottom: 20,
        alignItems: 'center'
    },
    head: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 3
    },
    heading: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 30
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
export default LearnPage