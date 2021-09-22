import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    paymentMethodsContainer:
    {
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paymentMethodsTitle:
    {
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemButton: ({ pressed }) => [
    {
      backgroundColor: pressed
        ? 'rgb(210, 230, 255)'
        : 'white'
    },],
    itemContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '96%'
    }
});

export default styles;
