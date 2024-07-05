import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import RoadLearnList from '../components/RoadLearnList'
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
const RoadSignList = () => {
    return (
        <View>
            <TouchableOpacity style={styles.flex}>
                <Ionicons name="arrow-back-outline" size={24} color="#41B5CF" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Search road sign'
                />
                <EvilIcons name="search" size={32} style={styles.icon} color="#9CA3AF" />
            </View>
            <View style={styles.wrap}>
                <RoadLearnList title={"Turn Left"} description={"Logistic regression is a fundamental classification technique..."} />
                <RoadLearnList title={"Turn Left"} description={"Logistic regression is a fundamental classification technique..."} />
                <RoadLearnList title={"Turn Left"} description={"Logistic regression is a fundamental classification technique..."} />
                <RoadLearnList title={"Turn Left"} description={"Logistic regression is a fundamental classification technique..."} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
        gap: 5,
        marginBottom: 20
    },
    backText: {
        color: '#41B5CF',
        fontSize: 15
    },
    wrap: {
        marginTop: 30,
        height: 595,
        overflow: 'scroll'
    },
    input: {
        height: 45,
        fontSize: 15,
        color: '#9CA3AF',
        borderColor: '#9CA3AF',
        opacity: 0.75,
        borderWidth: 1,
        paddingLeft: 40,
        borderRadius: 20,
    },
    icon: {
        position: 'absolute',
        top: 7,
        left: 6
    },
})
export default RoadSignList