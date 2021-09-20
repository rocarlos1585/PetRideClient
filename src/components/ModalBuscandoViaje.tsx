import React from 'react'
import { Modal, View, Text, TouchableOpacity, Alert, StyleSheet, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropsModalSeguroViaje{

    statusModal:boolean,
    openModal: () => void,
    closeModal: () => void,

}

export const ModalBuscandoViaje = (props:PropsModalSeguroViaje) => {
    return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={props.statusModal}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            props.closeModal();
        }}
    >
        <ImageBackground source={require('../images/fondo_Buscando_viaje.png')} style={styles.centeredView}>
            <View style={styles.topTextModal}>
                <Text style={{fontSize:50, marginLeft:50, fontWeight:'bold', color:'#006FB2'}} >Estamos</Text>
                <Text style={{fontSize:50, marginLeft:150, color:'#006FB2'}}>buscando</Text>
            </View>

                    
            <Image style={{width:200, height:200}} source={require('../images/graficosButtonsHome/CarRed.png')}/>

            <View style={styles.bottomTextModal}>
                <Text style={{fontSize:50, marginLeft:50, color:'#006FB2'}}>El socio</Text>
                <Text style={{fontSize:40, marginLeft:100, color:'#006FB2', fontWeight:'bold'}}>perfecto para ti</Text>
            </View>


                
                {/* <TouchableOpacity onPress={() => props.closeModal()} >
                    <Text >cerrar</Text>
                </TouchableOpacity> */}
            
        </ImageBackground>
    </Modal>
    )
}

const styles = StyleSheet.create({

    centeredView: {
        flex: 1,

        alignItems: "center",
        marginTop: 0,
        backgroundColor:'transparent'
    },
    imageBackground: {
        flex: 1,
        
    },

    topTextModal:{
        flex:2,
        width:'100%',

    },

    bottomTextModal:{
        flex:2,

    },

    modalView: {
        width:350,
        height:250,
        margin: 20,


    },

    headerImageContainer:{
        width:100,
        height:100,
        backgroundColor:'white',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        elevation:10
    },






     
    

})

