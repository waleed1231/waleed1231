import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the Sign-Up button on the home screen and fill in the required details."
    },
    {
      question: "How do I reset my password?",
      answer: "Click on the Forgot Password link on the login page and follow the instructions to reset your password."
    },
    {
      question: "How do I book an appointment?",
      answer: "Navigate to the Appointments section, select your preferred date and time, and confirm the booking."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data privacy seriously and use advanced security measures to protect your information."
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.title}>Help Center</ThemedText>
      <ThemedText  style={styles.paragraph}>
        Welcome to the Help Center. Here you can find answers to common questions and learn how to use the app effectively.
      </ThemedText>

      {faqs.map((faq, index) => (
        <ThemedView key={index} style={styles.faqContainer}>
          <ThemedView style={styles.faqHeader}>
            
          </ThemedView>
          <ThemedText  style={styles.answer}>{faq.answer}</ThemedText>
        </ThemedView>
      ))}

      <ThemedText  style={styles.contactTitle}>Need More Help?</ThemedText>
      <ThemedText  style={styles.paragraph}>
        If you have further questions, feel free to reach out to our support team.
      </ThemedText>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} accessibilityLabel="Contact Support">
        <ThemedText  style={styles.buttonText}>Contact Support</ThemedText>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 16,
    
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#555',
  },
  faqContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#007bff',
  },
  answer: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8, // Decrease this value to move the button higher
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    
  },
});

export default HelpCenter;