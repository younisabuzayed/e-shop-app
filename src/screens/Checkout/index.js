import React from 'react'
import { View, Text, Button } from 'react-native'
import { CartItem, FormContainer, Input } from '../../Components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Picker, Select} from 'native-base';
import {  SimpleLineIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const countries = require('../../../assets/data/countries.json');
const Checkout = ({cartItemReducer}) => {
    const navigation = useNavigation();
    const [orderItems, setOrderItems] = React.useState();
    const [phone, setPhone] = React.useState();
    const [address, setAddress] = React.useState();
    const [address2, setAddress2] = React.useState();
    const [city, setCity] = React.useState();
    const [zip, setZip] = React.useState();
    const [country, setCountry] = React.useState();

    React.useEffect(()=>
    {
        setOrderItems(cartItemReducer);

        return () =>
        {
            setOrderItems();
        }
    },[])

    const onPressCheckout = () =>
    {
        let order = {
            city,
            country,
            dataOrdered: Date.now(),
            orderItems,
            phone,
            shippingAddress1: address,
            shippingAddress2: address2,
            zip,
        };
        navigation.navigate('Payment', {order: order})

    }
    return (
        <KeyboardAwareScrollView
          viewIsInsideTabBar={true}
          extraHeight={200}
          enableOnAndroid={true} >
            <FormContainer
              title="Shipping Address" >
                <Input
                  placeholder="Phone"
                  name={'phone'}
                  value={phone}
                  keyboardType="numeric" 
                  onChangeText={(text) => setPhone(text)} />  
                <Input
                  placeholder="Shipping Address 1"
                  name={'ShippingAddress1'}
                  value={address}
                  onChangeText={(text) => setAddress(text)} />  
                <Input
                  placeholder="Shipping Address 2"
                  name={'ShippingAddress2'}
                  value={address2}
                  onChangeText={(text) => setAddress2(text)}  />  
                <Input
                  placeholder="City"
                  name={'City'}
                  value={city}
                  onChangeText={(text) => setCity(text)}  />  
                <Input
                  placeholder="Zip Code"
                  name={'zip'}
                  value={zip}
                  keyboardType="numeric" 
                  onChangeText={(text) => setZip(text)}  />
                <Select
                  selectedValue={country}
                  minWidth={200}
                  variant="rounded"
                  placeholder="Select your country"
                  placeholderTextColor={'#007aff'}
                  dropdownIcon={<SimpleLineIcons name="arrow-down" style={{marginRight: 10}} />}
                  onValueChange={(e) => setCountry(e)}>
                    {countries.map( item => {
                        return (
                            <Select.Item
                              key={item.code}
                              label={item.name}
                              value={item.name} />
                        )
                    })}
                </Select>
                <Button
                  title="Confirm"
                  onPress={onPressCheckout} /> 
            </FormContainer>
        </KeyboardAwareScrollView>
    )
}

const mapStateToProps = (state) =>
{
    return {
        cartItemReducer: state.cartItemReducer.cartItems,
    }
}
export default connect(mapStateToProps, null)(Checkout);
