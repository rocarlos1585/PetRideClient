import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'



export const LoginScreen = () => {
    return (
        <View style={styles.loginContainer}>
            <ImageBackground source={require('../images/Fondo.jpg')} resizeMode="cover" style={styles.imageBackground}>
                <Image source={require('../images/logoPetride.png')} style={styles.logo}></Image>
                <TextInput
                    style={styles.input}
                   //onChangeText={onChangeNumber}
                    //value={number}
                    placeholder="correo"
                    keyboardType='ascii-capable'
                />

                <TextInput
                    style={styles.input}
                   //onChangeText={onChangeNumber}
                    //value={number}
                    placeholder="contraseña "
                    keyboardType='ascii-capable'
                />

                <TouchableOpacity activeOpacity={0.9} style={styles.btnEntrar}>
                    <Text style={styles.textEntrar}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
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
        width:'80%',
        height:40,
        marginTop:40,
        marginBottom:40,
        backgroundColor:'#F8D93C',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },

    textEntrar:{
        fontSize:30,
        color:'#707070',
        
    },

    textOlvidoPass:{
        fontSize:15,
        fontWeight:'bold'
    }


})
