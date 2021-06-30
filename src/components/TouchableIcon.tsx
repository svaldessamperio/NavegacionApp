import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string;
}

export default function TouchableIcon(props: Props) {
    const { iconName } = props;

    const { changeFavIcon } = useContext(AuthContext);
    
    return (
        <TouchableOpacity onPress={()=>changeFavIcon(iconName)}>
            <Icon name={iconName} size={50} color="#900"/>
        </TouchableOpacity>
    )
}
