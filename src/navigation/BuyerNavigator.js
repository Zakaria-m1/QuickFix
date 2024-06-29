import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BuyerHome from '../components/Buyer/Home';
import RequestForm from '../components/Buyer/RequestForm';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import ChatScreen from '../screens/ChatScreens/ChatScreen';
import NotificationScreen from '../screens/NotificationScreens/NotificationScreen';

const Stack = createStackNavigator();

const BuyerNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BuyerHome">
      <Stack.Screen name="BuyerHome" component={BuyerHome} options={{ headerShown: false }} />
      <Stack.Screen name="RequestForm" component={RequestForm} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default BuyerNavigator;
