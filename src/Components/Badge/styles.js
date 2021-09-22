import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    badge:
    {
        width: 20,
        height: 20,
        position: 'absolute',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        top: -4,
        right: -10,
        backgroundColor:'red'
    },
    text:
    {
        fontSize: 12,
        fontWeight:'bold',
        color: 'white'
    }
});

export default styles;
