import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import auth from '@react-native-firebase/auth'; // Import Firebase Auth

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Use the useRouter hook

  const handleRegister = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Registration successful!');
      router.push('/Screens/LoginScreen'); // Navigate to LoginScreen after successful registration
    } catch (error) {
      setError((error as any).message); // Set error message if registration fails
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
      <Text style={styles.loginText} onPress={() => router.push('/Screens/LoginScreen')}>
        Already have an account? Login here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  loginText: {
    marginTop: 15,
    textAlign: 'center',
    color: 'blue',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});