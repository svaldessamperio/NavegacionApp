import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
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
            {
                authState.favoriteIcon &&
                <Icon name={ authState.favoriteIcon} size={90} color="orange"/>
            }

        </View>
    )
}
