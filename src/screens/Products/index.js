import React from 'react'
import { FlatList, TouchableOpacity, View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { Container, HStack, Icon, Input, SearchIcon } from 'native-base';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Banner, CategoryFilter, ProductList, SearchedProducts } from '../../Components';
import styles from './styles';
import { connect } from 'react-redux';
import ProductsAction from '../../redux/actions/ProductsAction';
import CategoriesAction from '../../redux/actions/CategoriesAction';



const Products = ({productsReducer, isLoading, productsAction,
                  categoriesReducer, categoriesAction, isLoadingCategories }) => {
    const [products, setProducts] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [productsCtg, setProductsCtg] = React.useState([]);
    const [productsFiltered, setProductsFiltered] = React.useState([]);
    const [focus, setFocus] = React.useState();
    const [active, setActive] = React.useState();
    const [initialState, setInitialState] = React.useState([]);
    //Use Navigation
    const navigation = useNavigation();

    const fetchData = React.useCallback(() =>
    {
        setActive(-1);
        setFocus(false);
        productsAction();
        categoriesAction();
        if (productsReducer && categoriesReducer ){
            // console.log('sdsdsd');
        setProducts(productsReducer.data);
        setProductsFiltered(productsReducer.data);
        setCategories(categoriesReducer.data);
        setProductsCtg(productsReducer.data);
        setInitialState(productsReducer.data);
    }
    },[])
    useFocusEffect(fetchData)
    const searchProduct = (text) =>
    {
        setProductsFiltered( products.filter( i => i.name.toLowerCase().includes(text.toLowerCase())))
    };

    const openList = () =>
    {
        setFocus(true)
    };
    const onBlur = () =>
    {
        setFocus(false)
    }

    const changeCtg = (ctg) =>
    {
        {
            ctg === 'all'
                ? [setProductsCtg(initialState), setActive(true)]
                : [
                    setProductsCtg(
                        products.filter( i => i.category._id === ctg),
                        setActive(true)
                    )
                ]
        }
    }

    const OnClose = ({onPress}) =>
    {
        return (
            <TouchableOpacity
            style={{marginRight: 5}}
              onPress={onPress} >
                <Ionicons 
                      name="ios-close" 
                      size={15} 
                      backgroundColor='transparent'
                      
                      color="black" />
            </TouchableOpacity>
        )
    }
    return (
        <>
        {isLoadingCategories === false && isLoading === false ?
        (<ScrollView>
            <View
              style={styles.searchContainer}>
                <Input
                  placeholder="Search"
                  variant="filled"
                  bg="gray.200"
                  borderRadius={10}
                  py={1}
                  px={2}
                  InputLeftElement={
                    <Ionicons
                      style={{marginLeft: 5}}
                      name="ios-search" 
                      size={20} color="black" />}
                  InputRightElement={ focus == true 
                   ?<OnClose onPress={onBlur} /> : null}
                  onFocus={openList}
                  onChangeText={ text => searchProduct(text)}
                   />
            </View>
            {focus == true 
            ? <SearchedProducts 
                productsFilteres={productsFiltered}
                navigation={navigation} />
            : (
            <View
              style={styles.container}>
                <View
                  style={styles.swiperContainer}>
                   <Banner />
                </View>
                <View>
                    <CategoryFilter
                      categories={categories}
                      categoryFilter={changeCtg}
                      productsCtg={productsCtg}
                      active={active}
                      setActive={setActive} />
                </View>
                {productsCtg.length > 0 
                ? (
                    <View
                      style={styles.listContainer}>
                        {productsCtg.map((item, index) =>
                        {
                            return (
                                <ProductList
                                  key={index}
                                  item={item}
                                  navigation={navigation} />
                            )
                        })}
                    </View>

                ): (
                    <View
                      style={[styles.center]}>
                        <Text>No Products Found</Text>
                    </View>
                )}
                    {/* <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={ProductList}
                    keyExtractor={(item, index) => index.toString()} /> */}
            </View>)
            }
        </ScrollView>)
        : (
            <ActivityIndicator
              color="red" />
        )}
        </>
    )
}
const mapStateToProps = (state) =>
{
    return {
        productsReducer: state.productsReducer.products,
        isLoading: state.productsReducer.isLoading,
        categoriesReducer: state.categoriesReducer.categories,
        isLoadingCategories: state.categoriesReducer.isLoading,
    }
};
const mapDispatchToProps = (dispatch) =>
{
    return {
        productsAction: () => dispatch(ProductsAction()),
        categoriesAction: () => dispatch(CategoriesAction()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);

