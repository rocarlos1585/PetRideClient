

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,

} from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';


const App = () => {


  return (
    <SafeAreaView>
      <StatusBar barStyle= 'light-content' />
      <LoginScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
