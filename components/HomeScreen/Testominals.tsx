import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

const testimonialsData = [
  {
    id: '1',
    name: 'John Doe',
    testimonial: 'This service is fantastic! I had a great experience.',
  },
  {
    id: '2',
    name: 'Jane Smith',
    testimonial: 'Highly recommend! The professionals were very helpful.',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    testimonial: 'A seamless experience from start to finish.',
  },
  {
    id: '4',
    name: 'Bob Brown',
    testimonial: 'I will definitely use this service again. Excellent support!',
  },
];

export default function Testimonials() {
  const renderItem = ({ item }: { item: { id: string; name: string; testimonial: string } }) => (
    <View style={styles.testimonialContainer}>
      <ThemedText style={styles.testimonialText}>"{item.testimonial}"</ThemedText>
      <ThemedText style={styles.authorText}>- {item.name}</ThemedText>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>What Our Customers Say</ThemedText>
      <FlatList
        data={testimonialsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex:1,
    borderRadius: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  testimonialContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  testimonialText: {
    fontSize: 16,
    color: '#333',
    fontStyle: 'italic',
  },
  authorText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'right',
    marginTop: 5,
  },
});