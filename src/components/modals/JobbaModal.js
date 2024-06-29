import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text, Animated, Image, ScrollView
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MaterialIcons, FontAwesome5, Feather, Entypo } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const JobbaModal = ({ visible, onClose }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const translateY = useRef(new Animated.Value(0)).current;
  const lastTranslateY = useState(0)[0];
  const opacity = useRef(new Animated.Value(1)).current;
  const backgroundScale = useRef(new Animated.Value(1)).current;

  const animateModal = useCallback(() => {
    if (visible) {
      translateY.setValue(0);
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(backgroundScale, {
        toValue: 0.9,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(backgroundScale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  useEffect(() => {
    animateModal();
  }, [visible, animateModal]);

  const handleGesture = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  const handleStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      const { translationY } = nativeEvent;
      const newTranslateY = lastTranslateY + translationY;
      if (newTranslateY > 150) {
        onClose();
      } else {
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          bounciness: 10,
        }).start();
      }
    }
  };

  const translateYWithLimit = translateY.interpolate({
    inputRange: [-1, 0, 400],
    outputRange: [0, 0, 400],
    extrapolate: 'clamp',
  });

  const overlayOpacity = translateY.interpolate({
    inputRange: [0, 400],
    outputRange: [0.7, 0],
    extrapolate: 'clamp',
  });

  return (
    <>
      <Animated.View style={{ flex: 1, transform: [{ scale: backgroundScale }] }}>
        {/* Background content goes here */}
      </Animated.View>
      <Modal
        isVisible={visible}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={500}
        animationOutTiming={500}
        useNativeDriver
        hideModalContentWhileAnimating
        style={styles.modal}
        backdropTransitionOutTiming={0}
        backdropTransitionInTiming={0}
        customBackdrop={
          <Animated.View style={{ flex: 1, backgroundColor: 'black', opacity: overlayOpacity }} />
        }
      >
        <PanGestureHandler
          onGestureEvent={handleGesture}
          onHandlerStateChange={handleStateChange}
        >
          <Animated.View style={[styles.container, { transform: [{ translateY: translateYWithLimit }] }]}>
            <View style={styles.header}>
              <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <MaterialIcons name="close" size={24} color={colors.text} />
              </TouchableOpacity>
            </View>
            <Animated.View style={{ opacity }}>
              <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Bli Arbetare</Text>
                <Text style={styles.description}>
                  Tjäna pengar genom att erbjuda dina tjänster inom alla möjliga områden. Från städning till webbdesign, det finns alltid någon som behöver din hjälp.
                </Text>
                {renderFeature(styles, colors, 'clock', 'Flexibla tider', 'Arbeta när det passar dig. Ditt schema, dina regler.')}
                {renderFeature(styles, colors, 'dollar-sign', 'Ingen avgift', 'Behåll hela din intäkt. Inga avgifter eller kostnader, till skillnad från vissa andra appar.')}
                {renderFeature(styles, colors, 'tools', 'Använd dina talenter', 'Erbjud dina unika färdigheter och tjäna pengar på det du är bäst på.')}
                {renderFeature(styles, colors, 'hands-helping', 'Brett utbud av tjänster', 'Oavsett om du är en hantverkare, lärare eller tech-expert, finns det något för alla.')}
                <View style={styles.infoBox}>
                  <MaterialIcons name="info-outline" size={24} color={colors.text} />
                  <Text style={styles.infoText}>
                    Allt du behöver är din bankkontoinformation och ett giltigt ID. Se till att BankID är installerat på din telefon. Kom igång och börja arbeta snabbt!
                  </Text>
                </View>
              </ScrollView>
              <View style={styles.footer}>
                <TouchableOpacity style={styles.continueButton} onPress={onClose}>
                  <Text style={styles.continueButtonText}>FORTSÄTT</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </Modal>
    </>
  );
};

const renderFeature = (styles, colors, iconName, title, description) => (
  <View style={styles.feature}>
    <FontAwesome5 name={iconName} size={24} color={colors.accent} />
    <Text style={styles.featureText}>
      <Text style={styles.featureTitle}>{title}</Text>
      {'\n'}
      {description}
    </Text>
  </View>
);

const getStyles = (colors) => StyleSheet.create({
  container: {
    flex: 0.95, // Set the height to 95%
    justifyContent: 'flex-end',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  header: {
    width: '100%',
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    padding: 5,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.accent,
  },
  description: {
    fontSize: 16,
    color: colors.text,
    marginVertical: 10,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.text,
  },
  featureTitle: {
    fontWeight: 'bold',
    color: colors.accent,
  },
  footer: {
    padding: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  continueButton: {
    backgroundColor: colors.accent,
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 15,
    alignSelf: 'center',
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginVertical: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: colors.text,
    flex: 1,
  },
});

export default JobbaModal;
