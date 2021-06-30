import React, { useEffect }  from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

export default function Tab1Screen() {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screen');
    }, [])
    return (
        <View style={{
            ...styles.globalMarging,
            flexDirection:'row',
            marginTop: top + 10,
        }}>
            <Text style={styles.title}>Iconos</Text>
            <TouchableIcon iconName='airplane-outline'/>
            <TouchableIcon iconName='alarm-outline'/>
            <TouchableIcon iconName='desktop-outline'/>
            <TouchableIcon iconName='ear-outline'/>
            <TouchableIcon iconName='color-fill-outline' />

        </View>
    )
}

