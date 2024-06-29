import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const AnnonsCard = ({ image, title, price }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.price, { color: colors.primary }]}>{price}</Text>
    </View>
  );
};

const MessageItem = ({ message }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.messageItem, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    width: 200,
  },
  image: {
    width: '100%',
    height: 100,
  },
  title: {
    fontSize: 16,
    margin: 5,
  },
  price: {
    fontSize: 14,
    margin: 5,
  },
  messageItem: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
});

export { AnnonsCard, MessageItem };
