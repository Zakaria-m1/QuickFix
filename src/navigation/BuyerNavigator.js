import React, { useState } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import BuyerHome from '../components/Buyer/Home';
import NotificationScreen from '../screens/NotificationScreens/NotificationScreen';
import ChatScreen from '../screens/ChatScreens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import CustomTabBar from '../components/common/TabBar';
import CircularTransition from '../components/Masking';
import JobbaModal from '../components/modals/JobbaModal';
import AnnonsModal from '../components/modals/AnnonsModal';

const Stack = createStackNavigator();

const CustomTabNavigator = () => {
  const [selectedTab, setSelectedTab] = useState('Home');
  const [showTransition, setShowTransition] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


  const handleTabChange = (routeName) => {
    if (routeName !== selectedTab) {
      setSelectedTab(routeName);
      setShowTransition(true);
    }
  };

  const renderScreen = (tab) => {
    switch (tab) {
      case 'Home':
        return <Stack.Screen name="Home" component={BuyerHome} />;
      case 'Notifications':
        return <Stack.Screen name="Notifications" component={NotificationScreen} />;
      // case 'NyAnnons':
      //   return <Stack.Screen name="NyAnnons" component={AnnonsModal} />;
      case 'Chat':
        return <Stack.Screen name="Chat" component={ChatScreen} />;
      case 'Profile':
        return <Stack.Screen name="Profile" component={ProfileScreen} />;
      default:
        return null;
    }
  };

  const screenOptions = {
    headerShown: false,
    gestureEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
    transitionSpec: {
      open: {
        animation: 'timing',
        config: {
          duration: 500,
        },
      },
      close: {
        animation: 'timing',
        config: {
          duration: 500,
        },
      },
    },
  };

 return (
    <>
      <Stack.Navigator screenOptions={screenOptions} onTransitionEnd={() => setShowTransition(false)}>
        {renderScreen(selectedTab)}
        
      </Stack.Navigator>
      <CircularTransition show={showTransition} revealPosition="bottom" />
      <CustomTabBar selectedTab={selectedTab} onTabPress={handleTabChange} />
    </>
  );
};

export default CustomTabNavigator;
