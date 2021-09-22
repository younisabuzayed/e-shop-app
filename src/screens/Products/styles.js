import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    searchContainer:
    {
        width: width,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        marginTop: 10,
    },
    container:
    {
        backgroundColor: 'gainsboro',
        paddingTop: 5,
        width: width
    },
    swiperContainer:
    {
        marginBottom: 10,
    },
    listContainer:
    {
        width: '100%',
        height:'100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor:'gainsboro'
    },
    center:
    {
        alignItems: 'center',
        justifyContent: 'center',
        height: height / 2,
    },

});

export default styles;
