import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import globalStyles from '../../styles/global';

const Input = ({ placeholder, style, ...props }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[globalStyles.input, style]}
      {...props}
    />
  );
};

export default Input;
