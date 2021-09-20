import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

export const HomeButtonLeft = (props:any) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={styles.homeButton}>
              
              <Text style={styles.titleButton}>{props.title}</Text>
              <View style={styles.whiteSpaceButton}></View>
              <Image style={{
                      ...styles.imageButton, 
                      width: props.ajusteWidthImage,
                      height: props.ajusteHeightImage,
                      marginTop:props.ajusteTopImage
                      }} 
                      source={props.image}
              />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  
    homeButton:{
      width:195,
      height:130,
    },

    titleButton:{
        backgroundColor:'#006FB2',
        width:'60%',
        height:30,
        alignSelf:'flex-end',
        textAlign:'center',
        fontSize:15,
        color:'white',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },

    whiteSpaceButton:{
      height:90,
      backgroundColor:'white',
      elevation:40
    },

    imageButton:{
      position:'absolute',
      elevation:41
    }
  })