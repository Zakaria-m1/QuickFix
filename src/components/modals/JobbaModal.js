import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const JobbaModal = ({ navigation }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.image}
        />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <MaterialIcons name="close" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Bli Arbetare</Text>
        <Text style={styles.description}>
          Tjäna pengar genom att erbjuda dina tjänster inom alla möjliga områden. Från städning till webbdesign, det finns alltid någon som behöver din hjälp.
        </Text>
        {renderFeature(styles, colors, 'clock', 'Flexibla tider', 'Arbeta när det passar dig. Ditt schema, dina regler.')}
        {renderFeature(styles, colors, 'dollar-sign', 'Ingen avgift', 'Behåll hela din intäkt. Inga avgifter eller kostnader, till skillnad från vissa andra appar.')}
        {renderFeature(styles, colors, 'tools', 'Använd dina talenter', 'Erbjud dina unika färdigheter och tjäna pengar på det du är bäst på.')}
        {renderFeature(styles, colors, 'hands-helping', 'Brett utbud av tjänster', 'Oavsett om du är en hantverkare, lärare eller tech-expert, finns det något för alla.')}
        <View style={styles.infoBox}>
          <MaterialIcons name="info-outline" size={24} color={colors.text} />
          <Text style={styles.infoText}>
            Allt du behöver är din bankkontoinformation och ett giltigt ID. Se till att BankID är installerat på din telefon. Kom igång och börja arbeta snabbt!
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.goBack()}>
          <Text style={styles.continueButtonText}>FORTSÄTT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const renderFeature = (styles, colors, iconName, title, description) => (
  <View style={styles.feature}>
    <FontAwesome5 name={iconName} size={24} color={colors.accent} />
    <Text style={styles.featureText}>
      <Text style={styles.featureTitle}>{title}</Text>
      {'\n'}
      {description}
    </Text>
  </View>
);

const getStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1, // Set the height to 95%
      justifyContent: 'flex-end',
      backgroundColor: '#FFF',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      
    },
    modal: {
      margin: 0,
      justifyContent: 'flex-end',
    },
    header: {
      width: '100%',
      height: 150,
    },
    image: {
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 15,
      padding: 5,
    },
    content: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.accent,
    },
    description: {
      fontSize: 16,
      color: colors.text,
      marginVertical: 10,
    },
    feature: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      paddingHorizontal: 10,
    },
    featureText: {
      marginLeft: 10,
      fontSize: 16,
      color: colors.text,
    },
    featureTitle: {
      fontWeight: 'bold',
      color: colors.accent,
    },
    footer: {
      padding: 10,
      backgroundColor: '#FFF',
      borderTopWidth: 1,
      borderTopColor: '#EEE',
      width: '100%',
      position: 'absolute',
      bottom: 0,
    },
    continueButton: {
      backgroundColor: colors.accent,
      paddingVertical: 20,
      paddingHorizontal: 100,
      borderRadius: 15,
      alignSelf: 'center',
    },
    continueButtonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    infoBox: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#F5F5F5',
      borderRadius: 10,
      marginVertical: 10,
    },
    infoText: {
      marginLeft: 10,
      fontSize: 14,
      color: colors.text,
      flex: 1,
    },
  });

export default JobbaModal;
