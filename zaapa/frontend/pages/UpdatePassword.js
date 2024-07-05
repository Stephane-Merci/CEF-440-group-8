import  {View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import  React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Joi from 'joi-browser';



const UpdatePassword = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [errors, setErrors] = useState({});

    const schema = Joi.object({
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
        const data = { password };
        onSubmit(data);

        // Clear the form fields and errors after successful submission
        setPassword('');
        setConfirmPass('');
        setErrors({});
    };

    const handlePress= () => {
        console.log('Road State Updated');
    };
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <Feather name="arrow-left" size={24} style={styles.icon1}/>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 5, color:'#227B98'}}>Back</Text>
            </View>

            <Text style={{fontWeight: 700, textAlign: 'center', fontSize: 20, marginTop: 10}}>Modify Password</Text>

            <View style={styles.field}>

                <View style={styles.inputFiled}>
                    <TextInput
                    placeholder='Enter your current password'
                    style={styles.placeholder}
                    />
                <Text style={styles.text}>Current Password</Text>
                </View>

                <View style={[styles.inputFiled, errors.password && styles.inputError]}>
                    <TextInput
                    placeholder='Enter your new password'
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
                <Text style={styles.text}>New Password</Text>
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                </View>

                <View style={[styles.inputFiled, errors.confirmPass && styles.inputError]}>
                    <TextInput
                    placeholder='Confirm new password'
                    value={confirmPass}
                    onChangeText={setConfirmPass}
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
                <Text style={styles.text}>Confirm Password</Text>
                {errors.confirmPass && <Text style={styles.error}>{errors.confirmPass}</Text>}
                </View> 
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}> 
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
    },
    button:{
        borderRadius: 20,
        backgroundColor: '#41B5CF',
        border: 1,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 350
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
    buttonText:{
        fontWeight: '600',
        color: 'white',
    }, 
    icon:{
        color: '#41B5CF',
        right: 12,
        top: -25,
        position: 'absolute',
    },
    text:{
        color: '#41B5CF',
        position: 'absolute',
        top: -13,
        left: 10,
        backgroundColor: '#FFFFFF'
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
    }
})
export default UpdatePassword;