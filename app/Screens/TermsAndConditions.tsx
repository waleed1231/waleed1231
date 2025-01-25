import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

const TermsAndConditions = () => {
  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.title}>Terms and Conditions</ThemedText>
      <ThemedText style={styles.paragraph}>
        Welcome to <Text style={styles.bold}>HealthCare</Text>! By using our application, you agree to the
        following terms and conditions. Please read them carefully. If you do not agree with any
        part of these terms, you must not use our application.
      </ThemedText>
      <ThemedView style={styles.line} />

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}><Icon name="check-circle" size={18} color="#007bff" /> 1. Acceptance of Terms</ThemedText>
        <ThemedText style={styles.paragraph}>
          By downloading, installing, or using our app, you agree to comply with these Terms and
          Conditions. These terms form a legally binding agreement between you and <ThemedText style={styles.bold}>HealthCare</ThemedText>.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}><Icon name="check-circle" size={18} color="#007bff" /> 2. Scope of Services</ThemedText>
        <ThemedText style={styles.paragraph}>
          Our application provides appointment scheduling, health tracking, or teleconsultation. While we strive to ensure accurate and timely services,
          the app is not a substitute for professional medical advice, diagnosis, or treatment.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}><Icon name="check-circle" size={18} color="#007bff" /> 3. User Responsibilities</ThemedText>
        <ThemedText style={styles.listItem}>• You must provide accurate and truthful information while creating an account and using the services.</ThemedText>
        <ThemedText style={styles.listItem}>• You agree not to misuse the app or its features for unlawful or prohibited activities.</ThemedText>
        <ThemedText style={styles.listItem}>• You are responsible for maintaining the confidentiality of your login credentials.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}><Icon name="check-circle" size={18} color="#007bff" /> 4. Medical Disclaimer</ThemedText>
        <ThemedText style={styles.listItem}>• The information provided on the app is for general informational purposes only.</ThemedText>
        <ThemedText style={styles.listItem}>• Always consult a qualified healthcare provider for medical advice and treatment.</ThemedText>
        <ThemedText style={styles.listItem}>• We do not guarantee the accuracy, completeness, or reliability of any medical information provided through the app.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}><Icon name="check-circle" size={18} color="#007bff" /> 5. Payment and Subscription</ThemedText>
        <ThemedText style={styles.listItem}>• Some services may require payment or subscription. Details of pricing and billing will be provided during the purchase process.</ThemedText>
        <ThemedText style={styles.listItem}>• Payments are non-refundable except as required by applicable laws.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}><Icon name="check-circle" size={18} color="#007bff" /> 6. Data Privacy</ThemedText>
        <ThemedText style={styles.listItem}>• We value your privacy and are committed to protecting your personal data. Please refer to our Privacy Policy for details on data collection, use, and security.</ThemedText>
        <ThemedText style={styles.listItem}>• By using the app, you consent to the collection and use of data as outlined in the Privacy Policy.</ThemedText>
      </ ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}><Icon name="check-circle" size={18} color="#007bff" /> 7. Intellectual Property</ThemedText>
        <ThemedText style={styles.listItem}>• All content, trademarks, logos, and other intellectual property associated with the app are owned by <ThemedText style={styles.bold}>HealthCare</ThemedText> or its licensors.</ThemedText>
        <ThemedText style={styles.listItem}>• You are prohibited from reproducing, distributing, or modifying any content without prior permission.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}><Icon name="check-circle" size={18} color="#007bff" /> 8. Limitation of Liability</ThemedText>
        <ThemedText style={styles.listItem}>• We are not responsible for any indirect, incidental, or consequential damages arising from the use or inability to use the app.</ThemedText>
        <ThemedText style={styles.listItem}>• To the maximum extent permitted by law, our liability is limited to the amount you have paid for using the app services, if applicable.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}><Icon name="check-circle" size={18} color="#007bff" /> 9. Termination</ThemedText>
        <ThemedText style={styles.listItem}>• We reserve the right to suspend or terminate your account if you violate these terms or engage in unauthorized activities.</ThemedText>
        <ThemedText style={styles.listItem}>• Upon termination, your right to use the app will cease immediately.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}><Icon name="check-circle" size={18} color="#007bff" /> 10. Modifications to Terms</ThemedText>
        <ThemedText style={styles.paragraph}>
          We may update these Terms and Conditions from time to time. Any changes will be communicated through the app or other appropriate channels. Continued use of the app after changes constitutes your acceptance of the revised terms.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}><Icon name="check-circle" size={18} color="#007bff" /> 11. Governing Law</ThemedText>
        <ThemedText style={styles.paragraph}>
          These Terms and Conditions are governed by the laws of Pakistan. Any disputes arising out of these terms will be subject to the exclusive jurisdiction of the courts in Pakistan.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}><Icon name="check-circle" size={18} color="#007bff" /> 12. Contact Us</ThemedText>
        <ThemedText style={styles.paragraph}>
          If you have any questions or concerns about these Terms and Conditions, please contact us at <Text style={styles.bold}>support@HealthCare</Text>.
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.paragraph}>
        Thank you for using <ThemedText style={styles.bold}>HealthCare</ThemedText>! We are committed to providing you with reliable and innovative health solutions.
      </ThemedText>
      <ThemedText>HealthCare</ThemedText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#495057',
    marginBottom: 12,
  },
  bold: {
    fontWeight: 'bold',
    color: '#007bff',
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    color: '#495057',
    marginLeft: 16,
    marginBottom: 8,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    marginVertical: 20,
  },
});

export default TermsAndConditions;