import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

import Dashboard from '../screens/Dashboard';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import OrderDetail from '../screens/About';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false, 
          tabBarIcon: () => <Icon name="home" size={30} />,
        }}
      />
      <Tab.Screen
        name="menu"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon3 name="menu" size={30}  />,
        }}
      />
      <Tab.Screen
        name="orderdetail"
        component={OrderDetail}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="shoppingcart" size={30} />,
        }}
      />
      
        <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon2 name="account" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
