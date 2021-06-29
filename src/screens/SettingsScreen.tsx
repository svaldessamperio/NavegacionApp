import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/AppTheme';
import { AuthContext } from '../context/AuthContext';

export default function SettingsScreen() {

    const insets = useSafeAreaInsets();

    const {authState} = useContext(AuthContext);
    
    return (
        <View style={{
            ...styles.globalMarging,
            marginTop:insets.top + 20,
        }}
        >
            <Text style={{fontSize: 30, }}>Settings Screen</Text>
            <Text>{JSON.stringify(authState)}</Text>
        </View>
    )
}
