import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

const RoadStateUpdate = () => {
    const options = [
        { label: 'Traffic', value: 'Traffic' },
        { label: 'Accident', value: 'Accident' },
        { label: 'Road Construction', value: 'Road Construction' }
    ];
    const handlePress = () => {
        console.log(`Road State update !!!`);
    };
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (index, value) => {
        if (index >= 0 && index < options.length) {
            setSelectedValue(value);
        }
    };
    return (
        <View>
            <TouchableOpacity style={styles.flex}>
                <Ionicons name="arrow-back-outline" size={24} color="#41B5CF" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.heading}>Road State Update</Text>
                <Text style={styles.smallText}>Real time tracking for better experience.</Text>
                <View style={styles.iconWrapper}>
                    <MaterialCommunityIcons name="camera-plus-outline" size={120} color="#FFFFFF" />
                </View>
            </View>
            <View>
                <View style={styles.inputContainer}>
                    <Text style={styles.boldText}>Road State</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setSelectedValue(value)}
                        items={options}
                        style={{
                            iconContainer: styles.iconContainer,
                            inputIOS: styles.input,
                            inputAndroid: styles.input,
                        }}
                        useNativeAndroidPickerStyle={false}
                        Icon={() => {
                            return <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />;
                        }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.boldText}>Description</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter some description'
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    flex: {
        flexDirection: 'row',
        gap: 5,
        marginBottom: 20
    },
    backText: {
        color: '#41B5CF',
        fontSize: 15
    },
    iconWrapper: {
        width: 200,
        height: 200,
        borderRadius: 1000,
        backgroundColor: '#41B5CF',
        alignSelf: 'center',
        marginBottom: 25,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
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
    },
    boldText: {
        fontSize: 16,
        fontWeight: '500',
    },
    input: {
        fontSize: 14,
        fontWeight: '500',
        backgroundColor: 'rgba(156, 163, 175, 0.3)',
        padding: 8,
        borderBottomWidth: 1,
        borderColor: '#9CA3AF'
    },
    inputContainer: {
        marginBottom: 20,
    },
    wrapper: {
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 50
    },
    button: {
        backgroundColor: '#41B5CF',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '700',
    },
    iconContainer: {
        top: 10,
        right: 12,
    },
})

export default RoadStateUpdate