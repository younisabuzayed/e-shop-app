
import { Dimensions, StyleSheet } from "react-native";
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:
    {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 50,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white',
    },
    image:
    {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45,
    },
    cart:
    {
        marginBottom: 10,
        height: width / 2 - 2 - 90,
        width: width / 2 - 20 -10,
    },
    title:
    {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    price:
    {
        fontSize: 20,
        color: 'orange',
        marginTop: 10,
    },
    addContainer:
    {
        marginBottom: 60,
    },
    unavailableText:
    {
        marginTop: 20,
    },
});

export default styles;
