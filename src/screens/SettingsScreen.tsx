import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/AppTheme';

export default function SettingsScreen() {

    const insets = useSafeAreaInsets();
    return (
        <View style={{
            ...styles.globalMarging,
            marginTop:insets.top + 20,
        }}
        >
            <Text style={{fontSize: 30, }}>Settings Screen</Text>
        </View>
    )
}
