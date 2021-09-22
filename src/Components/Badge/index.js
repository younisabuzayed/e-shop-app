import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
const Badge = ({cartItemReducer}) => {
    return (
        <>
          {cartItemReducer.length ? (
              <View
                style={styles.badge}>
                  <Text
                    style={styles.text} >{cartItemReducer.length}</Text>
              </View>
          ): null}
        </>
    )
}
const mapStateToProps = (state) =>
{
    return {
        cartItemReducer: state.cartItemReducer.cartItems,
    }
};
export default connect(mapStateToProps, null)(Badge);
