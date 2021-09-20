import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, NavigatorIOS, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';

import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';


interface Props extends StackScreenProps<any, any>{}

export const ViajeScreen = (props:Props) => {
    
    console.log('PROPS VIAJE SCREEN: ', props)
    const [locationState, setLocation] = useState('')

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    const GOOGLE_MAPS_KEY = 'AIzaSyD46x3mMG7oUuRbIUzpOI2HwEucMI3_Buw'
    const origin = {latitude: 20.5262917, longitude: -103.3855797};
    const destination = {latitude: 20.5185821, longitude: -103.377773};

    const [drivers, setDrivers] = useState([
        {latitude:20.5262917, longitude:-103.3855797},
        {latitude:20.5270999, longitude:-103.3783056},
        {latitude:20.5185821, longitude:-103.377773}

    ])

    const [coordenadas, setCoordenadas] = useState({
        latitude:0,
        longitude:0
    })

    const [coordinates] = useState([
        {
          latitude: 20.5262917,
          longitude: -103.3855797,
        },
        {
          latitude: 20.5185821,
          longitude: -103.377773,
        },
      ]);


    useEffect(() => {
        Geolocation.getCurrentPosition(info => setCoordenadas({...coordenadas, latitude:info.coords.latitude, longitude:info.coords.longitude}) );
    }, [])

    return (
        <View style={styles.viajesScreenContainer}>
            
            <MapView
                style={{flex:1}}
                initialRegion={{
                    latitude: coordenadas.latitude,
                    longitude: coordenadas.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >



                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_KEY}
                    strokeWidth={4}
                    strokeColor="red"
                />

                <Marker 
                    coordinate={{
                        latitude: coordenadas.latitude,
                        longitude: coordenadas.longitude,
                    }}
                    description={"Aqui estas tu"}
                >
                     <Text> <Icon name='location' size={25} color='#006FB2' /> </Text>
                </Marker>


                {
                    drivers.map(element => {
                        return  <Marker 
                                    coordinate={{
                                        latitude: element.latitude,
                                        longitude: element.longitude,
                                    }}
                                    description={"This is a marker in React Natve"}
                                >
                                    <Image source={require('../images/graficosButtonsHome/CarRed.png')} style={{height: 35, width:35 }} />
                                </Marker>
                    })
                }

            </MapView>


        <View style={styles.destinoContainer}>
                <TextInput
                    style={styles.destinoInput}
                    placeholder="¿Cuál es tu destino?"
                    keyboardType='ascii-capable'
                    placeholderTextColor="#006FB2"
                />

                <TouchableOpacity onPress={ () => props.navigation.navigate('nuevoViajeScreen')} style={styles.destinoButton}>
                    <Text style={{textAlign:'center'}}> <Icon name='search' size={35} color='white' /> </Text>
                </TouchableOpacity>

                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viajesScreenContainer:{
        flex:1
    },

    destinoContainer:{
        width:380,
        
        elevation:50,
        top:20,
        alignSelf:'center',
        backgroundColor:'#FFFFFF',
        position:'absolute',
        flexDirection:'row',
        borderRadius:8
        
    },

    destinoInput:{
        width:310,
        borderRadius:8,
        textAlign:'center',
        fontSize:20,
        color:'#006FB2',
        fontWeight:'700'
    },

    destinoButton:{
        backgroundColor:'#006FB2',
        borderRadius:8,
        width:70,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }
})