import React from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'false');
    navigation.navigate('Login'); 
  };

  const categories = [
    { id: '1', name: 'Burgers', icon: '🍔' },
    { id: '2', name: 'Dessert', icon: '🍫' },
    { id: '3', name: 'Mexican', icon: '🌮' },
    { id: '4', name: 'Sushi', icon: '🍣' },
  ];

  const banners = [
    { id: '1', text: '30% OFF', description: 'Discover discounts in your favorite local restaurants', image: require('../images/feature.jpeg') },
    { id: '2', text: '20% OFF', description: 'Exclusive deals on desserts', image: require('../images/feature.jpeg') },
  ];

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Text style={styles.deliveryText}>Delivery</Text>
        <Text style={styles.locationText}>Maplewood Suites</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
          <Icon name="search" size={24} color="#fff" style={styles.icon} />
        </View>
      </View>

    
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#aaa" />
        <TextInput placeholder="Your order?" style={styles.searchInput} placeholderTextColor="#aaa" />
        <Icon name="qr-code-scanner" size={24} color="#aaa" />
      </View>

      <ScrollView>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => {
                
                switch (item.name) {
                  case 'Burgers':
                    navigation.navigate('BurgerMenu');
                    break;
                  case 'Dessert':
                    navigation.navigate('DessertMenu');
                    break;
                  case 'Mexican':
                    navigation.navigate('MexicanMenu');
                    break;
                  case 'Sushi':
                    navigation.navigate('SushiMenu');
                    break;
                  default:
                    console.log('Category not found');
                    break;
                }
              }}
            >
              <Text style={styles.categoryIcon}>{item.icon}</Text>
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />

        
        <FlatList
          data={banners}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bannerCard}>
              <Image source={item.image} style={styles.bannerImage} />
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerText}>{item.text}</Text>
                <Text style={styles.bannerDescription}>{item.description}</Text>
              </View>
              <TouchableOpacity style={styles.orderNowButton}>
                <Text style={styles.orderNowText}>Order Now</Text>
              </TouchableOpacity>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={styles.bannerList}
        />

        {/* Fastest Near You Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fastest near you</Text>
        </View>
        <View style={styles.fastestNearYou}>
          <Image source={require('../images/feature.jpeg')} style={styles.nearbyImage} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f023e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  deliveryText: {
    color: '#aaa',
    fontSize: 16,
  },
  locationText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    marginRight: 10,
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 10,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#3e2269',
    marginHorizontal: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    color: '#fff',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#4d86e8',
    fontWeight: 'bold',
  },
  categoryCard: {
    backgroundColor: '#3e2269',
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryText: {
    color: '#fff',
    marginTop: 5,
  },
  bannerList: {
    paddingVertical: 10,
  },
  bannerCard: {
    width: 300,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#2b0a4e',
    alignItems: 'center',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  bannerTextContainer: {
    position: 'absolute',
    top: 10,
    left: 15,
    right: 15,
    alignItems: 'center',
  },
  bannerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerDescription: {
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  orderNowButton: {
    backgroundColor: '#1e1468',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  orderNowText: {
    color: '#fff',
  },
  fastestNearYou: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  nearbyImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});

export default Dashboard;
