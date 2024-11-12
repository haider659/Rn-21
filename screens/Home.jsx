import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      
      <Image
        source={require('../images/feature.jpeg')} // Replace with your local image path
        style={styles.image}
      />

      {/* Restaurant Info */}
      <View style={styles.infoContainer}>
        <View style={styles.header}>
          <Text style={styles.restaurantName}>Kinka Izakaya</Text>
          <Icon name="heart" type="font-awesome" color="#fff" />
        </View>
        <Text style={styles.address}>2972 Westheimer Rd, Santa Ana</Text>
        <View style={styles.deliveryFees}>
          <Text style={styles.fee}>Delivery fee</Text>
          <Text style={styles.fee}>$3.99</Text>
          <Text style={styles.fee}>$3.99</Text>
          <Text style={styles.fee}>$3.99</Text>
        </View>
      </View>

      
      <View style={styles.menuOptions}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Take Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Group Order</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.tabs}>
        <Text style={styles.tab}>Featured items</Text>
        <Text style={styles.tab}>Appetizers</Text>
        <Text style={styles.tab}>Sushi</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Featured Items</Text>
      <View style={styles.item}>
        <Image
          source={require('../images/feature.jpeg')} 
          style={styles.itemImage}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemTitle}>Udon Miso</Text>
          <Text style={styles.itemDescription}>Thick handmade udon noodles in a rich miso broth</Text>
          <Text style={styles.itemPrice}>$16.00</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" type="font-awesome" color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <Image
          source={require('../images/feature.jpeg')} 
          style={styles.itemImage}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemTitle}>Udon Miso</Text>
          <Text style={styles.itemDescription}>Thick handmade udon noodles in a rich miso broth</Text>
          <Text style={styles.itemPrice}>$13.00</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" type="font-awesome" color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <Image
          source={require('../images/feature.jpeg')} 
          style={styles.itemImage}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemTitle}>Udon Miso</Text>
          <Text style={styles.itemDescription}>Thick handmade udon noodles in a rich miso broth</Text>
          <Text style={styles.itemPrice}>$14.00</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" type="font-awesome" color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <Image
          source={require('../images/feature.jpeg')} 
          style={styles.itemImage}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemTitle}>Udon Miso</Text>
          <Text style={styles.itemDescription}>Thick handmade udon noodles in a rich miso broth</Text>
          <Text style={styles.itemPrice}>$19.00</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" type="font-awesome" color="#fff" />
        </TouchableOpacity>
      </View>
      
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14163C',
  },
  image: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  infoContainer: {
    padding: 16,
    backgroundColor: '#1C1E4E',
    borderRadius: 15,
    marginTop: -30,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  address: {
    color: '#ccc',
    fontSize: 14,
    marginVertical: 5,
  },
  deliveryFees: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  fee: {
    color: '#fff',
    fontSize: 14,
  },
  menuOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  menuButton: {
    backgroundColor: '#2D2F70',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tab: {
    color: '#fff',
    fontSize: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#1C1E4E',
    marginHorizontal: 16,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    paddingLeft: 10,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: '#ccc',
    fontSize: 12,
    marginVertical: 4,
  },
  itemPrice: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#2D2F70',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
