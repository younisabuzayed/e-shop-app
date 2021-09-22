import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../../screens/Cart';
import Checkout from '../../screens/Checkout';
import CheckoutNavigator from '../CheckoutNavigator';

const Stack = createStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{
                  headerShown: false,
              }} />
            <Stack.Screen
              name="Checkout"
              component={CheckoutNavigator}
              options={{
                  headerShown: false,
              }} />
        </Stack.Navigator>
    )
}

export default CartNavigator;
