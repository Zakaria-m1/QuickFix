// src/components/Seller/JobRequest.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Card from '../common/Card';
import { MaterialIcons } from '@expo/vector-icons';

const JobRequest = ({ applications, onPressChat }) => {
  const renderPendingApplication = ({ item }) => (
    <Card style={[styles.card, item.status === 'Accepted' && styles.acceptedCard]}>
      <View style={styles.applicationContainer}>
        <Image source={{ uri: item.profileImage }} style={styles.applicationProfileImage} />
        <View style={styles.applicationDetails}>
          <Text style={styles.applicationTitle}>{item.title}</Text>
          <Text style={[styles.applicationStatus, item.status === 'Accepted' && styles.acceptedStatus]}>{item.status === 'Accepted' ? 'Accepterad' : 'Väntar'}</Text>
          <Text style={styles.applicationUser}>av {item.user}</Text>
          <Text style={styles.applicationPrice}>{item.price} kr</Text>
          <Text style={styles.applicationDate}>{item.date}</Text>
        </View>
        {item.status === 'Accepted' && (
          <TouchableOpacity style={styles.chatButton} onPress={() => onPressChat(item)}>
            <Text style={styles.chatButtonText}>Chatta</Text>
          </TouchableOpacity>
        )}
      </View>
    </Card>
  );

  return (
    <FlatList
      data={applications}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderPendingApplication}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: '#0F0F0F',
    padding: 15,
    borderRadius: 10,
  },
  acceptedCard: {
    borderColor: '#FFA500',
    borderWidth: 2,
  },
  applicationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  applicationProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  applicationDetails: {
    flex: 1,
  },
  applicationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  applicationStatus: {
    fontSize: 14,
    color: '#FFA500',
  },
  acceptedStatus: {
    color: '#00FF00',
  },
  applicationUser: {
    fontSize: 14,
    color: '#FFA500',
    marginTop: 5,
  },
  applicationPrice: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 5,
  },
  applicationDate: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 5,
  },
  chatButton: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#000000',
    fontSize: 16,
  },
});

export default JobRequest;
