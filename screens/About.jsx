import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const OrderDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params; // Retrieve item data passed from DessertMenu
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const deliveryFee = 2.0; // Fixed delivery charge
  const itemPrice = parseFloat(item?.price) || 0; // Ensure price is a valid number
  const subtotal = itemPrice * quantity; // Subtotal based on quantity
  const totalPrice = subtotal + deliveryFee; // Total price with delivery charge

  // Handle back navigation
  const handleBack = () => {
    navigation.navigate('Dashboard'); // Navigate to the Dashboard screen
  };

  return (
    <ScrollView style={styles.container}>
      {/* Custom Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Order Detail</Text>
      </View>

      {/* Item Details */}
      <View style={styles.itemCard}>
        <Image source={item?.image} style={styles.itemImage} />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item?.name || "Item Name"}</Text>
          <Text style={styles.itemPrice}>${itemPrice.toFixed(2)}</Text>
          <Text style={styles.itemDescription}>With cheese sauce</Text>

          {/* Quantity control */}
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={handleDecrease} style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={handleIncrease} style={styles.quantityButton}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Summary Section */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Subtotal: ${subtotal.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Delivery: ${deliveryFee.toFixed(2)}</Text>
        <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('location')} // Fix: Use navigation.navigate
      >
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f023e",
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#1e1468",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    flex: 1,  // Ensures header text is centered
  },
  itemCard: {
    flexDirection: "row",
    backgroundColor: "#3e2269",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  itemPrice: {
    fontSize: 16,
    color: "#ddd",
  },
  itemDescription: {
    color: "#bbb",
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: "#1e1468",
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    color: "#fff",
    fontWeight: "bold",
  },
  quantity: {
    color: "#fff",
    fontSize: 18,
    marginHorizontal: 10,
  },
  summary: {
    backgroundColor: "#3e2269",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  summaryText: {
    color: "#ddd",
    fontSize: 16,
    marginBottom: 5,
  },
  totalText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#1e1468",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default OrderDetail;
