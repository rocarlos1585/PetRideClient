import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { ClientStackNavigator } from './src/navigator/ClientStackNavigator';
import { DrawerPrincipal } from './src/navigator/DrawerPrincipal';



const App = () => {


  return (
    <NavigationContainer>
      <ClientStackNavigator/>
    </NavigationContainer>
  );
};

export default App;


