import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';

export default function Pagina2Screen() {

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Atrás',
        })
    }, [])

    return (
        <View style={styles.globalMarging}>
            <Text style={styles.globalMarging}>Página 2 Screen</Text>
            <Button 
                title="Ir Página 3" 
                onPress={() => navigation.navigate('Pagina3Screen')}
            />
            <Button 
                title="Ir Pagina 1"
                onPress={() => navigation.navigate('Pagina1Screen')}
            />
        </View>
    )
}
