import { StackScreenProps } from '@react-navigation/stack';
import axios from 'axios';
import React, { useState } from 'react'
import { Alert, TouchableOpacity } from 'react-native';
import { ImageBackground, Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { apiUrl } from '../global/api';
import { isEmail } from '../global/regex';

interface Props extends StackScreenProps<any, any>{}

export const RegistroClienteScreen = ({navigation, route}:Props) => {

    const [newRegistroClienteData, setNewRegistroClienteData] = useState({
        nombre:'',
        apellidoP:'',
        apellidoM:'',
        fechaNacimiento:'',
        telCel:'',
        sexo:'',
        domicilio:'',
        colonia:'',
        estado:'',
        codigoPostal:'',
        correo:'',
        password:''
    })

    const handleRegistro = async() =>{
        console.log(newRegistroClienteData)

        if(newRegistroClienteData.nombre==='') return Alert.alert('Ingresa por favor su nombre')

        if(newRegistroClienteData.apellidoP==='') return Alert.alert('Ingresa por favor tu apellido paterno')

        if(newRegistroClienteData.apellidoM==='') return Alert.alert('Ingresa por favor tu apellido materno')

        if(newRegistroClienteData.correo==='') return Alert.alert('Ingresa por favor un correo electronico')

        if(!isEmail.test(newRegistroClienteData.correo) ) return Alert.alert('El correo electronico ingresado no es valido')

        if(newRegistroClienteData.password==='') return Alert.alert('Ingrese por favor una contraseña')

        await axios.get(`${apiUrl}/adduser/${newRegistroClienteData.nombre}/${newRegistroClienteData.apellidoP}/${newRegistroClienteData.apellidoM}/${newRegistroClienteData.correo}/${newRegistroClienteData.password}/3`)
        .then(function (response) {

            console.log(response.data)

            console.log(response.data.success.status)

            if(!response.data.success.status){
                return Alert.alert('Ocurrio un error con alguno de sus datos, intente nuevamente')
            }else{

                Alert.alert(
                    "Usuario Registrado",
                    "Tu cuenta fue creada de manera exitosa",
                    [
                      { text: "OK", onPress: () => navigation.goBack() }
                    ]
                  );

            }
        
        })
        .catch(function (error) {
          console.log(error);
          Alert.alert('Ha ocurrido un error, intente nuevamente mas tarde')
        });
    }




    return (
        <View style={styles.registroClienteContainer}>
            <ImageBackground blurRadius={5} /*source={require('../images/Huellas1.png')}*/ resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.headerForm}>
                    <Image source={require('../images/logoPetride.png')} style={styles.logo} ></Image>
                    <Text style={styles.headerFormText} >Registro Nuevo Cliente</Text>
                </View>

                <ScrollView style={styles.formContainer}>

                    <View style={styles.campoView}>
                        <TextInput
                            style={styles.campoInput}
                            onChangeText={(text) => setNewRegistroClienteData({...newRegistroClienteData, nombre:text})}
                            value={newRegistroClienteData.nombre}
                            placeholder="Nombre "
                            keyboardType='ascii-capable'
                        />

                        <TextInput
                            style={styles.campoInput}
                            onChangeText={(text) => setNewRegistroClienteData({...newRegistroClienteData, apellidoP:text})}
                            value={newRegistroClienteData.apellidoP}
                            placeholder="Apellido paterno "
                            keyboardType='ascii-capable'
                        />
                    </View>

                    <View style={styles.campoView}>
                        <TextInput
                            style={styles.campoInput}
                            onChangeText={(text) => setNewRegistroClienteData({...newRegistroClienteData, apellidoM:text})}
                            value={newRegistroClienteData.apellidoM}
                            placeholder="Apellido materno "
                            keyboardType='ascii-capable'
                        />

                        <TextInput
                            style={styles.campoInput}
                            onChangeText={(text) => setNewRegistroClienteData({...newRegistroClienteData, fechaNacimiento:text})}
                            value={newRegistroClienteData.fechaNacimiento}
                            placeholder="Fecha de nacimiento "
                            keyboardType='ascii-capable'
                        />

                    </View>

                    <View style={styles.campoView}>
                        <TextInput
                            style={styles.campoInput}
                            onChangeText={(text) => setNewRegistroClienteData({...newRegistroClienteData, telCel:text})}
                            value={newRegistroClienteData.telCel}
                            placeholder="Celular "
                            keyboardType='decimal-pad'
                        />

                        <TextInput
                            style={styles.campoInput}
                            onChangeText={(text) => setNewRegistroClienteData({...newRegistroClienteData, sexo:text})}
                            value={newRegistroClienteData.sexo}
                            placeholder="Sexo "
                            keyboardType='ascii-capable'
                        />
                    </View>

                    <View style={styles.campoView}>
                        <TextInput
                            style={styles.campoInput}
                            onChangeText={(text) => setNewRegistroClienteData({...newRegistroClienteData, domicilio:text})}
                            value={newRegistroClienteData.domicilio}
                            placeholder="Domicilio"
                            keyboardType='ascii-capable'
                        />

                        <TextInput
                            style={styles.campoInput}
                            onChangeText={(text) => setNewRegistroClienteData({...newRegistroClienteData, colonia:text})}
                            value={newRegistroClienteData.colonia}
                            placeholder="Colonia"
                            keyboardType='ascii-capable'
                        />
                    </View>

                    <View style={styles.campoView}>
                        <TextInput
                            style={styles.campoInput}
                            onChangeText={(text) => setNewRegistroClienteData({...newRegistroClienteData, estado:text})}
                            value={newRegistroClienteData.estado}
                            placeholder="Estado"
                            keyboardType='ascii-capable'
                        />

                        <TextInput
                            style={styles.campoInput}
                            onChangeText={(text) => setNewRegistroClienteData({...newRegistroClienteData, codigoPostal:text})}
                            value={newRegistroClienteData.codigoPostal}
                            placeholder="Codigo postal"
                            keyboardType='ascii-capable'
                        />
                    </View>

                    <View style={styles.campoView}>
                        <TextInput
                            style={styles.campoInput}
                            onChangeText={(text) => setNewRegistroClienteData({...newRegistroClienteData, correo:text})}
                            value={newRegistroClienteData.correo}
                            placeholder="Correo"
                            keyboardType='ascii-capable'
                        />

                        <TextInput
                            style={styles.campoInput}
                            onChangeText={(text) => setNewRegistroClienteData({...newRegistroClienteData, password:text})}
                            value={newRegistroClienteData.password}
                            placeholder="Contraseña"
                            keyboardType='ascii-capable'
                        />
                    </View>
                </ScrollView>

                <View style={styles.buttonsFormContainer}>



                    <TouchableOpacity onPress={()=> handleRegistro()} style={styles.btnForm}>
                        <Text style={{fontSize:15, fontWeight:'bold'}}>Registrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{...styles.btnForm, backgroundColor:'#A0001A'}}>
                        <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Cancelar</Text>
                    </TouchableOpacity>
                </View>



            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    registroClienteContainer:{
        flex:1,
        backgroundColor:'#d2ebfa'
    },

    imageBackground: {
        flex: 1,
        
    },

    headerForm:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5,
    },

    logo:{
        width:80,
        height:80,
        marginHorizontal:5
    },

    headerFormText:{
        fontSize:20,
        fontWeight:'bold',
        marginHorizontal:20,
        color:'black',

    },

    formContainer:{
        flex:1,
        marginHorizontal:5,
        
    },

    campoView:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:20,
        width:'100%',

    },

    textInput:{
        width:'20%',
        textAlign:'right'
    },

    campoInput:{
        borderBottomWidth:1,
        borderColor:'grey',
        padding:0,
        paddingLeft:5,
        width:'47%',
        height:30,
        marginHorizontal:5
    },

    buttonsFormContainer:{
        flexDirection:'row-reverse',
        justifyContent:'center',
        marginBottom:80
    },

    btnForm:{
        width:150,
        height:50,
        backgroundColor:'#F8D93C',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
        borderRadius:10,
    }
})
