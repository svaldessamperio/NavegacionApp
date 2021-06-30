import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext';

export default function ContactsScreen() {

    const { authState, signIn } = useContext(AuthContext);

    return (
        <View>
            <Text>Contacts</Text>
            { !authState.isLogIn &&
                <Button 
                    title='SignIn'
                    onPress={ signIn }
                />
            }
        </View>
    )
}
