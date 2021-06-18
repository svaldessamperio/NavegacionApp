import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer  } from '@react-navigation/native';
// import StackNavigator from './src/navigation/StackNavigator';
import MEnuLateralBasico from './src/navigation/MEnuLateralBasico';

export default function App() {
  return (
    <NavigationContainer >
      {/* <StackNavigator/> */}
      <MEnuLateralBasico/>
    </NavigationContainer>
  )
}
