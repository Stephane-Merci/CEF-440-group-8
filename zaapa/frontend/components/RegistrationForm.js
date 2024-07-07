import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Joi from 'joi-browser';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RegisterForm = ({ onSubmit, isLogin }) => {
    const navigation = useNavigation();

    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const [errors, setErrors] = useState({});

    const schema = isLogin ? Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required().label('Email Address'),
        password: Joi.string().min(8).required().label('Password'),
    }) : Joi.object({
        username: Joi.string().min(3).required().error((errors) => {
            return {
                message: 'Username must be of at least 3 characters long',
            };
        }).label('Username'),
        email: Joi.string().email().required().error((errors) => {
            return {
                message: 'Email address must be a valid email',
            };
        }).label('Email Address'),
        phone: Joi.string().regex(/^\d+$/).required().error((errors) => {
            return {
                message: 'Phone Number must be a valid 10-digit number',
            };
        }).label('Phone Number'),

        password: Joi.string().min(8).required().error((errors) => {
            return {
                message: 'Password length must be of at least 8 characters long',
            };
        }).label('Password'),
        confirmPass: Joi.string().valid(Joi.ref('password')).required().label('Confirm password').options({
            language: {
                any: {
                    allowOnly: '!!Passwords do not match',
                },
            },
        }),
    });

    const validate = () => {
        const data = isLogin ? { email, password } : { username, email, phone, password, confirmPass };
        const { error } = schema.validate(data, { abortEarly: false });

        if (!error) return null;

        const validationErrors = {};
        for (let item of error.details) {
            validationErrors[item.path[0]] = item.message;
        }
        return validationErrors;
    };

    const handleSubmit = () => {
        const validationErrors = validate();
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }

        // Call the onSubmit callback with form data
        const data = isLogin ? { email, password } : { username, email, phone, password };
        onSubmit(data);

        // Clear the form fields and errors after successful submission
        setUsername('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPass('');
        setErrors({});
    };

    const handlePress = () => {
        console.log('GO TO FORGET PASSWORD PAGE!!!!!');
    };

    return (
        <View>
            {!isLogin && (
                <View style={styles.inputField}>
                    <TextInput
                        style={[styles.input, errors.username && styles.inputError]}
                        placeholder="Enter your name"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <Text style={styles.inputLabel}>Name</Text>
                    {errors.username && <Text style={styles.error}>{errors.username}</Text>}
                </View>
            )}
            <View style={styles.inputField}>
                <TextInput
                    style={[styles.input, errors.email && styles.inputError]}
                    placeholder="Enter your email address"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.inputLabel}>Email Address</Text>
                {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>
            {!isLogin && (
                <View style={styles.inputField}>
                    <TextInput
                        style={[styles.input, errors.phone && styles.inputError]}
                        placeholder="Enter your Phone Number"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="numeric"
                    />
                    <Text style={styles.inputLabel}>Phone Number</Text>
                    {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
                </View>
            )}
            <View style={styles.inputField}>
                <TextInput
                    style={[styles.input, errors.password && styles.inputError]}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={isPasswordShown}
                />
                <Text style={styles.inputLabel}>Password</Text>
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                <TouchableOpacity  onPress={()=> setIsPasswordShown(!isPasswordShown)}>
                        {
                            isPasswordShown == true ? (
                                <Ionicons name='eye-off' size={24} style={styles.icon}/>
                            ):(
                                <Ionicons name='eye' size={24} style={styles.icon}/>
                            )
                        }
                       
                </TouchableOpacity>
                {isLogin && (
                    <TouchableOpacity onPress={()=> navigation.navigate('PassForgotEmail')}>
                        <Text style={styles.labelLink}>Forget password?</Text>
                    </TouchableOpacity>
                )}
            </View>
            {!isLogin && (
                <View style={styles.inputField}>
                    <TextInput
                        style={[styles.input, errors.confirmPass && styles.inputError]}
                        placeholder="Confirm password"
                        value={confirmPass}
                        onChangeText={setConfirmPass}
                        secureTextEntry={isPasswordShown}
                    />
                    <Text style={styles.inputLabel}>Confirm password</Text>
                    {errors.confirmPass && <Text style={styles.error}>{errors.confirmPass}</Text>}
                    <TouchableOpacity  onPress={()=> setIsPasswordShown(!isPasswordShown)}>
                        {
                            isPasswordShown == true ? (
                                <Ionicons name='eye-off' size={24} style={styles.icon}/>
                            ):(
                                <Ionicons name='eye' size={24} style={styles.icon}/>
                            )
                        }
                       
                </TouchableOpacity>
                </View>
            )}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>{isLogin ? 'Log in' : 'Sign up'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
    labelLink: {
        fontSize: 13,
        color: '#41B5CF',
        fontWeight: '300',
    },
    icon:{
        color: '#41B5CF',
        right: 12,
        top: -35,
        position: 'absolute',
    },
});

export default RegisterForm;
