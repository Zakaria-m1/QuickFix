import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import * as Animatable from 'react-native-animatable';

const { height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  const translateY = useSharedValue(height); // Start from below the screen

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Main');
    }, 3000); // 3 seconds total delay

    translateY.value = withTiming(0, {
      duration: 1500,
      easing: Easing.inOut(Easing.ease),
    });

    return () => clearTimeout(timer);
  }, [navigation, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.container}>
      <Animatable.Text 
        animation="bounceIn"
        duration={1000}
        style={styles.title}
      >
        QUIK
      </Animatable.Text>
      <Animated.View style={[styles.animationContainer, animatedStyle]}>
        <LottieView
          source={require('../../../assets/Rocket.json')} // Update with the path to your rocket animation JSON file
          autoPlay
          loop={false}
          
          style={styles.animation}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28A745',
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center',
    overflow: 'hidden', // Ensure no overflow
  },
  animationContainer: {
    width: '100%',
    height: height + 400, // Adjust height to start the animation from below the screen
    position: 'absolute', // Position it absolutely
    bottom: -450,
    zIndex: 1, // Ensure the animation is above other elements
  },
  animation: {
    width: '100%',
    height: '100%',
  },
  title: {
    position: 'absolute', // Position it absolutely
    top: '45%', // Adjust to place the text in the center vertically
    fontSize: 80,
    fontFamily: 'Omnes',
    color: '#ffffff', // Change to '#000000' if using a white background
    zIndex: 2, // Ensure the text is above the animation
  },
});

export default WelcomeScreen;
