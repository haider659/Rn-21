import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DessertMenu = () => {
  const navigation = useNavigation();
  const [cart, setCart] = useState([]); 

  const desserts = [
    { id: '1', name: 'Chocolate Cake', price: 5.99, image: require('../images/dessert.jpg') },
    { id: '2', name: 'Ice Cream Sundae', price: 4.99, image: require('../images/dessert.jpg') },
    { id: '3', name: 'Cheesecake', price: 6.99, image: require('../images/dessert.jpg') },
    { id: '4', name: 'Donuts', price: 2.99, image: require('../images/dessert.jpg') },
    { id: '5', name: 'Apple Pie', price: 3.99, image: require('../images/dessert.jpg') },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log(`${item.name} added to cart`);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Dessert Menu</Text>
      </View>

      <FlatList
        data={desserts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dessertCard}>
            <Image source={item.image} style={styles.dessertImage} />
            <View style={styles.dessertInfo}>
              <Text style={styles.dessertName}>{item.name}</Text>
              <Text style={styles.dessertPrice}>${item.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.orderButton}
                onPress={() => {
                
                  addToCart(item);
                  navigation.navigate('orderdetail', { item, cart }); // Pass cart along with the item
                }}
              >
                <Text style={styles.orderText}>Order Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.dessertList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f023e', 
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  dessertList: {
    paddingHorizontal: 15,
  },
  dessertCard: {
    flexDirection: 'row',
    backgroundColor: '#3e2269', 
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  dessertImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  dessertInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  dessertName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  dessertPrice: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: '#1e1468',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  orderText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DessertMenu;
