/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, } from 'react-native';
import { ContainerStyles } from './src/assets/styles';
import { MainScreen } from './src/views/mainScreens';

function App() {
  return (
    <View style={ContainerStyles.default.container1}>
      <MainScreen />
    </View>
  )
}


export default App;
