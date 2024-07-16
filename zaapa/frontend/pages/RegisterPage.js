import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Joi from 'joi-browser';
import { useNavigation } from '@react-navigation/native';

const RegisterPage = () => {
    const navigation = useNavigation();

    // State variables
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [errors, setErrors] = useState({});

    // Joi schema for form validation
    const schema = Joi.object({
        name: Joi.string().min(3).required().label('Username'),
        email: Joi.string().email().required().label('Email Address'),
        phoneNumber: Joi.string().regex(/^\+\d{1,3}\d{9}$/).required().label('Phone Number'),
        password: Joi.string().min(8).required().label('Password'),
        confirmPass: Joi.string().valid(Joi.ref('password')).required().label('Confirm Password'),
    });

    // Function to validate form data
    const validate = () => {
        const data = { name, email, phoneNumber, password, confirmPass };
        const { error } = schema.validate(data, { abortEarly: false });

        if (!error) return null;

        const validationErrors = {};
        error.details.forEach(item => {
            validationErrors[item.context.key] = item.message;
        });
        return validationErrors;
    };

    // Function to handle form submission
    const handleSubmit = async () => {
        const validationErrors = validate();

        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }

        const registrationData = { name, email, phoneNumber, password };

        try {
            const response = await fetch('http://192.168.246.97:4000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Registration failed. Please try again.');
            }

            Alert.alert('Success', 'Registration successful!');
            navigation.navigate('GuidePageOne');
        } catch (error) {
            Alert.alert('Error', error.message || 'Something went wrong. Please try again.');
            console.error('Error:', error);
        }
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    // Function to navigate to login page
    const handlePress = () => {
        navigation.navigate('LoginPage');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Welcome to Zappa App!</Text>
                <Text style={styles.smallText}>Create Account to enjoy your fast and safe driving!</Text>
            </View>

            {/* Username input */}
            <View style={styles.inputField}>
                <TextInput
                    style={[styles.input, errors.name && styles.inputError]}
                    placeholder="Enter your username"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Text style={styles.inputLabel}>Username</Text>
                {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            </View>

            {/* Email input */}
            <View style={styles.inputField}>
                <TextInput
                    style={[styles.input, errors.email && styles.inputError]}
                    placeholder="Enter your email address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Text style={styles.inputLabel}>Email Address</Text>
                {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>

            {/* Phone number input */}
            <View style={styles.inputField}>
                <TextInput
                    style={[styles.input, errors.phoneNumber && styles.inputError]}
                    placeholder="Enter your phone number (e.g., +237677453423)"
                    value={phoneNumber}
                    onChangeText={text => setPhoneNumber(text)}
                />
                <Text style={styles.inputLabel}>Phone Number</Text>
                {errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}
            </View>

            {/* Password input */}
            <View style={styles.inputField}>
                <TextInput
                    style={[styles.input, errors.password && styles.inputError]}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={!isPasswordShown}
                />
                <Text style={styles.inputLabel}>Password</Text>
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Ionicons name={isPasswordShown ? 'eye-off' : 'eye'} size={24} style={styles.icon} />
                </TouchableOpacity>
            </View>

            {/* Confirm password input */}
            <View style={styles.inputField}>
                <TextInput
                    style={[styles.input, errors.confirmPass && styles.inputError]}
                    placeholder="Confirm password"
                    value={confirmPass}
                    onChangeText={text => setConfirmPass(text)}
                    secureTextEntry={!isPasswordShown}
                />
                <Text style={styles.inputLabel}>Confirm Password</Text>
                {errors.confirmPass && <Text style={styles.error}>{errors.confirmPass}</Text>}
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Ionicons name={isPasswordShown ? 'eye-off' : 'eye'} size={24} style={styles.icon} />
                </TouchableOpacity>
            </View>

            {/* Sign up button */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Already have an account link */}
            <View style={styles.group}>
                <Text style={styles.smallText}>Already have an account?</Text>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={styles.labelLink}> Sign in</Text>
                </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={styles.group}>
                <View style={styles.line} />
                <Text style={styles.smallText}>  or with  </Text>
                <View style={styles.line} />
            </View>

            {/* Sign up with Google */}
            <TouchableOpacity style={styles.buttonOutline}>
                <Image style={styles.image} source={require('../assets/devicon_google.png')} resizeMode="contain" />
                <Text style={styles.buttonTextOut}>Sign up with Google</Text>
            </TouchableOpacity>

            {/* Sign up with Apple */}
            <TouchableOpacity style={styles.buttonOutline}>
                <Text style={styles.buttonTextOut}>Sign up with Apple</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: 25,
    },
    heading: {
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
    },
    smallText: {
        fontSize: 14,
        color: '#9CA3AF',
        fontWeight: '300',
        textAlign: 'center',
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    labelLink: {
        fontSize: 14,
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
        borderColor: '#9CA3AF',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonTextOut: {
        fontSize: 16,
        fontWeight: '600',
        opacity: 0.75,
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

export default RegisterPage;
