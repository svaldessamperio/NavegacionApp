import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function SettingsScreen() {

    const instop = useSafeAreaInsets();
    return (
        <View style={{ marginTop:instop.top }}>
            <Text>Settings Screen</Text>
        </View>
    )
}
