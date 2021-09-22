import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const icon = 'https://icons-for-free.com/iconfiles/png/512/linecon+products+round+icon-1320165923260225670.png'

const CartItem = ({data}) => {

    const [quantity, setQuantity] = React.useState(data.quantity)
    return (
        <View
            style={styles.cartItemContainer}>
            <View
                style={styles.cartItemImageAndTitle}>
                <Image
                    source={{uri: data.image ? data.image : icon}}
                    style={styles.cartItemImage} />
                <Text
                    style={styles.cartText}>{data.name}</Text>
            </View>
            <View
                style={styles.cartItemPrice}>
                <Text>$ {data.price}</Text>
            </View>
        </View>
    )
}

export default CartItem
