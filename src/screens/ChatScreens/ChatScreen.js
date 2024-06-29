// ChatScreen.js
import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CustomNavBar from '../../components/common/NavBar';

const AnnonsCard = ({ image, title, price }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <TouchableOpacity style={styles.annonsCard}>
      <Image source={{ uri: image }} style={styles.annonsImage} />
      <View style={styles.annonsInfo}>
        <Text style={styles.annonsTitle}>{title}</Text>
        <Text style={styles.annonsPrice}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const MessageItem = ({ profileImage, name, latestMessage, timestamp }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.messageItem}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <View style={styles.messageTextContainer}>
        <Text style={styles.messageName}>{name}</Text>
        <Text style={styles.latestMessage}>{latestMessage}</Text>
      </View>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

const ChatScreen = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  // Sample data
  const annonser = [
    { id: '1', image: 'https://via.placeholder.com/150', title: 'Annons 1', price: '1000 kr' },
    { id: '2', image: 'https://via.placeholder.com/150', title: 'Annons 2', price: '2000 kr' },
    { id: '3', image: 'https://via.placeholder.com/150', title: 'Annons 3', price: '3000 kr' },
  ];

  const messages = [
    { id: '1', profileImage: 'https://via.placeholder.com/50', name: 'John Doe', latestMessage: 'Hello, is this still available?', timestamp: '08:43' },
    { id: '2', profileImage: 'https://via.placeholder.com/50', name: 'Jane Smith', latestMessage: 'Yes, it is.', timestamp: 'Tue' },
    { id: '3', profileImage: 'https://via.placeholder.com/50', name: 'Alice Johnson', latestMessage: 'Can we discuss the price?', timestamp: 'Sun' },
  ];

  return (
    <>
      <CustomNavBar title="Chat" />
      <SafeAreaView style={[styles.container, { backgroundColor: colors.secondary }]}>
        <View style={styles.searchContainer}>
          <Text style={styles.title}>Annonser</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.annonsList}>
            {annonser.map((annons) => (
              <AnnonsCard key={annons.id} image={annons.image} title={annons.title} price={annons.price} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.separatorStyle} />
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MessageItem
              profileImage={item.profileImage}
              name={item.name}
              latestMessage={item.latestMessage}
              timestamp={item.timestamp}
            />
          )}
          style={styles.messageList}
        />
      </SafeAreaView>
    </>
  );
};

const getStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginBottom: 20,
  },
  separatorStyle: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  annonsList: {
    paddingHorizontal: 10,
  },
  annonsCard: {
    backgroundColor: colors.card,
    borderRadius: 15,
    overflow: 'hidden',
    marginRight: 10,
    width: 120,
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
    borderColor: colors.primary,
    borderWidth: 0.5,
  },
  annonsImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  annonsInfo: {
    padding: 10,
    alignItems: 'center',
  },
  annonsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  annonsPrice: {
    fontSize: 12,
    color: colors.accent,
  },
  messageList: {
    paddingHorizontal: 15,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  messageTextContainer: {
    flex: 1,
  },
  messageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  latestMessage: {
    fontSize: 14,
    color: colors.text,
    marginTop: 2,
  },
  timestamp: {
    fontSize: 12,
    color: colors.gray,
  },
});

export default ChatScreen;
