// src/screens/JobRequestScreen.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import globalStyles from '../../styles/global';
import JobRequest from '../../components/Seller/JobRequests';

const JobRequestScreen = ({ navigation }) => {
  const [applications] = useState([
    {
      id: '1',
      title: 'Fixa vattenläcka1n',
      status: 'Accepted',
      profileImage: 'https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-12.jpg',
      user: 'Gunnar',
      price: 700,
      date: 'Thu 12 June, 17:00',
    },
    {
      id: '2',
      title: 'Installera lampor',
      status: 'Pending',
      profileImage: 'https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-12.jpg',
      user: 'Karl',
      price: 300,
      date: 'Fri 13 June, 10:00',
    },
    {
      id: '3',
      title: 'Måla väggar',
      status: 'Pending',
      profileImage: 'https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-12.jpg',
      user: 'Lisa',
      price: 500,
      date: 'Sat 14 June, 14:00',
    },
  ]);

  const handlePressChat = (application) => {
    navigation.navigate('Chat', { application });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <JobRequest applications={applications} onPressChat={handlePressChat} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Add any styles if needed
});

export default JobRequestScreen;
