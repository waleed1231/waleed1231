import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import Header from '@/components/HomeScreen/header';
import Footer from '@/components/Footer';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Add your API endpoint or email sending logic here
    console.log('Form submitted:', name, email, message);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header/>
      <ThemedView style={styles.header}>
        
        <ThemedText style={styles.title}>Get in Touch</ThemedText>
        <ThemedText style={styles.subtitle}>We'd love to hear from you!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.form}>
        <ThemedText style={styles.label}>Name:</ThemedText>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Your name"
        />

        <ThemedText style={styles.label}>Email:</ThemedText>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Your email"
          keyboardType="email-address"
        />

        <ThemedText style={styles.label}>Message:</ThemedText>
        <TextInput
          style={styles.textArea}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Your message"
          multiline
          numberOfLines={5}
        />
           
           <TouchableOpacity  style={styles.button} >
            <ThemedText style={styles.buttonText} onPress={handleSubmit}>
               Send Messege
            </ThemedText>
           </TouchableOpacity>

        
      </ThemedView>

      <ThemedView style={styles.contactInfo}>
        <ThemedText style={styles.contactTitle}>Contact Information:</ThemedText>
        <ThemedText style={styles.contactText}>Email: support@careconnect.com</ThemedText>
        <ThemedText style={styles.contactText}>Phone: 555-555-5555</ThemedText>
        <ThemedText style={styles.contactText}>Address: 123 Main St, Anytown, USA</ThemedText>
      </ThemedView>

     
      <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
 
  header: {
    marginBottom: 10,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
   
    padding:10,
    margin:5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    
  },
  input: {
    height: 40,
    width:'90%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    alignItems:'center',
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width:'90%',
  },
  button: {
    width:'40%',
    height: 50,
    backgroundColor: '#014E78',
    borderRadius: 20,
    marginTop: 20,
    margin:9,
    justifyContent:'center',
    alignSelf:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  contactInfo: {
    marginBottom: 20,
    padding:10,
    margin:5,
    left:50,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    
    
  },
  contactText: {
    fontSize: 16,
    marginBottom: 5,
  
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  copyright: {
    fontSize: 14,
    color: '#888',
  },
});

export default ContactUs;