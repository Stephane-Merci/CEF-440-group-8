import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const EnableLocation = () => {
    const handlePress = () => {
        console.log(`Location enable`);
    };
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.iconWrapper}>
                </View>
                <View>
                    <Text style={styles.heading}>Enable Location</Text>
                    <Text style={styles.smallText}>You'll need to enable your location in order to use Zaapa.</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Enable Access</Text>
            </TouchableOpacity>
        </View>
    )
}


styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 30,
        paddingVertical: 40,
        borderRadius: 25,
    },
    iconWrapper: {
        width: 120,
        height: 120,
        borderRadius: 1000,
        backgroundColor: '#D6F2F7',
        alignSelf: 'center',
        marginBottom: 25
    },
    heading: {
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center',
    },
    smallText: {
        fontSize: 14,
        color: '#9CA3AF',
        fontWeight: '300',
        textAlign: 'center',
        width: 235,
        marginBottom: 20
    },
    wrapper: {
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 50
    },
    circle: {
        width: 22,
        height: 22,
        borderRadius: 100,
        backgroundColor: '#D6F2F7',
    },
    bold: {
        backgroundColor: '#41B5CF'
    },
    button: {
        backgroundColor: '#41B5CF',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 8,
        width: 250
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '700',
    },
})

export default EnableLocation