import React from 'react'
import { Modal, View, Text, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropsModalLogOut{
    title?:string,
    description?:string
    statusModal:boolean,
    openModal: () => void
    closeModal: () => void
}

export const ModalLogOut = (props:PropsModalLogOut) => {
    return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={props.statusModal}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            props.closeModal();
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.headerImageContainer}>
                    <Image style={styles.headerImage} source={require('../images/logOutIcon.png')}/>
                </View>

                <View style={styles.modalInfoContainer}>
                    <Text style={styles.textModalTitle}>{props.title}</Text>
                    <Text style={styles.textModalDescription}>{props.description}</Text>
                </View>
                <View style={styles.buttonsModalContainer}>
                    <TouchableOpacity onPress={()=>props.closeModal()} activeOpacity={0.7} style={{...styles.buttonModal, backgroundColor:'#A0001A'}}>
                        <Text style={{...styles.textButtonModal, color:'white'}}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>props.closeModal()} activeOpacity={0.7} style={{...styles.buttonModal, backgroundColor:'#A6D8F6'}}>
                        <Text style={{...styles.textButtonModal, color:'black'}}>Si</Text>
                    </TouchableOpacity>
                </View>
                
                {/* <TouchableOpacity onPress={() => props.closeModal()} >
                    <Text >cerrar</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    </Modal>
    )
}

const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        backgroundColor:'rgba(0, 0, 0, 0.6)'
    },

    modalView: {
        width:350,
        height:250,
        margin: 20,
        backgroundColor: "transparent",
        borderRadius: 0,
        padding: 0,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 90
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

    headerImage:{
        width:80,
        height:80,
    },


    modalInfoContainer:{
        width:350,
        height:150,
        position:'absolute',
        top:70,
        paddingTop:10,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },

    textModalTitle:{
        width:'90%',
        fontSize:20,
        paddingVertical:5,
        
        textAlign:'center',
        fontWeight:'bold',


    },

    textModalDescription:{
        width:'90%',
        paddingVertical:10,
        textAlign:'center',
    },

    buttonsModalContainer:{
        flexDirection:'row',
        marginTop:30,
        position:'absolute',
        bottom:0,
        backgroundColor:'white'
    },

    buttonModal:{
        width:175,
        height:50,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },

    textButtonModal:{
        fontSize:15,
        fontWeight:'bold'
    }



     
    

})

