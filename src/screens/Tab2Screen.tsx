import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Tab2Screen() {
    
    const { signIn } = useContext (AuthContext);

    return (
        <View>
            <Text>Tab2Screen</Text>
            <Button 
                title='SignIn'
                onPress= { signIn }
            />
        </View>
    )
}
