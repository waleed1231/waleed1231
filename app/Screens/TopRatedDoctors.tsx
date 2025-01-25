import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Platform ,FlatList} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TopRatedDoctors() {
  const doctors = [
    { name: 'Dr. John Doe', profession: 'Cardiologist', rating: 4.5, image: 'https://example.com/john.jpg' },
    { name: 'Dr. Jane Doe', profession: 'Dermatologist', rating: 4.7, image: 'https://example.com/jane.jpg' },
    { name: 'Dr. John Smith', profession: 'Pediatrician', rating: 4.8, image: 'https://example.com/john_smith.jpg' },
    { name: 'Dr. Jane Smith', profession: 'Orthopedic Surgeon', rating: 4.6, image: 'https://example.com/jane_smith.jpg' },
  ];

  const renderDoctorItem = ({ item }: { item: { name: string; profession: string; rating: number; image: string } }) => (
    <View style={styles.doctorContainer}>
      <Image source={{ uri: item.image }} style={styles.profileImage} />
      <View style={styles.nameRatingContainer}>
        <ThemedText style={styles.doctorName}>{item.name}</ThemedText>
        <ThemedText style={styles.profession}>{item.profession}</ThemedText>
        <ThemedText style={styles.rating}>Rating: {item.rating}</ThemedText>
      </View>
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => alert(`Booking appointment with ${item.name}`)}
      >
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ThemedView style={styles.fullWidthContainer}>
      <ThemedText style={styles.title}>Top Rated Doctors</ThemedText>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.name} // Use a unique key
        renderItem={renderDoctorItem}
        numColumns={2} // Set to 2 columns
        contentContainerStyle={styles.listContainer}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  fullWidthContainer: {
    flex: 1,
    width: Platform.select({ web: '90%', default: '100%' }),
    padding: 10,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'left',
  },
  listContainer: {
    justifyContent: 'center',
  },
  doctorContainer: {
    width: '50%', 
    marginHorizontal: 5,
    justifyContent:'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    backgroundColor:'white',

  },
  nameRatingContainer: {
    alignItems: 'center',
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  profession: {
    color: 'gray',
    fontSize: 14,
  },
  rating: {
    color: 'goldenrod',
    fontSize: 14,
  },
  bookButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});