import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function ProfileHeader() {
  return (
    <ThemedView style={styles.container}>
      <Image 
        source={require('@/assets/images/icon.png')}
        style={styles.profileImage} 
        accessibilityLabel="User profile image"
      />
      
      <ThemedView style={styles.textContainer}>
        <ThemedText style={styles.welcomeText}>Welcome to your profile!</ThemedText>
        <ThemedText style={styles.userName}>Waleed</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: 'purple', 
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center', 
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    
  },
  profileImage: {
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 16, 
    backgroundColor: '#ccc',
  },
  textContainer: {
    backgroundColor: 'purple',
    flexDirection: 'column',
    justifyContent: 'center', 
    padding: 9,
  },
  welcomeText: {
    color: 'white',
    fontSize: 16,
  },
  userName: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
