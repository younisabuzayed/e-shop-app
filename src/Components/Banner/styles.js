import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:
    {
        backgroundColor: 'gainsboro',
    },
    swiper:
    {
        width,
        height:width / 2,
        alignItems: 'center',
        marginTop: 10
    },
    image:
    {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20,
    },
});

export default styles;
