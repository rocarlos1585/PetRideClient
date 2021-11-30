import { StackScreenProps } from '@react-navigation/stack'
import axios from 'axios'
import React, { useState } from 'react'
import { Alert, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { apiUrl } from '../global/api'
import { black, lightBlue, red, yellow } from '../global/color'

interface Props extends StackScreenProps<any, any>{}


export const LoginScreen = ({navigation, route}:Props) => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const handleLogIn=async ()=>{

        await axios.get(`${apiUrl}/checklogin/${user}/${pass}`)
        .then(function (response) {

            console.log(response.data.success.status)

            if(!response.data.success.status){
                return Alert.alert('Credenciales incorrectas, intente nuevamente')
            }else{

                navigation.navigate('drawerLogged')
                // navigation.navigate('MainTab', {
                //     token:response.data.access_token,
                //     userData:response.data.user,
                //     // email:response.data.user.email
                // })
            }
        
        })
        .catch(function (error) {
          console.log(error);
          console.log('Error en la solicitúd', 'Ocurrió un error en la conexión.')
          Alert.alert('Ha ocurrido un error, intente nuevamente mas tarde')
        });

    }






    return (
        <View style={styles.loginContainer}>
            <ImageBackground source={require('../images/Fondo.jpg')} resizeMode="cover" style={styles.imageBackground}>
                <Image source={require('../images/logoPetride.png')} style={styles.logo}></Image>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setUser(text)}
                    value={user}
                    placeholder="correo"
                    keyboardType='ascii-capable'
                />

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPass(text)}
                    value={pass}
                    placeholder="contraseña"
                    keyboardType='ascii-capable'
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={ () => handleLogIn()} activeOpacity={0.9} style={styles.btnEntrar}>
                    <Text style={styles.textEntrar}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('registroClienteScreen')} activeOpacity={0.9} style={styles.buttonRegistrar}>
                    <Text style={styles.textButtonRegistrar}>Registrate</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={styles.textOlvidoPass}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        backgroundColor:'white'
    },

    imageBackground: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        
    },

    logo:{
        width:200,
        height:200,
        top:-30
    },

    input:{
        
        fontSize:12,
        padding:0,
        paddingLeft:5,
        width:'80%',
        height:30,
        backgroundColor:'#d2ebfa',
        marginVertical:10,
        borderRadius:5

    },

    btnEntrar:{
        width:300,
        height:40,
        marginVertical:20,
        backgroundColor:'#F8D93C',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },

    textEntrar:{
        fontSize:30,
        color:'#707070',
    },

    buttonRegistrar:{
        width:300,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },

    textButtonRegistrar:{
        fontSize:15,
        fontWeight:'bold',
        color:black
    },

    textOlvidoPass:{
        fontSize:15,
        fontWeight:'bold'
    }


})
