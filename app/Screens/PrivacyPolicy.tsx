
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const PrivacyPolicy = () => {
  return (
    <ThemedView style={styles.sectionContainer}>
      <ScrollView style={styles.container}>
        <ThemedText style={styles.header}>Privacy Policy </ThemedText>
      

        <ThemedText style={styles.subHeader}>1. Information We Collect</ThemedText>

        <ThemedText style={styles.subSection}>1.1. Information You Provide</ThemedText>
        <ThemedText style={styles.content}>- Account Information: When you create an account, we may collect your name, email address, phone number, and password.</ThemedText>
        <ThemedText style={styles.content}>- Service Requests: Details about the services you request, such as descriptions, locations, and preferences.</ThemedText>
        <ThemedText style={styles.content}>- Payment Information: Billing details, credit/debit card information, and transaction data.</ThemedText>

        <ThemedText style={styles.subSection}>1.2. Information Collected Automatically</ThemedText>
        <ThemedText style={styles.content}>- Device Information: Device model, operating system, unique device identifiers, and mobile network information.</ThemedText>
        <ThemedText style={styles.content}>- Location Data: Your real-time location if you enable location services.</ThemedText>
        <ThemedText style={styles.content}>- Usage Data: Information about your interactions with the app, including features used, pages visited, and app performance data.</ThemedText>

        <ThemedText style={styles.subSection}>1.3. Information from Third Parties</ThemedText>
        <ThemedText style={styles.content}>We may collect information from third-party service providers, including payment processors and customer support platforms.</ThemedText>

        <ThemedText style={styles.subHeader}>2. How We Use Your Information</ThemedText>
        <ThemedText style={styles.content}>- To provide and manage services through the CareConnect app.</ThemedText>
        <ThemedText style={styles.content}>- To process payments and fulfill transactions.</ThemedText>
        <ThemedText style={styles.content}>- To improve app functionality and user experience.</ThemedText>
        <ThemedText style={styles.content}>- To send you updates, service-related notifications, and promotional messages (with your consent).</ThemedText>
        <ThemedText style={styles.content}>- To comply with legal obligations and resolve disputes.</ThemedText>

        <ThemedText style={styles.subHeader}>3. Sharing Your Information</ThemedText>
        <ThemedText style={styles.content}>We do not sell your personal information. We may share your information with:</ThemedText>
        <ThemedText style={styles.content}>- Service Providers: Professionals fulfilling your service requests.</ThemedText>
        <ThemedText style={styles.content}>- Third-Party Vendors: For payment processing, customer support, or analytics.</ThemedText>
        <ThemedText style={styles.content}>- Legal Authorities: When required by law or to protect our rights and interests.</ThemedText>

        <ThemedText style={styles.subHeader}>4. Data Security</ThemedText>
        <ThemedText style={styles.content}>We implement industry-standard security measures to protect your information. However, no system is entirely secure, and we cannot guarantee the absolute security of your data.</ThemedText>

        <ThemedText style={styles.subHeader}>5. Your Choices and Rights</ThemedText>
        <ThemedText style={styles.content}>- Access and Update: You can view and edit your personal information in the app settings.</ThemedText>
        <ThemedText style={styles.content}>- Opt-Out: Choose not to receive promotional communications through the app settings.</ThemedText>
        <ThemedText style={styles.content}>- Delete Account: Request account deletion by contacting our support team at [Insert Email Address].</ThemedText>

        <ThemedText style={styles.subHeader}>6. Children’s Privacy</ThemedText>
        <ThemedText style={styles.content}>CareConnect is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us.</ThemedText>

        <ThemedText style={styles.subHeader}>7. Changes to This Policy</ThemedText>
        <ThemedText style={styles.content}>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. We encourage you to review the policy periodically.</ThemedText>


        <ThemedText style={styles.footer}>Thank you for trusting CareConnect to manage your home service needs responsibly and securely.</ThemedText>
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#555',
  },
  Section:{
    fontSize:10,
    color:'#555',


  },
  subSection: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 5,
    color: '#666',
  },
  content: {
    fontSize: 14,
    lineHeight: 22,
    color: '#444',
    marginBottom: 10,
  },
  footer: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 20,
    textAlign: 'center',
    color: '#777',
  },
});

export default PrivacyPolicy;