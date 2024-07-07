import React, { useEffect } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { useTheme } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const CircularTransition = ({ show, backgroundColor = '#6200ea', revealPosition = 'bottom', duration = 500 }) => {
  const scale = useSharedValue(0.00001);
  const { colors } = useTheme();

  useEffect(() => {
    if (show) {
      expand();
    } else {
      collapse();
    }
  }, [show]);

  const expand = () => {
    scale.value = withTiming(5, {
      duration,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const collapse = () => {
    scale.value = withTiming(0.00001, {
      duration,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const circlePosition = {
    bottom: revealPosition === 'bottom' ? -width / 2 : undefined,
    left: revealPosition === 'left' ? -width / 2 : undefined,
    top: revealPosition === 'top' ? -width / 2 : undefined,
    right: revealPosition === 'right' ? -width / 2 : undefined,
  };

  return (
    show && (
      <View style={styles.transitionContainer} pointerEvents="none">
        <Animated.View
          style={[
            styles.circle,
            circlePosition,
            animatedStyle,
            {
              backgroundColor: colors.secondary,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.3,
              shadowRadius: 20,
            },
          ]}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  transitionContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  circle: {
    position: 'absolute',
    width: width,
    height: width,
    borderRadius: width / 2,
  },
});

export default CircularTransition;
