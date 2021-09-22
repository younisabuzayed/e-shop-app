import { Dimensions, StyleSheet } from "react-native";
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    cartItemContainer:
    {
        flexDirection:'row',
        justifyContent: 'space-between',
        width: width -20,
        backgroundColor: '#e3e5e8',
        alignSelf:'center',
        padding: 8,
        borderRadius: 8,
        marginBottom: 5

    },
    cartItemImageAndTitle:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartItemImage:
    {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor:'green',
    },
    cartText:
    {
        marginLeft: 10,
    },
    cartItemPrice:
    {
        justifyContent:'center',
    },
});

export default styles;
