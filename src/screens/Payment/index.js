import React from 'react'
import { View, Text, Button } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import { List, Radio, Select } from 'native-base';
import styles from './styles';
import { AntDesign, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

const methods = [
    {name: 'Cash on Delivery', value: 1},
    {name: 'Bank Transfer', value: 2},
    {name: 'Card Payment', value: 3},
];
const paymentCards = [
    {name: 'Wallet', value: 1},
    {name: 'Visa', value: 2},
    {name: 'MasterCard', value: 3},
    {name: 'Other', value: 4},
];
const Payment = () => {
    const route = useRoute();
    const order =  route.params !== undefined ? route.params.order : null;
    const navigation = useNavigation();
    const [selected, setSelected] = React.useState();
    const [card, setCard] = React.useState();
    return (
        <View>
            <View
              style={styles.paymentMethodsContainer}>
                <Text
                  style={styles.paymentMethodsTitle}>Choose your payment method</Text>
            </View>
            <View>
                {methods.map((item, index) =>
                {
                    return (
                        <List.Item
                          style={styles.itemButton}
                          onPress={() => setSelected(item.value)}
                          key={index} >
                              <View
                                style={styles.itemContainer}>
                                  <Text>{item.name}</Text>
                                  <View>
                                      {selected === item.value && (<AntDesign name='check'  />)}
                                   </View>
                              </View>
                        </List.Item>
                    )
                })}
                { selected === 3 ? (
                    <Select
                    minWidth={200}
                    variant="rounded"
                    placeholder="Select your country"
                    placeholderTextColor={'#007aff'}
                    dropdownIcon={<SimpleLineIcons name="arrow-down" style={{marginRight: 10}} />}
                     selectedValue={card}
                    onValueChange={(x) => setCard(x)} >
                      {paymentCards.map( (item, index) => {
                          return (
                              <Select.Item
                                key={index}
                                label={item.name}
                                value={item.name} />
                          )
                      })}
                  </Select>
                ): null
                }
                <View>
                    <Button
                      title="Confirm"
                      onPress={() => navigation.navigate('Confirm',{ order })} />
                </View>
            </View>
        </View>
    )
}

export default Payment;
