import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatsScreen from '../screens/ChatsScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function TopTapNavigator() {

  const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
          style={{
            padding: top,
          }}
        >
          <Tab.Screen name="Chats" component={ChatsScreen} />
          <Tab.Screen name="Contacts" component={ContactsScreen} />
          <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
      );
}
