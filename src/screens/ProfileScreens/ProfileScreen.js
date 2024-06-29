import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import { useUser } from '../../user/UserContext';
import ConsumerProfile from './ConsumerProfile';
import GuestProfile from './GuestProfile';
import HelperProfile  from './HelperProfile';
import CustomNavBar from '../../components/common/NavBar';

const ProfileScreen = () => {
  const { user, toggleRole } = useUser();

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
    <View style={{ flex: 1 }}>
      <CustomNavBar/>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {ProfileComponent}
        <Button title="Toggle Role" onPress={toggleRole} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
