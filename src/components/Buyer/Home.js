import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CustomNavBar from '../common/NavBar';
import { FontAwesome5 } from '@expo/vector-icons';

const dummyData = Array.from({ length: 30 }, (v, k) => ({
  id: k.toString(),
  type: k % 2 === 0 ? 'consumer' : 'helper',
  title: k % 2 === 0 ? 'Behöver flytthjälp' : 'Flytthjälp tillgänglig',
  description: k % 2 === 0 ? 'Jag behöver hjälp med att flytta möbler, pris: 500kr' : 'Jag erbjuder professionell flytthjälp med flera års erfarenhet.',
  price: k % 2 === 0 ? '500 kr' : '400 kr',
  image: k % 2 === 0 ? 'https://via.placeholder.com/220x120?text=Flytthjälp' : 'https://via.placeholder.com/220x120?text=Flytthjälp+erbjuds',
}));

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const [selectedTab, setSelectedTab] = useState('all');
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [displayedAnnonser, setDisplayedAnnonser] = useState(dummyData.slice(0, 15));

  const handleLoadMore = useCallback(() => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      setDisplayedAnnonser(dummyData.slice(0, displayedAnnonser.length + 15));
      setIsFetchingMore(false);
    }
  }, [isFetchingMore, displayedAnnonser]);

  const renderPost = useCallback(({ item }) => (
    <TouchableOpacity
      style={[styles.postCard, item.type === 'consumer' ? styles.consumerCard : styles.helperCard]}
      onPress={() => { /* handle contact action */ }}
    >
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <View style={styles.postContent}>
        <View style={styles.postHeader}>
          {item.type === 'consumer' ? (
            <FontAwesome5 name="hand-paper" size={24} color={colors.accent} />
          ) : (
            <FontAwesome5 name="briefcase" size={24} color={colors.accent} />
          )}
          <Text style={styles.postTitle}>{item.type === 'consumer' ? 'Behöver hjälp' : 'Erbjuder hjälp'}</Text>
        </View>
        <Text style={styles.postDescription}>{item.description}</Text>
        <Text style={styles.postPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  ), [colors, styles]);

  const filterPosts = useCallback((type) => {
    if (type === 'all') {
      return displayedAnnonser;
    }
    return displayedAnnonser.filter(item => item.type === type);
  }, [displayedAnnonser]);

  return (
    <>
      <CustomNavBar title="Home" />
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.segmentedControl}>
          <SegmentButton
            label="Allt"
            isActive={selectedTab === 'all'}
            onPress={() => setSelectedTab('all')}
            styles={styles}
          />
          <SegmentButton
            label="Requests"
            isActive={selectedTab === 'consumer'}
            onPress={() => setSelectedTab('consumer')}
            styles={styles}
          />
          <SegmentButton
            label="Services"
            isActive={selectedTab === 'helper'}
            onPress={() => setSelectedTab('helper')}
            styles={styles}
          />
        </View>
        <FlatList
          data={filterPosts(selectedTab)}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.postsContainer}
          ListFooterComponent={
            <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate('AnnonserScreen')}>
              <Text style={colors.text}>Visa allt</Text>
            </TouchableOpacity>
          }
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    </>
  );
};

const SegmentButton = ({ label, isActive, onPress, styles }) => (
  <TouchableOpacity onPress={onPress} style={[styles.segmentButton, isActive && styles.activeSegment]}>
    <Text style={[styles.segmentButtonText, isActive && styles.activeSegmentText]}>{label}</Text>
  </TouchableOpacity>
);

const getStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  segmentedControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: colors.card,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeSegment: {
    backgroundColor: colors.accent,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  segmentButtonText: {
    fontSize: 16,
    color: colors.text,
  },
  activeSegmentText: {
    color: colors.background,
  },
  postsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  postCard: {
    width: '47%',
    margin: '1.5%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.card,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  separatorStyle: {
    height: 1,
    backgroundColor: colors.accent,
    marginVertical: 16,
  },
  consumerCard: {
    borderColor: colors.accent,
    borderWidth: 2,
  },
  helperCard: {
    borderColor: colors.accent,
    borderWidth: 2,
  },
  postImage: {
    width: '100%',
    height: 100,
  },
  postContent: {
    padding: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginLeft: 10,
  },
  postDescription: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 5,
  },
  postPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
  viewAllButton: {
    backgroundColor: colors.accent,
    paddingVertical: 20,
    paddingHorizontal: 140,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default HomeScreen;
