import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import Octicons from '@expo/vector-icons/Octicons';

const VideoConsultationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ThemedView>
        <ThemedText type="title" style={styles.title}>
          Video Consultation
        </ThemedText>

        <ThemedView style={styles.contentContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Consult with a doctor remotely
          </ThemedText>

          <ThemedText type="default" style={styles.paragraph}>
            Our video consultation feature allows you to consult with a doctor remotely, from the comfort of your own home.
          </ThemedText>

          <TouchableOpacity style={styles.button}>
            <Octicons name="device-camera-video" size={24} color="#4A90E2" />
            <ThemedText style={styles.buttonText}>Start Consultation</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.featuresContainer}>
          <ThemedText type="subtitle" style={styles.featuresTitle}>
            Features
          </ThemedText>

          <View style={styles.featureItem}>
            <Octicons name="shield" size={24} color="#4A90E2" />
            <ThemedText style={styles.featureText}>Secure and Private</ThemedText>
          </View>

          <View style={styles.featureItem}>
            <Octicons name="clock" size={24} color="#4A90E2" />
            <ThemedText style={styles.featureText}>Flexible Scheduling</ThemedText>
          </View>

          <View style={styles.featureItem}>
            <Octicons name="person" size={24} color="#4A90E2" />
            <ThemedText style={styles.featureText}>Personalized Care</ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.callToActionContainer}>
          <ThemedText type="subtitle" style={styles.callToActionTitle}>
            Get Started Today!
          </ThemedText>

          <TouchableOpacity style={styles.callToActionButton}>
            <ThemedText style={styles.callToActionButtonText}>Start Consultation</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.testimonialsContainer}>
          <ThemedText type="subtitle" style={styles.testimonialsTitle}>
            What Our Patients Say
          </ThemedText>

          <View style={styles.testimonialItem}>
            <ThemedText type="default" style={styles.testimonialText}>
              "I was amazed by the quality of care I received through the video consultation feature. It was so convenient and easy to use!"
            </ThemedText>
            <ThemedText type="default" style={styles.testimonialName}>
              - John D.
            </ThemedText>
          </View>

          <View style={styles.testimonialItem}>
            <ThemedText type="default" style={styles.testimonialText}>
              "I was skeptical at first, but the video consultation feature really exceeded my expectations. The doctor was knowledgeable and caring."
            </ThemedText>
            <ThemedText type="default" style={styles.testimonialName}>
              - Jane S.
            </ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.faqContainer}>
          <ThemedText type="subtitle" style={styles.faqTitle}>
            Frequently Asked Questions
          </ThemedText>

          <View style={styles.faqItem}>
            <ThemedText type="default" style={styles.faqQuestion}>
              What is video consultation?
            </ThemedText>
            <ThemedText type="default" style={styles.faqAnswer}>
              Video consultation is a feature that allows you to consult with a doctor remotely through video conferencing.
            </ThemedText>
          </View>

          <View style={styles.faqItem}>
            <ThemedText type="default" style={styles.faqQuestion}>
              How do I schedule a video consultation?
            </ThemedText>
            <ThemedText type="default" style={styles.faqAnswer}>
              You can schedule a video consultation by clicking on the "Start Consultation" button and following the prompts.
            </ThemedText>
          </View>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
 backgroundColor: '#f9f9f9',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  contentContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4A90E2',
    width: 80,
    height: 40,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    margin: 19,
  },
  featuresContainer: {
    padding: 16,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    marginLeft: 10,
  },
  callToActionContainer: {
    padding: 16,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callToActionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  callToActionButton: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  callToActionButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  testimonialsContainer: {
    padding: 16,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  testimonialsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  testimonialItem: {
    marginBottom: 15,
    alignItems: 'center',
  },
  testimonialText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  testimonialName: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  faqContainer: {
    padding: 16,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faqItem: {
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  faqAnswer: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default VideoConsultationScreen;