import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Box, List } from 'native-base';
import styles from './styles';

const icon = 'https://icons-for-free.com/iconfiles/png/512/linecon+products+round+icon-1320165923260225670.png'

const SearchedProducts = ({productsFilteres, navigation}) => {
    return (
        <Box
          borderTopWidth={1}
          borderTopColor={'#808080'}
           >
            {productsFilteres.length > 0 
             ? (
                 productsFilteres.map( (item, index) => (
                     <TouchableOpacity
                       key={index}
                       onPress={() =>navigation.navigate('ProductDetails', { item })}
                       style={styles.productContainer} >
                         <View
                           style={styles.imageContainer}>  
                         <Image
                           resizeMode='contain'
                           style={styles.image}
                           source={{uri : item.image ? item.image : icon}} />
                         </View>
                         <View
                           style={styles.titleAndDescriptionContainer} >
                             <Text
                               style={styles.title}>{item.name}</Text>
                             <Text
                              style={styles.description}>{item.description}</Text>
                         </View>
                    </TouchableOpacity>
                 ))
             )
             : (
                 <View
                   style={styles.noProductsContainer}>
                     <Text
                       style={styles.noProductsText}>
                         No products match the selected
                     </Text>
                 </View>
             )}
        </Box>
    )
}

export default SearchedProducts;
