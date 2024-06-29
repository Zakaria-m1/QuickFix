import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SellerHome from '../components/Seller/Home';
import JobList from '../components/Seller/JobList';
import JobDetailScreen from '../screens/SellerScreens/JobDetailScreen';
import ChatScreen from '../screens/ChatScreens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import CustomTabBar from '../components/common/TabBar';
import JobRequestScreen from '../screens/SellerScreens/JobScreen';

const Stack = createStackNavigator();

const SellerNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="SellerHome">
        <Stack.Screen name="SellerHome" component={SellerHome} options={{ headerShown: false }} />
        <Stack.Screen name="JobList" component={JobList} options={{ headerShown: false }} />
        <Stack.Screen name="JobDetail" component={JobDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="JobRequest" component={JobRequestScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      <CustomTabBar />
    </>
  );
};

export default SellerNavigator;
