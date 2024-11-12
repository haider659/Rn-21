import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";


const burgerItems = [
  { id: "1", name: "Cheeseburger", price: 5.99, image: require("../images/feature.jpeg") },
  { id: "2", name: "Double Burger", price: 7.99, image: require("../images/feature.jpeg") },
  { id: "3", name: "Vegan Burger", price: 6.99, image: require("../images/feature.jpeg") },
];

const BurgerMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Icon name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.heading}>Burgers Menu</Text>
      </View>

      <FlatList
        data={burgerItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.orderButton}
                onPress={() =>
                  navigation.navigate("orderdetail", { item }) // Passing item details to OrderDetail
                }
              >
                <Text style={styles.orderText}>Order Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.itemList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f023e",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    flex: 1, 
  },
  itemCard: {
    flexDirection: "row",
    backgroundColor: "#3e2269",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
    justifyContent: "center",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: "#1e1468",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  orderText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default BurgerMenu;
