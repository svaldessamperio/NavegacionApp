import React from 'react'
import { Button, View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any>{};

export default function Pagina1Screen({ navigation }:Props) {
    return (
        <View style={styles.globalMarging}>
            
            <Text style={styles.globalMarging}>Página 1 Screen</Text>

            <Button 
                title="Ir Página 2" 
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
        </View>
    )
}
