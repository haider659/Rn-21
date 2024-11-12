import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (name && email && password) {
      const userData = { name, email, password };
      try {
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        setName('');
        setEmail('');
        setPassword('');
        navigation.navigate('Login');
      } catch (error) {
        alert('Failed to save user data. Please try again.');
      }
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>FOODIE</Text>
      <Text style={styles.subtitle}>Deliver Favourite Food</Text>
      <View style={styles.card}>
        <Text style={styles.title}>Signup</Text>
        <View style={styles.inputContainer}>
          <Icon name="person" size={20} color="#aaa" style={styles.inputIcon} />
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#aaa" style={styles.inputIcon} />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#aaa" style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f023e',
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    color: '#d3d3d3',
    fontSize: 16,
    marginBottom: 30,
  },
  card: {
    width: '90%',
    backgroundColor: '#2b0a4e',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#3e2269',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#fff',
  },
  signupButton: {
    backgroundColor: '#1e1468',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 20,
  },
  loginLink: {
    color: '#4d86e8',
    fontWeight: 'bold',
  },
});

export default Signup;
