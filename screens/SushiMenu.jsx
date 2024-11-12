import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing icon for the back button

const SushiMenu = () => {
  const navigation = useNavigation();
  const [cart, setCart] = useState([]); // Cart state to store selected items

  const sushiDishes = [
    { id: '1', name: 'Salmon Sushi', price: 12.99, image: require('../images/Sushi.jpg') },
    { id: '2', name: 'Tuna Sushi', price: 14.99, image: require('../images/Sushi.jpg') },
    { id: '3', name: 'California Roll', price: 9.99, image: require('../images/Sushi.jpg') },
    { id: '4', name: 'Eel Sushi', price: 15.99, image: require('../images/Sushi.jpg') },
    { id: '5', name: 'Veggie Roll', price: 7.99, image: require('../images/Sushi.jpg') },
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
        <Text style={styles.headerText}>Sushi Menu</Text>
      </View>

      <FlatList
        data={sushiDishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dishCard}>
            <Image source={item.image} style={styles.dishImage} />
            <View style={styles.dishInfo}>
              <Text style={styles.dishName}>{item.name}</Text>
              <Text style={styles.dishPrice}>${item.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.orderButton}
                onPress={() => {
                 
                  addToCart(item);
                  navigation.navigate('orderdetail', { item, cart }); 
                }}
              >
                <Text style={styles.orderText}>Order Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.dishList}
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
  dishList: {
    paddingHorizontal: 15,
  },
  dishCard: {
    flexDirection: 'row',
    backgroundColor: '#3e2269', 
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  dishImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  dishInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 5,
  },
  dishPrice: {
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

export default SushiMenu;
