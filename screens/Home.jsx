// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // Using Ionicons for the bag icon

// const Home = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//         <Icon name="arrow" size={24} color="black" />
//       </TouchableOpacity>

//       {/* Icon and Title */}
//       <Icon name="bag-outline" size={100} color="#9b59b6" style={styles.icon} />
//       <Text style={styles.title}>Create Account</Text>

//       {/* Input Fields */}
//       <TextInput placeholder="Name" style={styles.input} />
//       <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
//       <TextInput placeholder="Password" style={styles.input} secureTextEntry />

//       {/* Sign Up Button */}
//       <TouchableOpacity style={styles.signupButton}>
//         <Text style={styles.signupText}>SIGN UP</Text>
//       </TouchableOpacity>

//       {/* Login Option */}
//       <Text style={styles.loginText}>
//         Already have an account?{' '}
//         <Text onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
//           Login
//         </Text>
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#9b59b6',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     fontSize: 16,
//   },
//   signupButton: {
//     backgroundColor: '#9b59b6',
//     width: '100%',
//     paddingVertical: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   signupText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   loginLink: {
//     color: '#9b59b6',
//     fontWeight: 'bold',
//   },
// });

// export default Home;
