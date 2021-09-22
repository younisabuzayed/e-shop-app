import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import * as actions from '../../redux/actions/cartItemAction';
import styles from './styles';
import { CartItem } from '../../Components';
import { SwipeListView } from 'react-native-swipe-list-view';
import { FontAwesome } from '@expo/vector-icons';


const Cart = ({cartItemReducer, clearCartAction, removeFromCart}) => {
    const navigation = useNavigation();
    let total = 0;
    cartItemReducer.forEach(cart => {
        return (total += cart.price)
    });
    return (
        <>
          {cartItemReducer.length !== 0 
            ? (
                <View
                  style={styles.container}>
                    {/* {
                        cartItemReducer.map( (data, index) =>
                            {
                                return (
                                    <CartItem
                                      key={index}
                                      data={data} />
                                )
                            })
                    } */}
                      <SwipeListView
                        data={cartItemReducer}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={ ({item}) => {
                          return  <CartItem data={item} />
                        }}
                        renderHiddenItem={ (data, rowMap) => (
                            <View style={styles.hiddenContainer}>
                                <TouchableOpacity
                                  style={styles.hiddenButton}
                                  onPress={() => removeFromCart(data.item)} >
                                    <FontAwesome
                                      name="trash"
                                      color="white"
                                      size={30} />
                                </TouchableOpacity>
                            </View>
                        )}
                        disableRightSwipe={true}
                        previewOpenDelay={3000}
                        friction={1000}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                        stopLeftSwipe={75} />
                    <View
                      style={styles.bottomCartContainer}>
                        <Text
                          style={styles.totalText}>$ {total}</Text>
                        <View
                          style={styles.bottomButtons} >
                            <Button
                              title='Clear'
                              onPress={() => clearCartAction()} />
                            <Button
                              title='Checkout'
                              onPress={() => navigation.navigate('Checkout')} />
                        </View>
                    </View>
                </View>
            )
            : (
                <View
                  style={styles.emptyContainer}>
                    <Text>Looks like your cart is empty</Text>
                    <Text>Add products to your cart to get started</Text>
                </View>
            ) }
        </>
    )
}

const mapStateToProps = (state) =>
{
    return {
        cartItemReducer: state.cartItemReducer.cartItems,
    }
};
const mapDispatchToProps = (dispatch) =>
{
    return {
        clearCartAction: () => dispatch(actions.clearCart()),
        removeFromCart: (item) => dispatch(actions.removeFromCart(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

