import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, Alert, Image, TouchableOpacity,Platform } from 'react-native';
import Header from '@/components/HomeScreen/header';
import Footer from '@/components/Footer';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Medicine = () => {
  const [medicineName, setMedicineName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [prescription, setPrescription] = useState('');

  const handleOrderSubmit = () => {
    if (!medicineName || !quantity || !prescription) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    Alert.alert('Order Submitted', `You have ordered ${quantity} of ${medicineName}`);
    setMedicineName('');
    setQuantity('');
    setPrescription('');
  };

  const handlePrescriptionUpload = () => {
    setPrescription('Prescription uploaded');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Get Your Medicines Delivered</ThemedText>
        <ThemedText style={styles.content}>We understand the importance of timely access to medications. Our seamless online service allows you to order your prescribed medicines with ease, just upload your prescription, and we’ll take care of the rest.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.banner}>
        <ThemedText style={styles.title}>How it Works</ThemedText>
        <ThemedView style={styles.howItWorksContainer}>
          <ThemedView style={styles.column}>
            <ThemedText style={styles.subtitle}>1.Upload your doctor's prescription</ThemedText>
            <ThemedText style={styles.content}>Submit a clear image of your valid prescription 
              through our secure platform.
              </ThemedText>
              <Fontisto name="prescription" size={44} color="black" 
              style={{alignSelf:'center',padding:4,margin:4}}
              
              />
              
           </ThemedView>
          <ThemedView style={styles.column}>
            <ThemedText style={styles.subtitle}>2. Enter the quantity you need</ThemedText>
            <ThemedText style={styles.content}>
            Specify the required quantity as per your prescription.
            </ThemedText>
            <MaterialIcons name="production-quantity-limits" size={44} color="black" 
            style={{alignSelf:'center',padding:30,margin:4}}
            />
          </ThemedView>
          <ThemedView style={styles.column}>
            <ThemedText style={styles.subtitle}>3. Verification Process</ThemedText>
            <ThemedText style={styles.content}>Our certified pharmacists will review your prescription for compliance and accuracy.</ThemedText>
            <MaterialIcons name="verified" size={44} color="black" 
            style={{alignSelf:'center',padding:4,margin:4}}
            />
          </ThemedView>
          <ThemedView style={styles.column}>
            <ThemedText style={styles.subtitle}>4. Swift Delivery</ThemedText>
            <ThemedText style={styles.content}>Once verified, your medications will be dispatched and delivered promptly.</ThemedText>
            <MaterialCommunityIcons name="truck-delivery" size={44} color="black"
            style={{alignSelf:'center',padding:4,margin:4}}
             />
          </ThemedView>
        </ThemedView>
        
        
      </ThemedView>
      <ThemedView>
        <TouchableOpacity style={styles.btn}>
          <ThemedText style={styles.btntext} > Upload Your Prescription</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <ThemedText style={{textAlign:'center',padding:4,}}>OR</ThemedText>
     
       
      <ThemedView style={styles.formContainer}>
        <ThemedText style={styles.label}>Medicine Name:</ThemedText>
        <TextInput
          style={styles.input}
          value={medicineName}
          onChangeText={setMedicineName}
          placeholder="Enter medicine name"
        />

        <ThemedText style={styles.label}>Quantity:</ThemedText>
        <TextInput
          style={styles.input}
          value={quantity}
          onChangeText={setQuantity}
          placeholder="Enter quantity"
          keyboardType="numeric"
        />

       

<TouchableOpacity style={styles.btn}>
          <ThemedText style={styles.btntext} > Submit</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginBottom: 20,
    padding: 10,
    width: '80%',
    backgroundColor: 'lightblue',
    borderRadius: 20,
    alignSelf: 'center',
    margin: 10,
  },
  title: {
    fontSize: 20,
    color: '#00796b',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    fontWeight:'bold',
    margin: 5,
    textAlign: 'center',
    padding: 4,
    
  },
  banner: {
    width: Platform.OS === 'ios' || Platform.OS === 'android' ? '100%' : '100%',
    height: 'auto',
    alignSelf: 'center',
    backgroundColor:'#f9f9f9',
    borderRadius: 20,
    padding: 10,
  },
  howItWorksContainer: {
    flexDirection: 'row',
     margin:2,
    textAlign:'center',
  },
  column: {
   flex:1,
   backgroundColor:'#f9f9f9',
  
    padding:2,
    width:'12%',

  },
  content: {
    fontSize: 12, 
    color: '#555',
    
    margin:5,
    textAlign:'center',
    padding:4,
    
  },
  formContainer: {
    padding: 20,
    width: '70%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  btn:{
    width: Platform.OS === 'ios' || Platform.OS === 'android' ? '100%' : '40%',
          height: 40,
          backgroundColor: '#014E78',
          borderRadius: 20,
          marginTop: 50,
          margin:9,
          justifyContent:'center',
          alignItems:'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          alignSelf:'center',
  },

  btntext:{
    fontSize: 15,
        color:'white',
        textAlign: 'center',
  }
});

export default Medicine;
