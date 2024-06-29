// src/components/Welcome/WelcomeScreen.js
import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../common/Button';
import globalStyles from '../../styles/global';
import QuickFixImage from '../../../assets/images/QuickFix2.png';
import { UserContext } from '../../context/UserContext';

const WelcomeScreen = ({ navigation }) => {
  const { setUserType } = useContext(UserContext);

  const handleSellerPress = () => {
    console.log("Seller button pressed");
    setUserType('seller');
    // navigateTo('SellerHome');
  };

  const handleBuyerPress = () => {
    console.log("Buyer button pressed");
    setUserType('buyer');
    navigateTo('BuyerHome');
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={globalStyles.container}>
      <Image source={QuickFixImage} style={styles.image} />
      <Text style={globalStyles.title}>Välkommen till QuickFix</Text>
      <Text style={globalStyles.subtitle}>Är det du som har problemet eller är du problemlösaren?</Text>
      <Button title="Säljare" onPress={handleSellerPress} />
      <Button title="Köpare" onPress={handleBuyerPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default WelcomeScreen;
