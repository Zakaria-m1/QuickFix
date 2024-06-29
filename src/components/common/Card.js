import React from 'react';
import { View, StyleSheet } from 'react-native';
import globalStyles from '../../styles/global';

const Card = ({ children, style }) => {
  return (
    <View style={[globalStyles.card, style]}>
      {children}
    </View>
  );
};

export default Card;
