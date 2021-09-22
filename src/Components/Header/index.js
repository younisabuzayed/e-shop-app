import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Header = () => {
    return (
        <View
          style={styles.header}>
            <Image
              source={require('../../../assets/Logo.png')}
              resizeMode="contain"
              style={styles.logo} />
        </View>
    )
};
export default Header
