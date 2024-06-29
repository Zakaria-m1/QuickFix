import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const services = [
  { id: '1', type: 'consumer', description: 'Flyttrensning', price: '300 kr', image: 'https://via.placeholder.com/100' },
  { id: '2', type: 'helper', description: 'Flytta säng', price: '400 kr', image: 'https://via.placeholder.com/100' },
  { id: '3', type: 'consumer', description: 'Inredningsdesign', price: '500 kr', image: 'https://via.placeholder.com/100' },
  { id: '4', type: 'helper', description: 'Montering av möbler', price: '200 kr', image: 'https://via.placeholder.com/100' },
  { id: '5', type: 'consumer', description: 'Städhjälp', price: '150 kr', image: 'https://via.placeholder.com/100' },
  { id: '6', type: 'helper', description: 'Rengöring av fönster', price: '250 kr', image: 'https://via.placeholder.com/100' },
];


const PAGE_SIZE = 20; // Number of items to load per page

const AnnonserScreen = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredServices, setFilteredServices] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [selectedTab, setSelectedTab] = useState('all');

  const fetchServices = useCallback(async () => {
    setIsLoading(true);
    // Simulate an API call
    const fetchedServices = services.slice(0, PAGE_SIZE * page);
    setFilteredServices(fetchedServices);
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleLoadMore = () => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      setPage(prevPage => prevPage + 1);
      fetchServices().then(() => setIsFetchingMore(false));
    }
  };

  const renderService = ({ item }) => (
    <TouchableOpacity style={[styles.serviceCard, { backgroundColor: colors.card }]}>
      <Image source={{ uri: item.image }} style={styles.serviceImage} />
      <View style={styles.typeIcon}>
        {item.type === 'consumer' ? (
          <FontAwesome5 name="hand-paper" size={18} color={colors.primary} />
        ) : (
          <FontAwesome5 name="briefcase" size={18} color={colors.primary} />
        )}
      </View>
      <Text style={[styles.serviceDescription, { color: colors.text }]}>{item.description}</Text>
      <View style={styles.iconRow}>
        <Ionicons name="pricetag" size={20} color={colors.accent} />
        <Text style={[styles.servicePrice, { color: colors.text }]}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
  
  
  const filterServices = (type) => {
    if (type === 'all') {
      return filteredServices;
    }
    return filteredServices.filter(service => service.type === type);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color={colors.accent} />
        </TouchableOpacity>
        <TextInput
          style={[styles.searchBar, { backgroundColor: colors.card, color: colors.text }]}
          placeholder="Sök"
          placeholderTextColor={colors.gray}
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.mapButton}>
          <FontAwesome name="map-o" size={24} color={colors.accent} />
        </TouchableOpacity>
      </View>
      <View style={styles.segmentedControl}>
        <TouchableOpacity onPress={() => setSelectedTab('all')} style={[styles.segmentButton, selectedTab === 'all' && styles.activeSegment]}>
          <Text style={[styles.segmentButtonText, selectedTab === 'all' && styles.activeSegmentText]}>Allt</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('consumer')} style={[styles.segmentButton, selectedTab === 'consumer' && styles.activeSegment]}>
          <Text style={[styles.segmentButtonText, selectedTab === 'consumer' && styles.activeSegmentText]}>Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('helper')} style={[styles.segmentButton, selectedTab === 'helper' && styles.activeSegment]}>
          <Text style={[styles.segmentButtonText, selectedTab === 'helper' && styles.activeSegmentText]}>Services</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.text} />
      ) : (
        <FlatList
          data={filterServices(selectedTab).filter(service =>
            service.description.toLowerCase().includes(searchText.toLowerCase())
          )}
          renderItem={renderService}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.listContent}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isFetchingMore && <ActivityIndicator size="large" color={colors.text} />}
        />
      )}
    </SafeAreaView>
  );
};

const getStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.background,
  },
  filterButton: {
    padding: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  mapButton: {
    padding: 10,
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
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  listContent: {
    paddingBottom: 100,
  },
  serviceCard: {
    width: '45%',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    backgroundColor: colors.card,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    position: 'relative', // For icon positioning
    padding: 0, // Remove padding to avoid whitespace
  },
  serviceImage: {
    width: '100%', // Take full width
    height: 150, // Increased height for better visibility
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 0, // Remove bottom margin to align with other content
  },
  serviceDescription: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: colors.text,
    marginBottom: 5,
    marginTop: 10,
    paddingHorizontal: 10, // Add padding to the sides for better text alignment
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  servicePrice: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 5,
    marginBottom: 8,
  },
  typeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: colors.background,
    borderRadius: 15,
    padding: 5,
  },
});

export default AnnonserScreen;
