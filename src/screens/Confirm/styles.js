import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:
    {
        height,
        padding: 8,
        alignItems:'center',
        backgroundColor:'white'
    },
    titleContainer:
    {
        margin: 8,
        alignItems: 'center',
        justifyContent:'center',
    },
    title:
    {
        fontSize: 20,
        fontWeight:'bold',
    },
    shippingContainer:
    {
        borderWidth: 1,
        borderColor: 'orange',
    },
    titleText:
    {
        alignSelf:'center',
        fontWeight: 'bold',
        fontSize: 16,
        margin: 8,
    },
    AddressInfo:
    {
        padding: 8,
    },
    infoText:
    {},
    listItem:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        margin: 10,
        marginTop: 0,
        width: width / 1.2
    },
    imageItem:
    {
        width: 40,
        height: 40,
        margin: 5,
    },
    bodyContainer:
    {
        flexDirection: 'row',
        width: width / 1.5,
        justifyContent: 'space-between'
    },
    bodyNameText:
    {
        marginRight: 10,
        marginLeft: 10
    },
    bodyPriceText:
    {
        marginRight: 5
    },
    buttonOrderContainer:
    {
        alignItems: 'center',
        margin: 20,
    },
});

export default styles;
