import React from 'react'
import { useEffect } from 'react';
import { View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { StackRouteParams } from '../navigation/StackNavigator';

interface Props extends StackScreenProps<StackRouteParams, 'PersonaScreen'>{};

export default function PersonaScreen({route, navigation}: Props) {

    const params = route.params;

    console.log(JSON.stringify(params));
    
    useEffect(() => {
        navigation.setOptions({
            title: params.name,
        })
    }, [])

    return (
        <View>
            <Text>Persona Screen</Text>
        </View>
    )
}
