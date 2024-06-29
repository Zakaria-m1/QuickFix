import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Card from '../common/Card';
import globalStyles from '../../styles/global';
import CustomNavBar from '../common/NavBar';

const jobs = [
    {
      id: '1',
      title: 'Vattenläcka i köket',
      description: 'Stor vattenläcka i köket behöver någon akut!',
      price: 700,
      publishedDate: 'Thu 12 June, 14:00',
      availableDate: 'Thu 12 June, 17:00',
      user: {
        name: 'Gunnar',
        profilePicture: 'https://via.placeholder.com/50',
      },
    },
    {
      id: '2',
      title: 'El-problem i badrummet',
      description: 'Ljuset i badrummet fungerar inte, behöver någon som kan fixa det!',
      price: 500,
      publishedDate: 'Fri 13 June, 10:00',
      availableDate: 'Fri 13 June, 14:00',
      user: {
        name: 'Astrid',
        profilePicture: 'https://via.placeholder.com/50',
      },
    },
    {
      id: '3',
      title: 'IT-support för hemkontoret',
      description: 'Behöver hjälp med att konfigurera min hemdator, någon som kan hjälpa?',
      price: 300,
      publishedDate: 'Mon 15 June, 12:00',
      availableDate: 'Mon 15 June, 16:00',
      user: {
        name: 'Lars',
        profilePicture: 'https://via.placeholder.com/50',
      },
    },
    {
      id: '4',
      title: 'Trädgårdsarbete',
      description: 'Behöver någon som kan klippa gräset och göra lite trädgårdsarbete',
      price: 400,
      publishedDate: 'Tue 16 June, 09:00',
      availableDate: 'Tue 16 June, 13:00',
      user: {
        name: 'Eva',
        profilePicture: 'https://via.placeholder.com/50',
      },
    },
    {
      id: '5',
      title: 'Flyttjänst',
      description: 'Behöver hjälp med att flytta möbler från lägenheten till nya huset',
      price: 1000,
      publishedDate: 'Wed 17 June, 11:00',
      availableDate: 'Wed 17 June, 15:00',
      user: {
        name: 'Johan',
        profilePicture: 'https://via.placeholder.com/50',
      },
    },
  ];

const JobList = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <CustomNavBar/>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('JobDetail', { job: item })}>
            <Card>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobDescription}>{item.description}</Text>
              <Text style={styles.jobPrice}>{item.price} kr</Text>
              <Text style={styles.availableDate}>Tid: {item.availableDate}</Text>
              <View style={styles.userInfo}>
                <Image source={{ uri: 'https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-11.jpg' }} style={styles.profileImage} />
                <Text style={styles.userName}>{item.user.name}</Text>
                <Text style={styles.availableTime}>{item.publishedDate}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA500',  // Orange
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 16,
    color: '#FFFFFF',  // White
    marginBottom: 10,
  },
  jobPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFA500',  // Orange
    marginBottom: 10,
  },
  publishedDate: {
    fontSize: 14,
    color: '#FFFFFF',  // White
    marginBottom: 10,
  }, 
  availableDate: {
    fontSize: 14,
    color: '#FFFFFF',  // White
    marginBottom: 10,
  }, 
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#FFD580',  // Light Orange
    paddingTop: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFA500',  // Orange
    marginRight: 10,
  },
  availableTime: {
    fontSize: 14,
    color: '#FFFFFF',  // White
  },
});

export default JobList;
