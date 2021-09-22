import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux';
import  * as actionsCart from '../../redux/actions/cartItemAction';
import styles from './styles';
const icon = 'https://icons-for-free.com/iconfiles/png/512/linecon+products+round+icon-1320165923260225670.png'
const ProductCart = ({name, price, image, countInStock,addItemToCart}) => {
    return (
        <View
          style={styles.container}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{uri : image ? image : icon}} />
            <View
              style={styles.cart} />
            <Text
              style={styles.title}>
                  {name.length > 15 
                    ? `${name.substring(0, 15 - 3)}...`
                    : name}
            </Text>
            <Text
              style={styles.price}>${price}</Text>
            {countInStock > 0 
              ? (
                  <View
                    style={styles.addContainer}>
                      <Button
                        title="Add"
                        color="green"
                        onPress={() => addItemToCart(name, price, image, countInStock)} />
                  </View>
              )
              : <Text
                  style={styles.unavailableText}>Currently Unavailable</Text>}
        </View>
    )
}
const mapDispatchToProps = (dispatch) =>
{
    return {
      addItemToCart: (name, price, image, countInStock) => {
          return dispatch(
            actionsCart.addToCart({
              quantity: 1,
              name,
              price,
              image,
              countInStock,
            })
          )
        }
    }
}
export default connect(null, mapDispatchToProps)(ProductCart);
