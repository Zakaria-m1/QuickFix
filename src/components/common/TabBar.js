// src/components/CustomTabBar.js
import React, { useCallback, useEffect, useMemo } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withSequence, Easing, withTiming } from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';

const TabButton = ({ name, label, color, size, focused, onPress, styles }) => {
  const scale = useSharedValue(1);

  const handlePress = () => {
    scale.value = withSequence(
      withSpring(1.2, { stiffness: 200 }),
      withSpring(1, { stiffness: 200 })
    );
    onPress();
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Animated.View style={animatedStyle}>
        <MaterialIcons name={name} size={size} color={color} />
      </Animated.View>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const SpecialTabButton = ({ colors, styles, onPress }) => {
  const specialTabScale = useSharedValue(1);

  const animateSpecialTab = useCallback(() => {
    specialTabScale.value = withSequence(
      withTiming(1.1, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
      withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
    );
  }, [specialTabScale]);

  useEffect(() => {
    animateSpecialTab();
  }, [animateSpecialTab]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: specialTabScale.value }],
  }));

  return (
    <TouchableOpacity onPress={onPress} style={styles.specialButton}>
      <Animated.View style={animatedStyle}>
        <MaterialIcons name="add-circle" size={60} color={colors.accent} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const CustomTabBar = ({ selectedTab, onTabPress }) => {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const navigation = useNavigation();
  

  const tabs = [
    { name: 'Home', iconName: 'home', label: 'Hem' },
    { name: 'Notifications', iconName: 'search', label: 'Sök' },
    { name: 'NyAnnons', iconName: 'add-circle', label: 'Ny Annons' },
    { name: 'Chat', iconName: 'view-list', label: 'Annonser' },
    { name: 'Profile', iconName: 'account-circle', label: 'Konto' },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => {
        const isFocused = selectedTab === tab.name;
        const onPress = () => onTabPress(tab.name);

        return tab.name === 'NyAnnons' ? (
          <View key={tab.name} style={styles.specialButtonContainer}>
            <SpecialTabButton colors={colors} onPress={() => navigation.navigate('AnnonsModal')} styles={styles} />
            <Text style={[styles.label, { color: isFocused ? colors.accent : 'gray' }]}>{tab.label}</Text>
          </View>
        ) : (
          <TabButton
            key={tab.name}
            name={tab.iconName}
            label={tab.label}
            color={isFocused ? colors.accent : 'gray'}
            size={28}
            focused={isFocused}
            onPress={onPress}
            styles={styles}
          />
        );
      })}
    </View>
  );
};

const getStyles = (colors) =>
  StyleSheet.create({
    tabBar: {
      flexDirection: 'row',
      height: 80,
      backgroundColor: colors.secondary,
      borderTopWidth: 1,
      borderTopColor: colors.separator,
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 20,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 70, // Fixed width for each button
    },
    label: {
      fontSize: 12,
      marginTop: 2,
      textAlign: 'center',
    },
    specialButtonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -20,
      width: 70, // Fixed width for special button container
    },
    specialButton: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default CustomTabBar;
