import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { ModalSeguroViaje } from '../components/ModalSeguroViaje';
import { ModalBuscandoViaje } from '../components/ModalBuscandoViaje';

export const NuevoViajeForm = () => {
    const [state1, setState] = useState('')
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalBuscandoViajeVisible, setModalBuscandoViajeVisible] = useState(false);

    const openModal = () =>{
        setModalVisible(true)
    }
  
    const closeModal = () =>{
        setModalVisible(false)
    }

    const openModalBuscandoViaje = () =>{
        setModalBuscandoViajeVisible(true)
    }
  
    const closeModalBuscandoViaje = () =>{
        setModalBuscandoViajeVisible(false)
    }


    const seguroAceptado = () =>{
        setModalVisible(false)
        
        setModalBuscandoViajeVisible(true)

        //setTimeout(function(){setModalBuscandoViajeVisible(false)}, 1000)
    }

    const seguroNoAceptado = () =>{
        setModalVisible(false)
        
        setModalBuscandoViajeVisible(true)

        //setTimeout(function(){setModalBuscandoViajeVisible(false)}, 1000)
    }

    return (
        <View style={styles.nuevoViajeFormContainer}>
            <ModalSeguroViaje title="Desea agregar seguro de viaje" description="Se agregaran MXN 15.00 adicionales" openModal={openModal} closeModal={closeModal} statusModal={modalVisible} aceptarSeguro={seguroAceptado} rechazarSeguro={seguroNoAceptado} />

            <ModalBuscandoViaje statusModal={modalBuscandoViajeVisible} closeModal={closeModalBuscandoViaje} openModal={openModalBuscandoViaje}/>
            <TextInput
                style={styles.origenDestinoInput}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="¿Cuál es tu punto de partida?"
                keyboardType='ascii-capable'
            />

            <TextInput
                style={styles.origenDestinoInput}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="¿Cuál es tu destino?"
                keyboardType='ascii-capable'
            />

            <View style={styles.datosMascotaContainer}>

                <TextInput
                    style={styles.mascotaCajaSelect}
                    //onChangeText={onChangeNumber}
                    //value={number}
                    placeholder="¿Cuál es tu destino?"
                    keyboardType='ascii-capable'
                />

                <TextInput
                    style={styles.mascotaCajaSelect}
                    //onChangeText={onChangeNumber}
                    //value={number}
                    placeholder="¿Cuál es tu destino?"
                    keyboardType='ascii-capable'
                    
                />
            </View>

            <TouchableOpacity onPress={()=>openModal()} activeOpacity={0.8} style={styles.buttonBuscarViaje}>
                <Text style={styles.textButtonBuscarViaje}>Buscar</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({

    nuevoViajeFormContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
    },

    origenDestinoInput:{
        width:380,
        backgroundColor:'#ABABAB',
        marginVertical:10,
        textAlign:'center',
        borderRadius:10
    },

    datosMascotaContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },

    mascotaCajaSelect:{
        marginHorizontal:10,
        backgroundColor:'#A6D8F6',
        minWidth:180,
        maxWidth:300,
        borderRadius:5
    },

    buttonBuscarViaje:{
        backgroundColor:'#006FB2',
        width:100,
        alignItems:'center',
        marginVertical:15,
        alignSelf:'flex-end',
        marginHorizontal:20,
        borderRadius:5
    },

    textButtonBuscarViaje:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        marginVertical:5
    }
})
