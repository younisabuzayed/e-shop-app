import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Products from '../../screens/Products';
import ProductDetails from '../../screens/ProductDetails';

const Stack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Products}
              options={{
                  headerShown: false,
              }} />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{
                  headerShown: false,
              }} />
        </Stack.Navigator>
    )
}

export default HomeNavigation;
