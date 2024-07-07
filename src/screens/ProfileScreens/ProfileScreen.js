import React, { useCallback, useEffect, useMemo } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import { useUser } from '../../user/UserContext';
import ConsumerProfile from './ConsumerProfile';
import GuestProfile from './GuestProfile';
import HelperProfile  from './HelperProfile';
import CustomNavBar from '../../components/common/NavBar';
import { useTheme } from '@react-navigation/native';

const ProfileScreen = () => {
  const { user, toggleRole } = useUser();
  const { colors } = useTheme();
  let ProfileComponent;
  if (!user.loggedIn) {
    ProfileComponent = <GuestProfile />;
  } else {
    switch (user.role) {
      case 'consumer':
        ProfileComponent = <ConsumerProfile />;
        break;
      case 'helper':
        ProfileComponent = <HelperProfile />;
        break;
      default:
        ProfileComponent = (
          <SafeAreaView>
            <Text>Något gick fel!? Starta om Appen på nytt</Text>
          </SafeAreaView>
        );
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.secondary  }}>

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 40}}>
        {ProfileComponent}
        <Button title="Toggle Role" onPress={toggleRole} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
