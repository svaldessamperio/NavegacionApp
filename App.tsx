import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer  } from '@react-navigation/native';
// import StackNavigator from './src/navigation/StackNavigator';
import MEnuLateralBasico from './src/navigation/MEnuLateralBasico';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer >
      <AppState>
        {/* <StackNavigator/> */}
        <MEnuLateralBasico/>  
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }:{ children: JSX.Element }) => {

  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}