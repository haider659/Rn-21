import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For storing data in local storage

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (name && email && password) {
      const userData = { name, email, password };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      navigation.navigate('login'); 
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        {/* <Icon name="arrow" size={24} color="black" /> */}
      </TouchableOpacity>
      {/* <Icon name="arrow-bold-right" size={100} color="#9b59b6" style={styles.icon} /> */}
      <Text style={styles.title}>Create Account</Text>
      <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text onPress={() => navigation.navigate('login')} style={styles.loginLink}>
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 20 },
  backButton: { position: 'absolute', top: 40, left: 20 },
  icon: { marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#9b59b6', marginBottom: 30 },
  input: { width: '100%', height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 15, marginBottom: 20, fontSize: 16 },
  signupButton: { backgroundColor: '#9b59b6', width: '100%', paddingVertical: 15, borderRadius: 5, alignItems: 'center', marginBottom: 20 },
  signupText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  loginText: { fontSize: 14, color: '#333' },
  loginLink: { color: '#9b59b6', fontWeight: 'bold' },
});

export default Signup;
