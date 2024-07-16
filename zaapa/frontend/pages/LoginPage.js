import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Joi from 'joi-browser';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
    const navigation = useNavigation();

    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [emailOrPhone, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const schema = Joi.object({
        emailOrPhone: Joi.string().email({ tlds: { allow: false } }).required().label('Email Address'),
        password: Joi.string().min(8).required().label('Password'),
    });

    const validate = () => {
        const data = { emailOrPhone, password };
        const { error } = schema.validate(data, { abortEarly: false });

        if (!error) return null;

        const validationErrors = {};
        for (let item of error.details) {
            validationErrors[item.path[0]] = item.message;
        }
        return validationErrors;
    };

    const handleSubmit = async () => {
        const validationErrors = validate();
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }

        const loginData = { emailOrPhone, password };

        try {
            const response = await fetch('http://192.168.246.97:4000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (!response.ok) {
                Alert.alert('Error', data.error || 'Login failed. Please try again.');
                return;
            }

            Alert.alert('Success', 'Login successful!');
            navigation.navigate('Home');

            setEmail('');
            setPassword('');
            setErrors({});
        } catch (error) {
            Alert.alert('Error', 'Something went wrong. Please try again.');
            console.error('Error:', error);
        }
    };

    const handlePress = () => {
        console.log('GO TO SIGN IN WITH PHONE NUMBER!!!!!');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Welcome to Zappa App!</Text>
                <Text style={styles.smallText}>Sign in to enjoy your fast and safe driving!</Text>
            </View>
            <View style={styles.inputField}>
                <TextInput
                    style={[styles.input, errors.emailOrPhone && styles.inputError]}
                    placeholder="Enter your email address"
                    value={emailOrPhone}
                    onChangeText={setEmail}
                />
                <Text style={styles.inputLabel}>Email Address</Text>
                {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>
            <View style={styles.inputField}>
                <TextInput
                    style={[styles.input, errors.password && styles.inputError]}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordShown}
                />
                <Text style={styles.inputLabel}>Password</Text>
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)}>
                    {isPasswordShown ? (
                        <Ionicons name='eye-off' size={24} style={styles.icon} />
                    ) : (
                        <Ionicons name='eye' size={24} style={styles.icon} />
                    )}
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.bottom}>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={styles.labelLink}>Sign in with phone number</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.group}>
                <View style={styles.line}></View>
                <Text style={styles.smallText}>or with</Text>
                <View style={styles.line}></View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
                <Text style={{ textAlign: 'center' }}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOutline}>
                <Image
                    style={styles.image}
                    source={require('../assets/devicon_google.png')}
                    resizeMode="contain"
                />
                <Text style={styles.buttonTextOut}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOutline}>
                <Text style={styles.buttonTextOut}>Sign in with Apple</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        marginBottom: 45,
    },
    heading: {
        fontSize: 20,
        fontWeight: '800',
    },
    smallText: {
        fontSize: 14,
        color: '#9CA3AF',
        fontWeight: '300',
        textAlign: 'left',
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    labelLink: {
        fontSize: 13,
        color: '#41B5CF',
        fontWeight: '300',
    },
    line: {
        borderBottomColor: '#9CA3AF',
        borderBottomWidth: 1,
        marginVertical: 10,
        width: 139,
    },
    image: {
        width: 22,
        height: 22,
        marginRight: 5,
    },
    buttonOutline: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(156, 163, 175, 0.5)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextOut: {
        fontSize: 16,
        fontWeight: '600',
        opacity: 0.75,
    },
    bottom: {
        marginBottom: 20,
    },
    inputField: {
        marginBottom: 35,
    },
    inputLabel: {
        color: '#41B5CF',
        fontSize: 15,
        fontWeight: '600',
        backgroundColor: '#FFFFFF',
        marginLeft: 10,
        paddingHorizontal: 5,
        position: 'absolute',
        top: -12,
    },
    input: {
        height: 45,
        fontSize: 15,
        color: '#9CA3AF',
        borderColor: '#9CA3AF',
        opacity: 0.75,
        borderWidth: 1,
        padding: 12,
        borderRadius: 10,
    },
    inputError: {
        borderColor: '#FF5757',
    },
    error: {
        fontSize: 12,
        color: '#FF5757',
        bottom: -18,
        position: 'absolute'
    },
    button: {
        backgroundColor: '#41B5CF',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 8
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '700',
    },
    icon: {
        color: '#41B5CF',
        right: 12,
        top: -35,
        position: 'absolute',
    },
});

export default LoginPage;
