import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { Text, useWindowDimensions, StyleSheet, Image, View } from 'react-native';
import { LoginScreen } from '../screens/LoginScreen';
import { TouchableOpacity } from 'react-native';
import { RegistroClienteScreen } from '../screens/RegistroClienteScreen';
import { RegistroMascotaScreen } from '../screens/RegistroMascotaScreen';
import { ScrollView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export const  DrawerPrincipal = () => {

  const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerContent={ (props:any) =><ContenidoMenu {...props}/>}

      screenOptions={{
        drawerPosition:'left',
        drawerType:(width >= 760)? ('permanent') : ('front'),
      }}
    >
      <Drawer.Screen name="loginScreen"  component={LoginScreen} />
      <Drawer.Screen name="registroClienteScreen"  component={RegistroClienteScreen} />
      <Drawer.Screen name="registroMascotaScreen"  component={RegistroMascotaScreen} />
      
    </Drawer.Navigator>
  );
}


const ContenidoMenu=(props:any)=>{
  return(
    <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={styles.contenidoMenuView}>
        <View style={styles.avatarContainer}>
            <Image
                style={styles.imageAvatar} 
                source={require('../images/avatarPlaceHolder.gif')}
            />
            <Text style={styles.nameAvatar}>Roberto Lopez</Text>
            
            <View style={styles.calificacionAvatar}>
                <Text style={styles.numberCalification}>4.7</Text>
                <Image style={styles.starCalificacion}  source={require('../images/starCalification.png')}>

                </Image>
            </View>
            
        </View>

        <ScrollView style={styles.linksContainer}>
            <Text style={styles.sectionTextDivider}>Tus Viajes</Text>

              <TouchableOpacity style={styles.optionClickeable} onPress={()=>props.navigation.navigate('loginScreen')}>
                  <Text>Login screen</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionClickeable}  onPress={()=>props.navigation.navigate('registroClienteScreen')} >
                  <Text>Registro cliente screen</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionClickeable}  onPress={()=>props.navigation.navigate('registroMascotaScreen')} >
                  <Text>Registro mascota screen</Text>
              </TouchableOpacity>


            <Text style={styles.sectionTextDivider}>Tus Paseos</Text>

              <TouchableOpacity style={styles.optionClickeable} >
                  <Text>Detalle del paseo</Text>
              </TouchableOpacity>



            <Text style={styles.sectionTextDivider}>Tus Hospedajes</Text>

              <TouchableOpacity style={styles.optionClickeable} >
                  <Text>Detalle del hospedaje</Text>
              </TouchableOpacity>


            <Text style={styles.sectionTextDivider}>Tus Entrenamientos</Text>

              <TouchableOpacity style={styles.optionClickeable} >
                  <Text>Detalle del entrenamiento</Text>
              </TouchableOpacity>



            <Text style={styles.sectionTextDivider}>Tus Adopciones</Text>

              <TouchableOpacity style={styles.optionClickeable} >
                  <Text>Detalle de adopcion</Text>
              </TouchableOpacity>


            <Text style={styles.sectionTextDivider}>Tus Compras</Text>

              <TouchableOpacity style={styles.optionClickeable} >
                  <Text>Detalle de compras</Text>
              </TouchableOpacity>


            <Text style={styles.sectionTextDivider}>Pago</Text>

              <TouchableOpacity style={styles.optionClickeable} >
                  <Text>Agregar formas de pago</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionClickeable} >
                  <Text>Solicitud de facturacion</Text>
              </TouchableOpacity>


            <Text style={styles.sectionTextDivider}>Ayuda</Text>

              <TouchableOpacity style={styles.optionClickeable} >
                  <Text>Reportar problemas con algun servicio</Text>
              </TouchableOpacity>


            <Text style={styles.sectionTextDivider}>Configuracion</Text>

              <TouchableOpacity style={styles.optionClickeable} >
                  <Text>Datos de cuenta</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionClickeable} >
                  <Text>Favoritos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionClickeable} >
                  <Text>Cerrar sesion</Text>
              </TouchableOpacity>
        </ScrollView>

    </DrawerContentScrollView>
  )
}


const styles = StyleSheet.create({

  contenidoMenuView:{
    flex:1,
    backgroundColor:'#A6D8F6'
  },

  avatarContainer:{
    flex:0.3,
    alignItems:'center',
    backgroundColor:'#A6D8F6'
  },

  imageAvatar:{
    width:80,
    height:80,
    borderRadius:100,
    marginTop:10
  },

  nameAvatar:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:5
  },

  calificacionAvatar:{
      flexDirection:'row',

  },

  numberCalification:{
    fontSize:20
  }, 

  starCalificacion:{
    width:25,
    height:25,
    marginLeft:5
  },

  linksContainer:{
      flex:1,
      backgroundColor:'white'
  },

  sectionTextDivider:{
    fontSize:13,
    fontWeight:'bold',
    marginVertical:3,
    marginHorizontal:3,
    backgroundColor:'#707070',
    color:'white'
  },

  optionClickeable:{
    marginVertical:5,
    marginLeft:20
  }
})