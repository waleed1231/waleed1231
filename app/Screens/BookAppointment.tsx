import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function BookAppointment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleBookAppointment = () => {
    // Handle the appointment booking logic here
    console.log('Appointment Booked:', { name, email, phone, date, time, notes });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Book an Appointment</ThemedText>

      <ThemedView style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
        />

        <ThemedText style={styles.label}>Email Address</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <ThemedText style={styles.label}>Phone Number</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <ThemedText  style={styles.label}>Date</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Select a date (MM/DD/YYYY)"
          value={date}
          onChangeText={setDate}
        />

        <ThemedText style={styles.label}>Time</ThemedText >
        <TextInput
          style={styles.input}
          placeholder="Select a time (HH:MM AM/PM)"
          value={time}
          onChangeText={setTime}
        />

        <ThemedText style={styles.label}>Additional Notes</ThemedText >
        <TextInput
          style={[styles.input, styles.notesInput]}
          placeholder="Any additional notes or comments"
          value={notes}
          onChangeText={setNotes}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleBookAppointment}>
          <ThemedText style={styles.buttonText}>Book Appointment</ThemedText >
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  notesInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});