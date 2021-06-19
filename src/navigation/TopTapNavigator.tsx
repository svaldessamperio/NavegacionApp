import React from 'react'
import { Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatsScreen from '../screens/ChatsScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/AppTheme';

const Tab = createMaterialTopTabNavigator();

export default function TopTapNavigator() {

  const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
          style={{paddingTop: top,}}
          sceneContainerStyle= {{
            backgroundColor: 'white'
          }}
          tabBarOptions={{
            pressColor: colores.primary,
            style: {
              borderTopColor: colores.primary,
              borderTopWidth: 0,
              shadowColor: 'transparent',
              elevation:0,
            },
          }}
          screenOptions={
            ({ route }) => ({
              tabBarIcon: ({ color, focused }) => {
                let iconName:string = '';
                switch (route.name) {
                  case 'Chats':
                    iconName='CH'
                    break;
                  case 'Contacts':
                      iconName='CO'
                      break;
                  case 'Albums':
                    iconName='AL'
                    break;
                  default:
                    break;
                  }
                  return <Text>{iconName}</Text>
              },
            })
          }
        >
          <Tab.Screen name="Chats" component={ChatsScreen} />
          <Tab.Screen name="Contacts" component={ContactsScreen} />
          <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
      );
}
