import React from 'react'
import { TouchableOpacity, Button, View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/AppTheme';
import { color } from 'react-native-reanimated';

interface Props extends StackScreenProps<any, any>{};

export default function Pagina1Screen({ navigation }:Props) {
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
                    style={styles.globalButton}
                    onPress={() => navigation.navigate('PersonaScreen', {id:2,name:"Mary Fer"})}
                >
                    <Text style={{color:"white",}}>Ir a Mary Fer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
