import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const CustomBackground = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000d1a', '#28A745']} // Customized gradient colors
        style={styles.gradient}
      >
        <TouchableOpacity style={styles.closeButton}>
          <MaterialIcons name="close" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Snabb och enkel hjälp för alla dina behov – från IT-support till hushållsarbete</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.appleButton}>
            <Text style={styles.appleButtonText}> Fortsätt med Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.phoneButton}>
            <Text style={styles.phoneButtonText}>Fortsätt med telefonnummer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Användarvillkor</Text>
          <Text style={styles.footerText}>Integritetspolicy</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40, // Adjust for top padding
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
  titleContainer: {
    position: 'absolute',
    top: '20%', // Adjust this value to move the title up or down
    width: '80%',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
  appleButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: width * 0.8,
    alignItems: 'center',
  },
  appleButtonText: {
    color: '#000',
    fontSize: 16,
  },
  phoneButton: {
    borderColor: '#fff',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: width * 0.8,
    alignItems: 'center',
  },
  phoneButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 40, // Adjust this value to move the footer up or down
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CustomBackground;
