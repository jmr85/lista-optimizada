import React from 'react';
import { Text } from 'react-native';
import {  styles } from './styles';

const ListHeader = ({ title }) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}

export default ListHeader;