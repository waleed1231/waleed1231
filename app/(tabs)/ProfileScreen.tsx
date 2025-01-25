import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Share } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import Header from '@/components/Profile/Header';
import Octicons from '@expo/vector-icons/Octicons';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  const handleHelpCenter = () => {
    router.push('/Screens/HelpCenter');
  };

  const handleTermsAndConditions = () => {
    router.push('/Screens/TermsAndConditions');
  
  };

  const handlePrivacyPolicy = () => {
    router.push('/Screens/PrivacyPolicy');
  };

  const handleEditProfile = () => {
    router.push('/Screens/EditProfile');
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => router.push('/Screens/GetStarted') },
      ],
      { cancelable: false }
    );
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Check out this amazing app! ',
      });
    } catch (error) {
      Alert.alert('Error', 'Could not share the app. Please try again later.');
    }
  };

  return (
    <ScrollView style={styles.container}showsVerticalScrollIndicator={false}>
      <ThemedView>
        <Header />
        <ThemedView style={styles.contentContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Profile
          </ThemedText>

          <ThemedView style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
              <Octicons name="person-fill" size={24} color="#4A90E2" />
              <ThemedText style={styles.buttonText}>Edit Profile</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Octicons name="history" size={24} color="#4A90E2" />
              <ThemedText style={styles.buttonText}>Appointment History</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleShare}>
              <Octicons name="share" size={24} color="#4A90E2" />
              <ThemedText style={styles.buttonText}>Share</ThemedText>
            </TouchableOpacity>
          </ThemedView>

          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Settings
          </ThemedText>

          <ThemedView style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleTermsAndConditions}>
              <Octicons name="key" size={24} color="#4A90E2" />
              <ThemedText style={styles.buttonText}>Terms And Conditions</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handlePrivacyPolicy}>
              <Octicons name="shield" size={24} color="#4A90E2" />
              <ThemedText style={styles.buttonText}>Privacy Policy</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleHelpCenter}>
              <Octicons name="info" size={24} color="#4A90E2" />
              <ThemedText style={styles.buttonText}>Help</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
              <Octicons name="sign-out" size={24} color="#FF6B6B" />
              <ThemedText style={styles.buttonText}>Logout</ThemedText>
            </TouchableOpacity>
          </ThemedView>

          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Contact Us
          </ThemedText>

          <ThemedView style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Octicons name="mail" size={24} color="#4A90E2" />
              <ThemedText style={styles.buttonText}>Email</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Octicons name="mark-github" size={24} color="#4A90E2" />
              <ThemedText style={styles.buttonText}>Github</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
        <ThemedText type="default" style={styles.footerText}>
          powered by code.pk
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
  },
  contentContainer: {
    padding: 16,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  button: {
    width: '48%',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    marginTop: 5,
    fontSize: 16,
  },
  footerText: {
    textAlign: 'center',
    paddingVertical: 20,
    color: '#888',
  },
});