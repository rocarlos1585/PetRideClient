import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { DrawerPrincipal } from './src/navigator/DrawerPrincipal';



const App = () => {


  return (
    <NavigationContainer>
      <DrawerPrincipal/>
    </NavigationContainer>
  );
};

export default App;


