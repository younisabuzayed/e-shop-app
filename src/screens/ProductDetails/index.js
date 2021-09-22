import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import { Button } from 'native-base';
import { connect } from 'react-redux';
const icon = 'https://icons-for-free.com/iconfiles/png/512/linecon+products+round+icon-1320165923260225670.png'
import  * as actionsCart from '../../redux/actions/cartItemAction';

const ProductDetails = ({addItemToCart}) => {
    const route  = useRoute();
    const [item , setItem] = React.useState(route.params.item);
    const [availability, setAvailability] = React.useState('');

    const onPressAddItemToCart = () =>
    {
      addItemToCart(item.name, item.price, item.image, item.countInStock);
    }
    return (
            <View
              style={styles.container}>
        <ScrollView>
                <View
                  style={styles.imageContainer}>
                    <Image
                      source={{
                        uri: item.image 
                            ? item.image 
                            : icon}}
                      style={styles.image}
                      resizeMode="contain" />
                </View>
                <View
                  style={styles.contentContainer}>
                    <Text
                      style={styles.nameText}>{item.name}</Text>
                    <Text
                      style={styles.brandText}>{item.brand}</Text>

                </View>
        </ScrollView>
                <View
                  style={styles.bottomContainer} >
                    <View>
                        <Text 
                          style={styles.price}>${item.price}</Text>
                    </View>
                    <View>
                        <Button
                          onPress={onPressAddItemToCart}>
                            Add
                        </Button>
                    </View>
                </View>
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
export default connect(null, mapDispatchToProps)(ProductDetails);
