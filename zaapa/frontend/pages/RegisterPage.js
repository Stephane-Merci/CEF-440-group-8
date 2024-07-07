import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import RegisterForm from '../components/RegistrationForm';
const RegisterPage = () => {
    const handleSubmit = ({ username, email, phone, password }) => {
        console.log(`\nUsername: ${username}\nEmail address: ${email}\nPhone number: ${phone}\nPassword: ${password}\n`);
        navigation.navigate('GuidePageOne')
    };
    const handlePress = () => {
        console.log(`GO TO SIGN IN PAGE!!!!!`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Welcome to Zappa App!</Text>
                <Text style={styles.smallText}>Create Account to enjoy your fast and safe driving!</Text>
            </View>
            <RegisterForm onSubmit={handleSubmit} />
            <View style={styles.group}>
                <Text style={styles.smallText}>Already have an account?</Text>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={styles.labelLink}> Sign in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.group}>
                <View style={styles.line}></View>
                <Text style={styles.smallText}>  or with  </Text>
                <View style={styles.line}></View>
            </View>
            <TouchableOpacity style={styles.buttonOutline}>
                <Image style={styles.image} source={require('../assets/devicon_google.png')} resizeMode="contain" />
                <Text style={styles.buttonTextOut}>Sign up with Google</Text>
            </TouchableOpacity>
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
        paddingHorizontal: 15
    },
    header: {
        marginBottom: 25,
    },
    heading: {
        fontSize: 20,
        fontWeight: '800',
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
        borderColor: 'rgb(156, 163, 175, 0.5)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextOut: {
        fontSize: 16,
        fontWeight: '600',
        opacity: 0.75,
    },
});

export default RegisterPage;
