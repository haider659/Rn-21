import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import BurgerMenu from '../screens/BurgerMenu';
import DessertMenu from '../screens/DessertMenu';
import MexicanMenu from '../screens/MexicanMenu';
import SushiMenu from '../screens/SushiMenu';
import OrderDetail from '../screens/About';
import TabNavigation from './TabNavigation';
import Account from '../screens/Account';
import FindLocation from '../screens/Location';

const Stack = createStackNavigator();

const StackNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Dashboard" component={TabNavigation} />
      <Stack.Screen name="BurgerMenu" component={BurgerMenu} />
      <Stack.Screen name="DessertMenu" component={DessertMenu} />
      <Stack.Screen name="MexicanMenu" component={MexicanMenu} />
      <Stack.Screen name="SushiMenu" component={SushiMenu} />
      <Stack.Screen name="orderdetail" component={OrderDetail} />
      <Stack.Screen name="location" component={FindLocation} />
      <Stack.Screen name="Account" component={Account} />

    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;
