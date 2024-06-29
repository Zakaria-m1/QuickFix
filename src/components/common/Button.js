import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../../styles/global';

const Button = ({ title, onPress, style }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, style]}>
        <LinearGradient
          colors={['#FFA500', '#FE7302']}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    buttonContainer: {
      borderRadius: 25,
      overflow: 'hidden',
      marginBottom: 16, // Add margin bottom
    },
    button: {
      paddingVertical: 20,
      paddingHorizontal: 30,
      borderRadius: 30, // Increase border radius
      alignItems: 'center',
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4, // Add elevation
    },
    buttonText: {
      color: '#000000',  // Black text on button
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default Button;