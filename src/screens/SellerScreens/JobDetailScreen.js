// src/screens/SellerScreens/JobDetailScreen.js
import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import globalStyles from '../../styles/global';
import Button from '../../components/common/Button';
import CustomNavBar from '../../components/common/NavBar';

const JobDetailScreen = ({ route, navigation }) => {
  const { job } = route.params;

  return (
    <SafeAreaView style={globalStyles.container}>
      <CustomNavBar title="Job Detail" />
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.description}>{job.description}</Text>
      <Text style={styles.price}>{job.price} kr</Text>
      <Text style={styles.publishedDate}>Published: {job.publishedDate}</Text>
      {job.image && <Image source={{ uri: job.image }} style={styles.image} />}
      <Button title="Acceptera erbjudande" onPress={() => { /* Handle job acceptance */ }} />
      <Button title="Motbud" onPress={() => { /* Handle job acceptance */ }} />
      <Button title="Starta chat" onPress={() => navigation.navigate('Chat', { job })} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFA500',  // Orange
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',  // White
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA500',  // Orange
    marginBottom: 10,
    textAlign: 'center',
  },
  publishedDate: {
    fontSize: 14,
    color: '#FFFFFF',  // White
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default JobDetailScreen;
