import  {View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import  React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Joi from 'joi-browser';


const CreateNewPassword = ({ onSubmit, isLogin }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [errors, setErrors] = useState({});

    const schema =  Joi.object({
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
        const data = { password, confirmPass };
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
        const data =  { password };
        onSubmit(data);

        // Clear the form fields and errors after successful submission
        setPassword('');
        setConfirmPass('');
        setErrors({});
    };

    const handlePress = () => {
        console.log('GO TO FORGET PASSWORD PAGE!!!!!');
    };

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <Feather name="arrow-left" size={24} style={styles.icon1}/>
                <Text style={{fontSize: 16, marginLeft: 5}}>Create New Password</Text>
            </View>

            <Text style={{marginTop: 10, color: 'gray'}}>Your new password must be different from the previos one</Text>

            <View style={styles.field}>
                <View style={[styles.inputFiled, errors.password && styles.inputError]}>
                    <TextInput
                    placeholder='Enter your current password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={isPasswordShown}
                    style={styles.placeholder}
                    />
                     <TouchableOpacity  onPress={()=> setIsPasswordShown(!isPasswordShown)}>
                        {
                            isPasswordShown == true ? (
                                <Ionicons name='eye-off' size={24} style={styles.icon}/>
                            ):(
                                <Ionicons name='eye' size={24} style={styles.icon}/>
                            )
                        }
                       
                    </TouchableOpacity>
                <Text style={styles.text}>Password</Text>
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                </View>

                <View style={[styles.inputFiled, errors.confirmPass && styles.inputError]}>
                    <TextInput
                    placeholder='Enter your new password'
                    secureTextEntry={isPasswordShown}
                    value={confirmPass}
                    onChangeText={setConfirmPass}
                    style={styles.placeholder}
                    />
                    <TouchableOpacity onPress={()=> setIsPasswordShown(!isPasswordShown)}>
                        {
                            isPasswordShown == true ? (
                                <Ionicons name='eye-off' size={24} style={styles.icon}/>
                            ):(
                                <Ionicons name='eye' size={24} style={styles.icon}/>
                            )
                        }
                       
                    </TouchableOpacity>
                <Text style={styles.text}>Confirm Password</Text>
                {errors.confirmPass && <Text style={styles.error}>{errors.confirmPass}</Text>}
                </View>

            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}> 
                <Text style={styles.buttonText}> Reset Password </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
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
        marginTop: 30
    },  
    buttonText:{
        fontWeight: '600',
        color: 'white',
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
    text:{
        color: '#41B5CF',
        position: 'absolute',
        top: -13,
        left: 10,
        backgroundColor: '#FFFFFF'
    },
    icon1:{
        color: '#41B5CF',
    },
    icon:{
        color: '#41B5CF',
        right: 12,
        top: -25,
        position: 'absolute',
    },
    inputFiled:{
        marginTop: 25,
        borderColor: '#9CA3AF',
        color: '#9CA3AF',
        borderWidth: 1,
        padding: 12,
        borderRadius: 10,
        fontSize: 15,
    }
});
export default CreateNewPassword;