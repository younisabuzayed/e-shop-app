import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

const FormContainer = ({title,children}) => {
    return (
        <ScrollView
          contentContainerStyle={styles.container} >
            <Text
              style={styles.title}>{title}</Text>
            {children}
        </ScrollView>
    )
}

export default FormContainer;
