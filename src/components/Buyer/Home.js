import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CustomNavBar from '../common/NavBar';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import globalStyles from '../../styles/global';

const dummyData = Array.from({ length: 6 }, (v, k) => ({
  id: k.toString(),
  type: k % 2 === 0 ? 'consumer' : 'helper',
  title: k % 2 === 0 ? 'Behöver flytthjälp' : 'Flytthjälp tillgänglig',
  description: k % 2 === 0 ? 'Jag behöver hjälp med att flytta möbler, pris: 500kr' : 'Jag erbjuder professionell flytthjälp med flera års erfarenhet.',
  price: k % 2 === 0 ? '500 kr' : '400 kr',
  image: k % 2 === 0 ? 'https://cdn.plick.es/item_image/pxd6nj1ZQ3VmMBYOldAJaYP7yvWLNAoP2DebRKwz/w1000_q80.webp' : 'https://via.placeholder.com/220x120?text=Flytthjälp+erbjuds',
}));

const categories = [
  { name: 'Städning', icon: 'home-outline' },
  { name: 'Flytt', icon: 'car-outline' },
  { name: 'Hantverkare', icon: 'hammer-outline' },
  { name: 'Trädgård', icon: 'leaf-outline' },
  { name: 'IT-hjälp', icon: 'desktop-outline' },
  { name: 'Transport', icon: 'bicycle-outline' },
];

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const [selectedTab, setSelectedTab] = useState('all');
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [displayedAnnonser, setDisplayedAnnonser] = useState(dummyData.slice(0, 7));

  const handleLoadMore = useCallback(() => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      setDisplayedAnnonser(dummyData.slice(0, displayedAnnonser.length + 15));
      setIsFetchingMore(false);
    }
  }, [isFetchingMore, displayedAnnonser]);

  const renderPost = useCallback(({ item }) => (
    <TouchableOpacity
      style={[
        styles.postCard,
        item.type === 'consumer' ? styles.consumerCard : styles.helperCard,
      ]}
      onPress={() => {
        /* handle contact action */
      }}
    >
      <View style={styles.postImageContainer}>
        <Image source={{ uri: item.image }} style={styles.postImage} />
        <View
          style={[
            styles.overlay,
            item.type === 'consumer' ? styles.consumerOverlay : styles.helperOverlay,
          ]}
        >
          <Text style={styles.overlayText}>
            {item.type === 'consumer' ? '' : 'REKLAM'}
          </Text>
        </View>
      </View>
      <View style={styles.postContent}>
        <Text style={styles.postTitle}>{item.title}</Text>

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
      <SafeAreaView style={[styles.container, { backgroundColor: colors.secondary }]}>
      <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero Banner */}
          {/* <View style={styles.heroBanner}>
            <Text style={styles.heroText}>Welcome to QUIK</Text>
            <Text style={styles.heroSubText}>Find help or offer services quickly and easily</Text>
          </View> */}

          {/* Category Icons */}
<View style={styles.categoriesContainer}>
  <Text style={globalStyles.logo}>Populära Kategorier</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesIcons}>
    <TouchableOpacity style={styles.categoryButton}>
      <Ionicons name="home-outline" size={30} color={colors.primary} />
      <Text style={styles.categoryText}>Hem   tjänster</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryButton}>
      <Ionicons name="person-outline" size={30} color={colors.primary} />
      <Text style={styles.categoryText}>Personliga Tjänster</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryButton}>
      <Ionicons name="construct-outline" size={30} color={colors.primary} />
      <Text style={styles.categoryText}>Tekniska Tjänster</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryButton}>
      <Ionicons name="calendar-outline" size={30} color={colors.primary} />
      <Text style={styles.categoryText}>Event Tjänster</Text>
    </TouchableOpacity>
  </ScrollView>
</View>
<View style={globalStyles.divider}/>


          {/* Posts */}
          <View style={styles.posts}>
            <Text style={globalStyles.logo}>Utvalda annonser</Text>
            <TouchableOpacity>
             <Ionicons name="information-circle-outline" size={25} color={colors.accent} />
            </TouchableOpacity>
           </View>
 {/* Posts */}
 <FlatList
    data={filterPosts(selectedTab)}
    renderItem={renderPost}
    keyExtractor={(item) => item.id}
    numColumns={2}
    contentContainerStyle={styles.postsContainer}
    onEndReached={handleLoadMore}
    onEndReachedThreshold={0.5}
  />
  
  {/* Footer */}
  <View style={styles.footer}>
    <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate('Notifications')}>
      <Text style={{ color: colors.text }}>Visa allt</Text>
    </TouchableOpacity>
  </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


const getStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 20,
  },
  heroBanner: {
    padding: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 20,
  },
  heroText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
  heroSubText: {
    fontSize: 18,
    color: colors.text,
    textAlign: 'center',
    marginTop: 5,
  },
  categoriesContainer: {
    padding: 15,
    backgroundColor: colors.secondary,
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  categoriesIcons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  categoryButton: {
    alignItems: 'center',
    marginHorizontal: 15,
    width: 90, // Ensures enough space for text wrapping
  },
  categoryText: {
    marginTop: 5,
    color: colors.text,
    fontSize: 14,
    textAlign: 'center', // Centers the text
    flexWrap: 'wrap',
  },
  posts: {
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  postsContainer: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
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
  postImageContainer: {
    position: 'relative',
  },
  postImage: {
    width: '100%',
    height: 150,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
    borderBottomLeftRadius: 10,
  },
  consumerOverlay: {

  },
  helperOverlay: {
    backgroundColor: 'rgba(0, 255, 0, 0.7)',
  },
  overlayText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  postContent: {
    padding: 10,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
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
  },
  footer: {
    padding: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    width: '100%',
    alignItems: 'center',
  },
  viewAllButton: {
    backgroundColor: colors.accent,
    paddingVertical: 20,
    paddingHorizontal: 140,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});


export default HomeScreen;
