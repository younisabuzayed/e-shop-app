import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles';

const Input = ({placeholder, name, id,
                value, autoCorrect, onChangeText,
                onFocus, secureTextEntry,keyboardType}) => {
    return (
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          name={name}
          id={id}
          value={value}
          autoCorrect={autoCorrect}
          onChangeText={onChangeText}
          onFocus={onFocus}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType} />
    )
}

export default Input;
