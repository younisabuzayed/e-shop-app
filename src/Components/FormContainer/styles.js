import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:
    {
        marginTop: 30,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:
    {
        fontSize: 30,
    }
});

export default styles;
