import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:
    {
        backgroundColor: 'white',
        flex: 1,
    },
    hiddenContainer:
    {
        flex: 1,
        justifyContent:'flex-end',
        flexDirection:'row',
        marginLeft: 10,
        marginRight: 10,
    },
    hiddenButton:
    {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 70,
        width: '100%',
        borderRadius: 8,
    },
    bottomCartContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 8
    },
    totalText:
    {
        fontSize: 18,
        color: 'red'
    },
    bottomButtons:
    {
        flexDirection:'row',
    },
    emptyContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
