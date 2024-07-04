import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';

const RoadLearnList = ({ title, description }) => {
    return (
        <View style={styles.roadTip}>
            <View>
                <Text style={styles.signName}>Turn Left</Text>
                <Text style={styles.descript}>Logi stic regression is a fundamental classification technique...</Text>
                <TouchableOpacity style={styles.learnMore}>
                    <Text style={styles.learnText}> Lear More</Text>
                    <EvilIcons name="chevron-right" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
            <Image />
        </View>
    )
}

styles = StyleSheet.create({
    roadTip: {
        width: 345,
        backgroundColor: 'rgba(156, 163, 175, 0.2)',
        borderRadius: 20,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 10
    },
    signName: {
        fontSize: 18,
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
        marginTop: 15
    },
    learnText: {
        color: '#FFFFFF',
        fontSize: 13,
    },

})

export default RoadLearnList