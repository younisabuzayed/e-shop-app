import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from '../HomeNavigation';
import Cart from '../../screens/Cart';
import Admin from '../../screens/Admin';
import User from '../../screens/User';
import CartNavigator from '../CartNavigator';
import { Badge } from '../../Components';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
      <Tab.Navigator
        initialRouteName= "HomeNavigation"
        screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#e91e63',
            headerShown: false,
        }}>
            <Tab.Screen
              name="HomeNavigation"
              component={HomeNavigation}
              options={{
                tabBarIcon: ({color}) => (
                  <FontAwesome
                    name="home"
                    color={color}
                    size={30} />
                    )
                }} />
            <Tab.Screen
              name="CartNavigator"
              component={CartNavigator}
              options={{
                tabBarIcon: ({color}) => (
                  <View>
                    <FontAwesome
                      name="shopping-cart"
                      color={color}
                      size={30} />
                    <Badge />
                      
                  </View>
                    )
                }} />
            <Tab.Screen
              name="Admin"
              component={Admin}
              options={{
                tabBarIcon: ({color}) => (
                  <FontAwesome
                    name="cog"
                    color={color}
                    size={30} />
                    )
                }} />
            <Tab.Screen
              name="User"
              component={User}
              options={{
                tabBarIcon: ({color}) => (
                  <FontAwesome
                    name="user"
                    color={color}
                    size={30} />
                    )
                }} />
      </Tab.Navigator>  
    )
}

export default BottomTab;
