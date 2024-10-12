// import { StyleSheet } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
// import About from '../screens/About';
// import Contact from '../screens/Contact';
// import Icon from 'react-native-vector-icons/AntDesign'; // Import vector icons

// const Tab = createBottomTabNavigator();

// const TabNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarActiveTintColor: '#4CAF50', // Active icon color
//           tabBarInactiveTintColor: 'gray',  // Inactive icon color
//           tabBarShowLabel: false,           // Disable the labels, icons only
//           tabBarStyle: {
//             backgroundColor: '#fff',        // Tab bar background color
//             paddingBottom: 5,
//             height: 60,
//           },
//         }}
//       >
//         {/* Home Screen Tab */}
//         <Tab.Screen
//           name="home"
//           component={Home}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="home" size={size} color={color} />
//             ),
//           }}
//         />

//         {/* About Screen Tab */}
//         <Tab.Screen
//           name="about"
//           component={About}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="infocirlceo" size={size} color={color} />
//             ),
//           }}
//         />

//         {/* Contact Screen Tab */}
//         <Tab.Screen
//           name="Contact"
//           component={Contact}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="phone" size={size} color={color} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default TabNavigation;

// const styles = StyleSheet.create({});
