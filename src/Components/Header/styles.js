
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header:
    {
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingTop: Platform.OS === 'android' ? 10 : 0,
     },
    logo:
    {
        height: 50,
        marginBottom: 5
    }
});

export default styles;
