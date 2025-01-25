import { View, Text, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ContactUs from './Contactus';
const faqData = [
  {
    question: "What is CareConnect?",
    answer: "CareConnect is a web application designed to simplify the process of scheduling doctor appointments. It allows patients to find healthcare providers, book appointments, and manage their healthcare needs conveniently online."
  },
  {
    question: "How do I create an account?",
    answer: "To create an account, click on the 'Sign Up' button on the homepage, fill in the required information, and follow the prompts to complete your registration."
  },
  {
    question: "How do I book an appointment?",
    answer: "Once you are logged in, navigate to the 'Find a Doctor' section, select your preferred healthcare provider, choose a date and time, and confirm your appointment."
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer: "Yes, you can cancel or reschedule your appointment by going to the 'My Appointments' section, selecting the appointment you wish to modify, and following the prompts."
  },
  {
    question: "What should I do if I forget my password?",
    answer: "If you forget your password, click on the 'Forgot Password?' link on the login page, enter your email address, and follow the instructions sent to your email to reset your password."
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we take your privacy seriously. All personal information is encrypted and stored securely in compliance with healthcare regulations."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support team by visiting the 'Contact Us' section of the app or by emailing support@careconnect.com."
  }
];

export default function Faq() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ThemedText style={styles.title}>Frequently Asked Questions (FAQ)</ThemedText>
      {faqData.map((item, index) => (
        <ThemedView key={index} style={styles.faqItem}>
          <ThemedText style={styles.question}>{item.question}</ThemedText>
          <ThemedText style={styles.answer}>{item.answer}</ThemedText>
          
                 
        </ThemedView>
        
        
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
  },
  answer: {
    fontSize: 16,
    marginTop: 5,
  },
});