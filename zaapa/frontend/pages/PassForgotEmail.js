import  {View, Text,  StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import  React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const PassForgotEmail = () => {
    const navigation = useNavigation();

    const handlePress= () => {
        console.log('Road State Updated');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection: "row"}} onPress={()=> navigation.navigate('LoginPage')}>
                <Feather name="arrow-left" size={24} style={styles.icon1}/>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 5}}>Forgot Password</Text>
            </TouchableOpacity>

            <Image source={require('../assets/password.png')} style={{marginBottom: 19, alignSelf:'center'}}/>

            <Text style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>Forgot Password ?</Text>
            <Text style={{textAlign: 'center', color: 'gray', marginBottom: 15}}> Please enter your email to receive a verification code to set a new password </Text>

            
            <View style={styles.inputFiled}>
                    <TextInput
                    placeholder='Enter your email address'
                    />
                <Text style={styles.text}>Email Address</Text>
            </View>

            <View style={styles.inputFiled}>
                    <TextInput
                    placeholder='------'
                    style={styles.placeholder}
                    />
                <Text style={styles.text2}>Get Code</Text>
                <Text style={styles.text}>Code</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SuccessPage')}> 
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('PassForgotPhone')}>
                <Text style={{color: '#41B5CF'}}>Phone Number Verification</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        paddingTop: 45,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        flex: 1
    },
    button:{
        borderRadius: 20,
        backgroundColor: '#41B5CF',
        border: 1,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 25
    },  
    buttonText:{
        fontWeight: '600',
        color: 'white',
    }, 
    icon1:{
        color:'#227B98'
    },
    text:{
        color: '#41B5CF',
        position: 'absolute',
        top: -13,
        left: 10,
        backgroundColor: '#FFFFFF'
    },
    text2:{
        position: 'absolute',
        right: 10,
        color: '#41B5CF',
        top: 16
    },
    field:{
        marginTop: 30,
    },
    inputFiled:{
        marginTop: 25,
        borderColor: '#9CA3AF',
        color: '#9CA3AF',
        borderWidth: 1,
        padding: 12,
        borderRadius: 10,
        fontSize: 15,
    },
    
})
export default PassForgotEmail;