import React, { useEffect } from 'react'
import { TouchableOpacity, Button, View, Text } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any>{};

export default function Pagina1Screen({ navigation }:Props) {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity 
                    style={{ marginLeft: 10}}
                    onPress={()=> {navigation.toggleDrawer()}}
                > 
                    <Icon name="menu-outline" size={30}/>
                </TouchableOpacity>
            )
        })
    }, [])

    return (
        <View style={styles.globalMarging}>
            
            <Text style={styles.globalMarging}>Página 1 Screen</Text>

            <Button 
                title="Ir Página 2" 
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={styles.globalButton}
                    onPress={() => navigation.navigate('PersonaScreen', {id:1,name:"Samuel Valdés"})}
                >
                    <Text style={{color:"white",}}>Ir a Samuel</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.globalButton2}
                    onPress={() => navigation.navigate('PersonaScreen', {id:2,name:"Mary Fer"})}
                >
                    <Text style={{color:"white",}}>Ir a Mary Fer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
