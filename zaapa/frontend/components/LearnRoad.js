import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
const LearnRoad = ({ title, description, handlePress }) => {
    return (
        <TouchableOpacity style={styles.roadSign} onPress={handlePress}>
            <FontAwesome5 name="road" size={48} color="#FFFFFF" />
            <View>
                <Text style={styles.bold}>{title}</Text>
                <Text style={styles.text}>{description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roadSign: {
        width: '100%',
        height: 135,
        backgroundColor: '#41B5CF',
        borderRadius: 20,
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    bold: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 5
    },
    text: {
        color: '#FFFFFF',
        fontSize: 15,
        width: '55%',
    },

})

export default LearnRoad