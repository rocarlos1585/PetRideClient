import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { DrawerPrincipal } from './DrawerPrincipal';
import { RegistroClienteScreen } from '../screens/RegistroClienteScreen';

const Stack = createStackNavigator();

export const ClientStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
        headerShown:false,
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="drawerLogged" component={DrawerPrincipal} />
      <Stack.Screen name="registroClienteScreen" component={RegistroClienteScreen} />
    </Stack.Navigator>
  );
}