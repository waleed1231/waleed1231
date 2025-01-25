import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { useRouter } from 'expo-router';

export default function BannerSection() {
  const router = useRouter();

  const handleNavigation = (screen: string) => {
    router.push(screen as any);
  };
 

  return (
    <ThemedView style={styles.banner}>
      <ThemedText type='subtitle'style={{padding:2,margin:2,}}>How can we help you.?</ThemedText>
      <ThemedView style={styles.bannersContainer}>
        {/* In-Person Consultation */}
        <TouchableOpacity style={[styles.bannerItem, styles.inPersonBanner]} onPress={() => handleNavigation('/Screens/BookAppointment')}>
          <ThemedText style={styles.bannerText}>
            In-Person Consultation
            <ThemedText style={styles.subText}>{"\n"}Book Your Appointment</ThemedText>
          </ThemedText>
          <Image
            source={require('@/assets/images/video.png')}
            style={styles.bannerImage}
          />
        </TouchableOpacity>

        {/* Health Checkup */}
        <TouchableOpacity style={[styles.bannerItem, styles.healthCheckupBanner]} onPress={() => handleNavigation('/Screens/HealthCheckup')}>
          <ThemedText style={styles.bannerText}>
            Health Checkup
            <ThemedText style={styles.subText}>{"\n"}Schedule Your Checkup</ThemedText>
          </ThemedText>
          <Image
            source={require('@/assets/images/healthcheckup.png')}
            style={styles.bannerImage}
          />
        </TouchableOpacity>

        {/* Dental Services */}
        <TouchableOpacity style={[styles.bannerItem, styles.dentalBanner]} onPress={() => handleNavigation('/Screens/DentalServices')}>
          <ThemedText style={styles.bannerText}>
            Dental Services
            <ThemedText style={styles.subText}>{"\n"}Healthy Smiles</ThemedText>
          </ThemedText>
          <Image
            source={require('@/assets/images/dental.png')}
            style={styles.bannerImage}
          />
        </TouchableOpacity>

        {/* Mental Health */}
        <TouchableOpacity style={[styles.bannerItem, styles.mentalHealthBanner]} onPress={() => handleNavigation('/Screens/MentalHealth')}>
          <ThemedText style={styles.bannerText}>
            Mental Health
            <ThemedText style={styles.subText}>{"\n"}Talk to a Specialist</ThemedText>
          </ThemedText>
          <Image
            source={require('@/assets/images/mental.png')}
            style={styles.bannerImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bannerItem} onPress={() => handleNavigation('/Screens/VideoConsultation')}>
    <ThemedText style={styles.bannerText}>
      Video Consultation
      <ThemedText style={styles.subText}>{"\n"}PMC Verified Doctor's</ThemedText>
    </ThemedText>
    <Image
      source={require('@/assets/images/video.png')}
      style={styles.bannerImage}
    />
  </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    justifyContent: 'center',
    padding: 3,
    marginTop: 10,
    width: '100%',
  },
  bannersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    width: '100%',
  },
  bannerItem: {
    backgroundColor: '#E8F6F9',
    margin: 5,
    padding: 15,
    borderRadius: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 150, 
    width: Platform.select({ web: '30%', default: '45%' }), // 3 columns on web, 2 columns on mobile
  },
  bannerText: {
    color: '#014E78',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#555',
  },
  bannerImage: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 60,
    height: 50,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  inPersonBanner: {
    backgroundColor: '#FBE0D0',
  },
  healthCheckupBanner: {
    backgroundColor: '#FEF5DE',
  },
  dentalBanner: {
    backgroundColor: '#FFF6E9',
  },
  mentalHealthBanner: {
    backgroundColor: '#FFA24C',
  },
});