import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For retrieving data

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      const { email: savedEmail, password: savedPassword } = JSON.parse(storedUser);
      if (email === savedEmail && password === savedPassword) {
        navigation.navigate('dashboard'); // Redirect to dashboard on successful login
      } else {
        alert('Incorrect email or password');
      }
    } else {
      alert('No user found. Please sign up.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text onPress={() => navigation.navigate('signup')} style={styles.signupLink}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#9b59b6', marginBottom: 30 },
  input: { width: '100%', height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 15, marginBottom: 20, fontSize: 16 },
  loginButton: { backgroundColor: '#9b59b6', width: '100%', paddingVertical: 15, borderRadius: 5, alignItems: 'center', marginBottom: 20 },
  loginText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  signupText: { fontSize: 14, color: '#333' },
  signupLink: { color: '#9b59b6', fontWeight: 'bold' },
});

export default Login;
