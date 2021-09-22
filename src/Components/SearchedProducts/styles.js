import { Dimensions, StyleSheet } from "react-native";
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    productContainer:
    {
        flexDirection: 'row',
        alignItems:'center',
        height: 60,
        marginBottom: 5,
        width,
        borderBottomWidth: .7,
        borderBottomColor: 'gray'
    },
    imageContainer:
    {
        marginRight: 15,
    },
    image:
    {
        height: 50,
        width: 50,
    },
    titleAndDescriptionContainer:
    {},
    title:
    {
        fontSize: 16,
        fontWeight:'bold',
    },
    description:
    {
        fontSize: 13,
        marginTop: 5,
        color:'gray'
    },
    noProductsContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        width,
        paddingTop: 20,
    },
    noProductsText:
    {
        textAlign: 'center',
    }
});

export default styles;
