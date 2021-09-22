
import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({

    button: 
    {
        width: '50%',
    },
    buttonContent:
    {
        width: width / 2,
    }
});

export default styles;
