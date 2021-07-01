import React from 'react'
import { useEffect } from 'react';
import { View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { StackRouteParams } from '../navigation/StackNavigator';
import { useContext } from 'react';
import { AuthContext, AuthState } from '../context/AuthContext';

interface Props extends StackScreenProps<StackRouteParams, 'PersonaScreen'>{};

export default function PersonaScreen({route, navigation}: Props) {

    const params = route.params;

    console.log(JSON.stringify(params));

    const { changeUserName } = useContext(AuthContext)
    
    useEffect(() => {
        navigation.setOptions({
            title: params.name,
        });
    }, [])

    useEffect(() => {
        changeUserName(params.name);
    }, [])

    return (
        <View>
            <Text>Persona Screen</Text>
        </View>
    )
}
