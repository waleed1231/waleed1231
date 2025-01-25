import { View, StyleSheet, Image, Platform } from 'react-native';
import React from 'react';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

export default function WhyChooseUs() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.contentContainer}>
        <ThemedView style={styles.textContainer}>
          <ThemedText style={styles.title}>Why Choose Us</ThemedText>

          <ThemedView style={styles.bulletPointContainer}>
            <ThemedText style={styles.bulletPointTitle}>1. Trusted Professionals</ThemedText>
          </ThemedView>

          <ThemedView style={styles.bulletPointContainer}>
            <ThemedText style={styles.bulletPointTitle}>2. Wide Range of Services</ThemedText>
          </ThemedView>

          <ThemedView style={styles.bulletPointContainer}>
            <ThemedText style={styles.bulletPointTitle}>3. Secure Payments</ThemedText>
          </ThemedView>

          <ThemedView style={styles.bulletPointContainer}>
            <ThemedText style={styles.bulletPointTitle}>4. Customer Support</ThemedText>
          </ThemedView>
        </ThemedView>

        <Image
          source={require('@/assets/images/why.png')} 
          style={styles.image}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    width: Platform.select({ web: '90%', default: '90%' }),
    height: Platform.select({ web: '90%', default: '70%' }),
    backgroundColor: '#FFF6E9',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 20, 
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
    height: '100%', // Use full height of the container
    backgroundColor: '#FFF6E9',
  },
  textContainer: {
    flex: 1, // Allow text container to take available space
    marginRight: 10, // Add margin to separate text from image
    backgroundColor: '#FFF6E9',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
  },
  bulletPointContainer: {
    marginBottom: 15,
    backgroundColor: '#FFF6E9',
  },
  bulletPointTitle: {
    fontWeight: 'bold',
    fontSize: 18, 
    color: '#014E78',
  },
  bulletPointDescription: {
    fontSize: 16, 
    color: '#555',
  },
  image: {
    width: Platform.select({ web: '85%', default: '50%' }), // Adjust width for mobile and web
    height: Platform.select({ web: '100%', default: '100%' }), // Fixed height for mobile
    margin:4,
    resizeMode: 'contain',
  },
});