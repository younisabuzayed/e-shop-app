import { Badge, List, ScrollView } from 'native-base';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';

const CategoryFilter = ({categories, categoryFilter, productsCtg,
                         active, setActive}) => {
    return (
       <ScrollView
         bounces={true}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         style={styles.scrollView} >
             <List.Item
               borderColor="transparent" >
                 <TouchableOpacity
                     key={1}
                     onPress={() => {categoryFilter('all'), setActive(-1)}} >
                       <Badge
                         rounded='full'
                         height={7}
                         marginLeft={2}
                         style={[
                             styles.center,
                             active === -1
                              ? styles.active
                              : styles.inactive ]} >
                           <Text style={styles.buttonText}>All</Text>
                       </Badge>
                   </TouchableOpacity>  
                 {categories.map((item, index) => (
                    <TouchableOpacity
                     key={item._id}
                     onPress={() => {categoryFilter(item._id), setActive(categories.indexOf(item))}} >
                       <Badge
                         rounded='full'
                         height={7}
                         marginLeft={2}
                         style={[
                             styles.center,
                             active === categories.indexOf(item)
                              ? styles.active
                              : styles.inactive ]} >
                           <Text style={styles.buttonText}>{item.name}</Text>
                       </Badge>
                   </TouchableOpacity>
                 ))}
             </List.Item>
       </ScrollView>
    )
}

export default CategoryFilter;
