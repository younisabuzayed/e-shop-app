import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:
    {
        backgroundColor :'white',
        flex: 1,
    },
    imageContainer:
    {
        backgroundColor: 'white',
        padding: 0,
        margin: 0,
    },
    image:
    {
        width: '100%',
        height: 250,
    },
    contentContainer:
    {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameText:
    {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    brandText:
    {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    bottomContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    price:
    {
        fontSize: 24,
        margin: 5,
        color: 'red'
    },
});

export default styles;
