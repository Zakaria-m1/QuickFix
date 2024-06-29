// src/components/Welcome/WelcomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import globalStyles from '../../styles/global';
import QuickFixImage from '../../../assets/images/Splash.png';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = ({ navigation }) => {
  
    useEffect(() => {
        // Navigate to BuyerHome after 3 seconds
        const timer = setTimeout(() => {
            navigation.navigate('Main');
        }, 2000);

        // Cleanup the timer if the component is unmounted
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
      <View>
        <Image source={QuickFixImage} style={styles.image} />
      </View>
    
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    },
    image: {
        width: '100%',
        height: '100%',
        marginBottom: 10,
        alignSelf: 'center',
    },
});

export default WelcomeScreen;
