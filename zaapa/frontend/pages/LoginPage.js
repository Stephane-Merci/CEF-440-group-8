import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import RegisterForm from '../components/RegistrationForm';

const LoginPage = ({ navigation }) => {
    const handleSubmit = ({ email, password }) => {
        console.log(`\nEmail address: ${email}\nPassword: ${password}\n`);
        navigation.navigate('GuidePageOne')
    };
    const handlePress = () => {
        console.log(`GO TO SIGN IN WITH PHONE NUMBER!!!!!`);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Welcome to Zappa App!</Text>
                <Text style={styles.smallText}>Sign in to enjoy your fast and safe driving!</Text>
            </View>
            <RegisterForm onSubmit={handleSubmit} isLogin={true} />
            <View style={styles.bottom}>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={styles.labelLink}>Sign in with phone number</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.group}>
                <View style={styles.line}></View>
                <Text style={styles.smallText}>  or with  </Text>
                <View style={styles.line}></View>
            </View>
            <TouchableOpacity style={styles.buttonOutline}>
                <Image style={styles.image} source={require('../assets/devicon_google.png')} resizeMode="contain" />
                <Text style={styles.buttonTextOut}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOutline}>
                <Text style={styles.buttonTextOut}>Sign in with Apple</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        flex: 1
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
        marginBottom: 20
    },
});

export default LoginPage
