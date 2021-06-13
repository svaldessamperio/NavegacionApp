import React from 'react'
import { Button, View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/AppTheme';
import Pagina1Screen from './Pagina1Screen';

interface Props extends StackScreenProps<any, any> {};

export default function Pagina3Screen({ navigation }: Props) {

    return (
        <View style={styles.globalMarging}>
            <Text style={styles.globalMarging}>Página 3 Screen</Text>
            <Button 
                title="Regresar"
                onPress={ () => navigation.pop() }
            />
            <Button 
                title="Ir a página 1"
                onPress={ () => navigation.popToTop() }
            />

        </View>
    )
}
