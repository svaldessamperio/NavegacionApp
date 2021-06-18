import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';
import { styles } from '../theme/AppTheme';

const Drawer = createDrawerNavigator();

export default function MEnuLateralBasico() {

  const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
          drawerType={ width > 700? 'permanent' : 'front' }
          drawerContent = {(props) => <MenuInterno {...props} />}
        >
          <Drawer.Screen name="StackNavigator" options={{title:"Home"}} component={StackNavigator} />
          <Drawer.Screen name="SettingsScreen" options={{title:"Settings"}} component={SettingsScreen} />
        </Drawer.Navigator>
      );
}

const MenuInterno = ({ navigation }:DrawerContentComponentProps<DrawerContentOptions>) => {

return (
  <DrawerContentScrollView>
    {/* Avatar */}
    <View style={styles.MenuContent}>
      <Image 
        style = {styles.avatar}
        source={{
          uri: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
        }}
      />
    </View>
    {/* Menú options */}
    <View style={styles.menuOptionsContainer}>
      <TouchableOpacity
        style={styles.menuOption}
        onPress={()=> navigation.navigate('StackNavigator')}
      >
        <Text style={styles.menuOptionText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuOption}
        onPress={()=> navigation.navigate('SettingsScreen')}
      >
        <Text style={styles.menuOptionText}>Settings</Text>
      </TouchableOpacity>
    </View>
  </DrawerContentScrollView>
);
}
