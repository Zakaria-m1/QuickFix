import React, { useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import BuyerHome from '../Buyer/Home';
import NotificationScreen from '../../screens/NotificationScreens/NotificationScreen';
import ChatScreen from '../../screens/ChatScreens/ChatScreen';
import ProfileScreen from '../../screens/ProfileScreens/ProfileScreen';

const Tab = createBottomTabNavigator();

const SpecialTabButton = ({ colors }) => {
  const specialTabScale = useMemo(() => new Animated.Value(1), []);

  const animateSpecialTab = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(specialTabScale, {
          toValue: 1.1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(specialTabScale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [specialTabScale]);

  useEffect(() => {
    animateSpecialTab();
  }, [animateSpecialTab]);

  return (
    <Animated.View style={{  transform: [{ scale: specialTabScale }] }}>
      <MaterialIcons style={{ marginTop: -20 }}name="add-circle" size={45} color={colors.accent} />
    </Animated.View>
  );
};

const CustomTabBar = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Notifications') {
              iconName = 'search';
            } else if (route.name === 'Chat') {
              iconName = 'chat';
            } else if (route.name === 'Profile') {
              iconName = 'account-circle';
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: true,
          tabBarStyle: [styles.tabBar, { borderTopColor: colors.accent }],
        })}
      >
        <Tab.Screen name="Home" component={BuyerHome} options={{ tabBarLabel: 'Hem', headerShown: false }} />
        <Tab.Screen name="Notifications" component={NotificationScreen} options={{ tabBarLabel: 'Annonser', headerShown: false }} />
        <Tab.Screen 
          name="NyAnnons" 
          component={ChatScreen} 
          options={{ 
            tabBarLabel: 'Ny Annons',
            tabBarIcon: ({ color }) => <SpecialTabButton colors={colors} />,
            headerShown: false 
          }} 
        />
        <Tab.Screen name="Chat" component={ChatScreen} options={{ tabBarLabel: 'Meddelanden', headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Konto', headerShown: false }} />
      </Tab.Navigator>
    </View>
  );
};

const getStyles = (colors) => StyleSheet.create({
  tabBar: {
    backgroundColor: colors.secondary,
    borderTopWidth: 1,
  },
  badge: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: colors.accent,
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default CustomTabBar;
