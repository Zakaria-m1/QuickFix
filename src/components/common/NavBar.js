// CustomNavBar.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import QuickFixImage from '../../../assets/images/QuikLight.png';

const CustomNavBar = ({ showBackButton = false }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={[styles.navBar, { backgroundColor: colors.secondary }]}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <MaterialIcons name="arrow-back" size={28} color={colors.primary} />
        </TouchableOpacity>
      )}
      
      <View style={styles.imageContainer}>
        <Image source={QuickFixImage} style={styles.image} />
      </View>
      {showBackButton && <View style={styles.iconPlaceholder} />}
    </View>
  );
};

const getStyles = (colors) => StyleSheet.create({
  navBar: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    marginTop: 0,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    marginBottom: 0,
  },
  iconButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  iconPlaceholder: {
    width: 50,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: -10,  // Adjust this value to move the image closer to the bottom
    opacity: 0.9, // Add some opacity to give it a subtle glow
    shadowColor: '#000', // Add a subtle shadow to give it some depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    
  }
});

export default CustomNavBar;
