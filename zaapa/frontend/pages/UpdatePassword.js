import  {View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import  React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';





const UpdatePassword = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
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

                <View style={styles.inputFiled}>
                    <TextInput
                    placeholder='Enter your new password'
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
                </View>

                <View style={styles.inputFiled}>
                    <TextInput
                    placeholder='Confirm new password'
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
                </View> 
            </View>

            <TouchableOpacity style={styles.button} onpress={handlePress}> 
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
    },
    button:{
        borderRadius: 20,
        backgroundColor: '#41B5CF',
        border: 1,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 350
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