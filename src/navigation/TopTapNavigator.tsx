import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChatsScreen from '../screens/ChatsScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
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
            showIcon: true,
            indicatorStyle: { 
              backgroundColor: colores.primary
            },
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
                    iconName='football-outline'
                    break;
                  case 'Contacts':
                      iconName='american-football-outline'
                      break;
                  case 'Albums':
                    iconName='battery-full-outline'
                    break;
                  default:
                    break;
                  }
                  return <Icon name={iconName} size={20} color={color}/> 
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
