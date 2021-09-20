import { DrawerScreenProps } from '@react-navigation/drawer'
import React from 'react'
import { Text, TouchableOpacity, View, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { HomeButtonLeft } from '../components/HomeButtonLeft';
import { HomeButtonRight } from '../components/HomeButtonRight';




export const HomeClientScreen = ( props:any ) => {

  console.log('PROPS HOME: ', props)

    return (
        
          <ImageBackground source={require('../images/Huellas5.png')} resizeMode="cover" style={styles.imageBackground}>
            <ScrollView style={{flex:1}}>
            <View style={styles.rowButtons}>
              <HomeButtonLeft onPress={ () => props.propsDrawer.navigation.navigate('viajesStackNavigator')} title='Viaje' image={require('../images/graficosButtonsHome/CarRed.png')} ajusteWidthImage={150} ajusteHeightImage={150} ajusteTopImage={0}/>
              <HomeButtonRight title='Paseo' image={require('../images/graficosButtonsHome/Paseo.png')} ajusteWidthImage={130} ajusteHeightImage={120} ajusteTopImage={0}/>
            </View>

            <View style={styles.rowButtons}>
              <HomeButtonLeft title='Hospedaje' image={require('../images/graficosButtonsHome/Hospedaje.png')} ajusteWidthImage={110} ajusteHeightImage={110} ajusteTopImage={10} />
              <HomeButtonRight title='Entretenimiento' image={require('../images/graficosButtonsHome/Pelotas.png')} ajusteWidthImage={110} ajusteHeightImage={110} ajusteTopImage={10}/>
            </View>
            
            <View style={styles.rowButtons}>
              <HomeButtonLeft title='Adopcion' image={require('../images/graficosButtonsHome/Adopcion.png')}  ajusteWidthImage={100} ajusteHeightImage={100} ajusteTopImage={23}  />
              <HomeButtonRight title='Tienda' image={require('../images/graficosButtonsHome/Tienda.png')}  ajusteWidthImage={100} ajusteHeightImage={100} ajusteTopImage={20}/>
            </View>

            <View style={styles.anunciosContainer}>

              <Text style={styles.anunciosTitle}>ANUNCIOS</Text>
            </View>
            </ScrollView>
          </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    
  },

  rowButtons:{
    flexDirection:'row',
    marginVertical:20,
    
    justifyContent:'space-between'
  },

  anunciosContainer:{
    backgroundColor:'white',
    height:200, 
    marginHorizontal:10
  },

  anunciosTitle:{
    textAlign:'center',
    fontWeight:'bold',
  }
  
})
