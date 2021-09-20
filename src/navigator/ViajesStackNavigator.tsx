import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { DrawerPrincipal } from './DrawerPrincipal';
import { ViajeScreen } from '../screens/ViajeScreen';
import { NuevoViajeForm } from '../screens/NuevoViajeForm';

const Stack = createStackNavigator();

export const ViajesStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
        headerShown:false,
      }}
    >
      <Stack.Screen name="viajeScreen" component={ViajeScreen} />
      <Stack.Screen name="nuevoViajeScreen" component={NuevoViajeForm} />
    </Stack.Navigator>
  );
}