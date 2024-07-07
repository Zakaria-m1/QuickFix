import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const Loading = ({ duration = 2000 }) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/Loading.json')}
        autoPlay
        loop
        duration={duration}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  animation: {
    width: 100,
    height: 100,
  },
});

export default Loading;
