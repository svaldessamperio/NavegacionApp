import React, { useEffect }  from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Tab1Screen() {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screen');
    }, [])
    return (
        <View style={{
            ...styles.globalMarging,
            marginTop: top + 10,
        }}>
            <Text style={styles.title}>Iconos</Text>
            <Icon name="airplane-outline" size={50} color="#900" />
        </View>
    )
}

