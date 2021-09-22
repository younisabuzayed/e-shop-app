import React from 'react';
import { View, Text, ScrollView, Image, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/cartItemAction';


import styles from './styles';
const Confirm = ({clearCartAction}) => {
    const route = useRoute();
    const confirm =  route.params !== undefined ? route.params.order : null;
    const navigation = useNavigation();

    const onPressConfirmOrder = () =>
    {
        setTimeout(() => {
            clearCartAction();
            navigation.navigate('Cart')
        }, 500);
    }
    return (
        <ScrollView
          contentContainerStyle={styles.container} >
            <View
              style={styles.titleContainer} >  
                <Text
                  style={styles.title} >
                    Confirm Order
                </Text>
                {route.params 
                  ? (
                      <View
                        style={styles.shippingContainer}>
                          <Text
                            style={styles.titleText} >Shipping to:</Text>
                         <View
                           style={styles.AddressInfo} >
                             <Text
                               style={styles.infoText} >Address: {confirm.shippingAddress1}</Text>
                            <Text
                               style={styles.infoText} >Address2: {confirm.shippingAddress2}</Text>
                            <Text
                               style={styles.infoText} >City: {confirm.city}</Text>
                            <Text
                               style={styles.infoText} >Zip Code: {confirm.zip}</Text>
                            <Text
                               style={styles.infoText} >Country: {confirm.country}</Text>
                         </View>
                         <Text
                           style={styles.titleText}>Items: </Text>
                           {confirm.orderItems.map( x => {
                               return (
                                   <View
                                     style={styles.listItem}
                                     key={x.name} >
                                       <View
                                         style={styles.leftContainer}>
                                           <Image
                                             source={{uri: x.image}}
                                             style={styles.imageItem} />
                                       </View>  
                                       <View
                                         style={styles.bodyContainer}>
                                           <Text
                                             style={styles.bodyNameText}>{x.name}</Text>
                                           <Text
                                             style={styles.bodyPriceText}>$ {x.price}</Text>
                                       </View>
                                   </View>
                               )
                           })}
                      </View>
                    )
                  : null
                }
                <View
                  style={styles.buttonOrderContainer}>
                    <Button
                      title="Place order"
                      onPress={onPressConfirmOrder} />  
                </View>
            </View>
        </ScrollView>
    )
}
const mapDispatchToProps = (dispatch) =>
{
    return {
        clearCartAction: () => dispatch(actions.clearCart()),
    }
}
export default connect(null, mapDispatchToProps)(Confirm);
