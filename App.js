import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
import { UserProvider } from './src/user/UserContext';
import WelcomeScreen from './src/components/Welcome/WelcomeScreen';
import CustomTabBar from './src/components/common/TabBar';
import colors from './src/styles/colors'; // Ensure this path is correct

const Stack = createStackNavigator();

const App = () => {
  const scheme = useColorScheme();

  return (
    <UserProvider>
      <NavigationContainer theme={scheme === 'dark' ? colors.darkTheme : colors.lightTheme}>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ gestureEnabled: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={CustomTabBar} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
