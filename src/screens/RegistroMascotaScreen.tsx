import React from 'react'
import { TouchableOpacity } from 'react-native';
import { ImageBackground, Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const RegistroMascotaScreen = () => {
    return (
        <View style={styles.registroClienteContainer}>
            <ImageBackground blurRadius={5} /*source={require('../images/Huellas1.png')}*/ resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.headerForm}>
                    <Image source={require('../images/logoPetride.png')} style={styles.logo} ></Image>
                    <Text style={styles.headerFormText} >Registro Nuevo Mascota</Text>
                </View>

                <ScrollView style={styles.formContainer}>

                    <View style={styles.campoView}>
                        <TextInput
                            style={styles.campoInput}
                            //onChangeText={onChangeNumber}
                            //value={number}
                            placeholder="Nombre"
                            keyboardType='ascii-capable'
                        />

                        <TextInput
                            style={styles.campoInput}
                            //onChangeText={onChangeNumber}
                            //value={number}
                            placeholder="Tamaño"
                            keyboardType='ascii-capable'
                        />
                    </View>

                    <View style={styles.campoView}>
                        <TextInput
                            style={styles.campoInput}
                            //onChangeText={onChangeNumber}
                            //value={number}
                            placeholder="Tipo de mascota"
                            keyboardType='ascii-capable'
                        />

                        <TextInput
                            style={styles.campoInput}
                            //onChangeText={onChangeNumber}
                            //value={number}
                            placeholder="ID de cliente"
                            keyboardType='ascii-capable'
                        />

                    </View>

                    <View style={styles.areaPhoto}>
                        <Text style={styles.textoPhotoArea}>+</Text>
                        <Text style={styles.textoPhotoArea}>Toma una foto</Text>
                    </View>
                    

                    

                    

                   
                </ScrollView>

                <View style={styles.buttonsFormContainer}>



                    <TouchableOpacity style={styles.btnForm}>
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


    areaPhoto:{
        height:200,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:3,
        borderColor:'#A0001A',
        borderRadius:1,
        borderStyle:'dashed'
    },

    textoPhotoArea:{
        fontSize:20,
        fontWeight:'bold',
        color:'grey'
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

