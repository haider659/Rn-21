import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Dashboard from '../screens/Dashboard';


const StackNavigation = () => {
    const Stack = createStackNavigator();  // Capitalize 'Stack' for better clarity
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="dashboard" component={Dashboard} />  
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({}); // Empty styles object is fine unless you need specific styling
