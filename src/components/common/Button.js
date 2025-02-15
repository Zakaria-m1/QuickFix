import React, { useRef, useEffect, useState } from 'react';
import { View, Modal as RNModal, StyleSheet, TouchableOpacity, Text, Animated, TouchableWithoutFeedback, Easing } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const GlobalModal = ({ visible, onClose, children }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(300)).current; // Start modal offscreen
  const [showModal, setShowModal] = useState(visible);
  const { colors } = useTheme();
  const styles = getStyles(colors);

  useEffect(() => {
    if (visible) {
      setShowModal(true);
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0.7, // Target opacity
          duration: 500, // Duration of the animation
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0, // Target position (onscreen)
          duration: 500, // Duration of the animation
          useNativeDriver: true,
          easing: Easing.out(Easing.ease), // Easing function to mimic spring behavior
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0, // Reset opacity
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 300, // Move modal offscreen
          duration: 500, // Duration of the animation
          useNativeDriver: true,
          easing: Easing.in(Easing.ease), // Easing function to mimic spring behavior
        }),
      ]).start(() => {
        setShowModal(false); // Set showModal to false after animation completes
      });
    }
  }, [visible, opacity, translateY]);

  return (
    <RNModal transparent visible={showModal} animationType="none">
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Animated.View style={[styles.overlay, { opacity }]} />
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.modal, { transform: [{ translateY }] }]}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close-circle" size={30} color={colors.primary} />
          </TouchableOpacity>
          {children}
        </Animated.View>
      </View>
    </RNModal>
  );
};

const getStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: colors.secondary, // Dark gray background
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '100%',
    maxHeight: '70%', // Adjust as needed
    zIndex: 1,
    alignItems: 'center'
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: colors.text, // White color for close button
  },
});

export default GlobalModal;
