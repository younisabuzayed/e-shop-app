import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import  ProductCart  from '../ProductCart';
import styles from './styles'

const ProductList = ({item, navigation}) => {
    return (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ProductDetails', { item })} >
            {/* <Text>{item.brand}</Text> */}
            <View
              style={styles.buttonContent}>
                <ProductCart {...item} />
            </View>
        </TouchableOpacity>
    )
}

export default ProductList
