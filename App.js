import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { UserProvider } from './src/user/UserContext';
import WelcomeScreen from './src/components/Welcome/WelcomeScreen';
import BasicViewComponent from './src/components/modals/LoginModal';
import colors from './src/styles/colors'; // Ensure this path is correct
import CustomTabNavigator from './src/navigation/BuyerNavigator';
import JobbaModal from './src/components/modals/JobbaModal';
import CustomBackground from './src/components/modals/LoginModal';
import BuyerHome from './src/components/Buyer/Home';
import AnnonserScreen from './src/screens/NotificationScreens/NotificationScreen'
import ChatScreen from './src/screens/ChatScreens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreens/ProfileScreen';
import AnnonsModal from './src/components/modals/AnnonsModal';

const Stack = createStackNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    'FredokaOne-Regular': require('./assets/fonts/FredokaOne-Regular.ttf'),
    'Omnes' : require('./assets/fonts/Omnes Bold.otf')
  });
};

const App = () => {
  const scheme = useColorScheme();
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await loadFonts();
        // Artificially delay for two seconds to simulate a slow loading experience.
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserProvider>
      <NavigationContainer theme={scheme === 'dark' ? colors.darkTheme : colors.lightTheme}>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ gestureEnabled: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={CustomTabNavigator} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, }} />
          <Stack.Screen
            name="JobbaModal"
            component={JobbaModal}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
              gestureEnabled: true,
              headerShown: false,
              presentation: 'modal', // Add presentation: 'modal'
            }}
          />
          <Stack.Screen
            name="LoginModal"
            component={CustomBackground}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
              gestureEnabled: true,
              headerShown: false,
              presentation: 'modal', // Add presentation: 'modal'
            }}
          />
                    <Stack.Screen
            name="AnnonsModal"
            component={AnnonsModal}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
              gestureEnabled: true,
              headerShown: false,
              presentation: 'modal', // Add presentation: 'modal'
            }}
          />
        <Stack.Screen name="Notifications" component={AnnonserScreen} 
                    options={{
                      cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                      gestureEnabled: true,
                      headerShown: false,
                      presentation: 'modal', // Add presentation: 'modal'
                    }}
                    />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
