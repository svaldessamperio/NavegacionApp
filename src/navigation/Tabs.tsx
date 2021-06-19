import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import { colores } from '../theme/AppTheme';

export default function Tabs() {
  return (
    Platform.OS === 'ios'? <TabsIOS/> : <TabsAndroid/>
  )
}

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TopTapNavigator from './TopTapNavigator';

const TabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName:string = '';
            switch (route.name) {
              case 'Tab1Screen':
                iconName='T1'
                break;
              case 'Tab2Screen':
                  iconName='T2'
                  break;
              case 'StackNavigator':
                iconName='St'
                break;
              default:
                break;
              }
              return <Text>{iconName}</Text>
          },
        })
      }
    >
      <TabiOS.Screen name="Tab1Screen" options={{title: "Tab Uno"}} component={Tab1Screen}/>
      <TabiOS.Screen name="TopTapNavigator" options={{title: "TopTapNavigator"}} component={TopTapNavigator} />
      <TabiOS.Screen name="StackNavigator" options={{title: "Tab Tres"}} component={StackNavigator} />
    </TabAndroid.Navigator>
  );
}

const TabiOS = createBottomTabNavigator();
function TabsIOS() {
  return (
    <TabiOS.Navigator
      sceneContainerStyle={
        {
          backgroundColor: 'white',
        }
      }
      tabBarOptions={{
        activeTintColor: colores.primary,
        labelStyle:{ fontSize:20, fontWeight: 'bold'},
        style: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          shadowColor: 'transparent',
          elevation: 0,
        },
        // activeBackgroundColor: '#053b74',
      }}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ color, focused, size }) => {
            let iconName:string = '';
            switch (route.name) {
              case 'Tab1Screen':
                iconName='T1'
                break;
              case 'Tab2Screen':
                  iconName='T2'
                  break;
              case 'StackNavigator':
                iconName='St'
                break;
              default:
                break;
              }
              return <Text>{iconName}</Text>
          },
        })
      }    
    >

      <TabiOS.Screen name="Tab1Screen" options={{title: "Tab Uno"}} component={Tab1Screen}/>
      <TabiOS.Screen name="TopTapNavigator" options={{title: "TopTapNavigator"}} component={TopTapNavigator} />
      <TabiOS.Screen name="StackNavigator" options={{title: "Tab Tres"}} component={StackNavigator} />
    </TabiOS.Navigator>
  );
}
