import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import globalStyles from '../../styles/global';
import Card from '../common/Card';
import Button from '../common/Button';
import { MaterialIcons } from '@expo/vector-icons';
import CustomNavBar from '../common/NavBar';
import CustomTabBar from '../common/TabBar'; // Import the new TabBar
import CardIcon from '../../../assets/images/earning.png';

const SellerHome = ({ navigation }) => {
  const rating = 4.5;
  const [modalVisible, setModalVisible] = useState(false);

  const pendingApplications = [
    {
      id: '1',
      title: 'Fixa vattenläckan',
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
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const name = i <= rating ? 'star' : i - rating === 0.5 ? 'star-half' : 'star-border';
      stars.push(<MaterialIcons key={i} name={name} size={24} color="#FFA500" />);
    }
    return stars;
  };

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
          <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('Chat', { application: item })}>
            <Text style={styles.chatButtonText}>Chatta</Text>
          </TouchableOpacity>
        )}
      </View>
    </Card>
  );

  const sortedApplications = pendingApplications.sort((a, b) => (a.status === 'Accepted' ? -1 : 1));

  const acceptedApplications = sortedApplications.filter(app => app.status === 'Accepted');
  const pendingOnlyApplications = sortedApplications.filter(app => app.status !== 'Accepted');

  return (
    <SafeAreaView style={globalStyles.container}>
      <CustomNavBar title="Seller Home" />
      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-12.jpg' }} style={styles.profileImage} />
        <Text style={styles.profileName}>Zakaria</Text>
        {/* <Text style={styles.profileEarnings}>Tjänat: 1500kr</Text> */}
        {/* <View style={styles.ratingContainer}>
          {renderStars(rating)}
          <Text style={styles.ratingText}>({rating})</Text>
        </View> */}
      </View>
      <View style={styles.separator} />
      {/* <TouchableOpacity style={styles.pendingButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.pendingButtonText}>Godkända Ansökningar</Text>
        {acceptedApplications.length > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>{acceptedApplications.length}</Text>
          </View>
        )}
      </TouchableOpacity> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <TouchableOpacity style={styles.closeIcon} onPress={() => setModalVisible(false)}>
                  <MaterialIcons name="close" size={24} color="#FFA500" />
                </TouchableOpacity>
                <Text style={styles.modalTitle}>Godkända Ansökningar</Text>
                <FlatList
                  data={[...acceptedApplications, { separator: true }, ...pendingOnlyApplications]}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => item.separator ? <View style={styles.separator} /> : renderPendingApplication({ item })}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Tjäna pengar med oss</Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxes}>
            <View style={styles.checkboxRow}>
              <MaterialIcons name="check-circle" size={24} color="#FFA500" />
              <Text style={styles.checkboxText}> Flexibla timmar</Text>
            </View>
            <View style={styles.checkboxRow}>
              <MaterialIcons name="check-circle" size={24} color="#FFA500" />
              <Text style={styles.checkboxText}> Dina pris</Text>
            </View>
            <View style={styles.checkboxRow}>
              <MaterialIcons name="check-circle" size={24} color="#FFA500" />
              <Text style={styles.checkboxText}> Låg service betalning</Text>
            </View>
          </View>
          <Image source={CardIcon} style={styles.cardIcon} />
        </View>
      </Card>
      {/* <Button title="Redo att jobba?" onPress={() => navigation.navigate('JobList')} style={styles.readyButton} /> */}
      {/* <CustomTabBar /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FFA500',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500',  // Orange
    marginBottom: 10,
  },
  profileEarnings: {
    fontSize: 18,
    color: '#FFFFFF',  // White
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 16,
    color: '#FFA500',  // Orange
    marginLeft: 5,
  },
  separator: {
    borderBottomColor: '#FFD580',  // Light Orange
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#0F0F0F',  // Dark grey for card background
    padding: 15,
    borderRadius: 10,
  },
  acceptedCard: {
    borderColor: '#FFA500',
    borderWidth: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA500',  // Orange
    marginBottom: 15,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxes: {
    flex: 1,
  },
  cardIcon: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    fontSize: 16,
    color: '#FFFFFF',  // White
    marginLeft: 10,
  },
  readyButton: {
    marginTop: 20,
  },
  pendingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  pendingButtonText: {
    color: '#000000',
    fontSize: 16,
  },
  notificationBadge: {
    backgroundColor: '#FF0000',
    borderRadius: 10,
    marginLeft: 10,
    paddingHorizontal: 5,
  },
  notificationText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: '#2C2C2C',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderWidth: 2,
    borderColor: '#FFA500',
    borderRadius: 20,
    padding: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 10,
    textAlign: 'center',
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
    color: '#00FF00',  // Green for accepted status
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

export default SellerHome;
