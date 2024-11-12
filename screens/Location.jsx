import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FindLocation = () => {
  const navigation = useNavigation();

  const handleSetLocation = () => {
    Alert.alert(
      "Order Status",
      "Order has been placed",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Dashboard"), 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Find Location</Text>

      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Find your location"
        />
      </View>

      
      <View style={styles.imagePlaceholder}>
        <Image source={require('../images/GoogleMap.webp')} style={styles.mapImage} />
      </View>

      
      <View style={styles.locationInfo}>
        <Text style={styles.locationText}>Your Location</Text>
        <Text style={styles.locationDetails}>Manchester, Kentucky 39495</Text>
      </View>

      
      <View style={styles.buttonContainer}>
        <Button title="Set Location" onPress={handleSetLocation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f023e',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 45,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    color: 'white',
    fontSize: 20,
  },
  imagePlaceholder: {
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  locationInfo: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  locationText: {
    color: 'black',
    fontSize: 18,
  },
  locationDetails: {
    color: 'black',
    fontSize: 16,
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default FindLocation;
