import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image ,Linking} from 'react-native';
import Header from '@/components/HomeScreen/header';
import Footer from '@/components/Footer';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const AboutUs = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
       <Header/>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Welcome to CareConnect</ThemedText>
          <ThemedText style={styles.subtitle}>Your Trusted Partner in Healthcare</ThemedText>
        <ThemedText style={styles.bannerpara}>Bringing healthcare closer to you with seamless access to doctors, medicines,
          and health services,anytime,anywhere</ThemedText>
      </ThemedView>
      <ThemedView style={styles.imagecontainer}>
        
        <ThemedView style={styles.imagecontainer2}>
         <ThemedText style={styles.bannertitle}> Simplifying Healthcare, 
          One Click at a Time</ThemedText>
          <ThemedText style={styles.bannerpara}>Discover CareConnect,your trusted partner for seamless appointments, personalized health insights, and secure medical record management.
             Your health, your way.</ThemedText>
        </ThemedView>

        <ThemedView style={styles.imagecontainer2}>
          <ThemedText style={styles.bannertitle}>Connecting You to Better Health</ThemedText>
          <ThemedText style={styles.bannerpara}>Experience hassle-free healthcare with CareConnect,your onestop solution for appointments,
            teleconsultations and morey.</ThemedText>

        </ThemedView>
        <ThemedView style={styles.imagecontainer2}>
          <ThemedText style={styles.bannertitle}>
          Empowering Your Health Journey
          </ThemedText>
          <ThemedText style={styles.bannerpara}>
          CareConnect makes managing your health easy, personalized,
          and accessible anytime, anywhere.
          </ThemedText>

        </ThemedView>
        
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Our Story</ThemedText>
        <ThemedText style={styles.paragraph}>
          CareConnect is your trusted partner in healthcare. Founded in 2023, our mission is to empower individuals with easy access to vital health information, personalized care, and seamless communication with healthcare providers.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          At CareConnect, we believe that everyone deserves quality healthcare and the right tools to manage their health effectively. Our innovative app is designed to simplify the healthcare experience, making it more accessible and user-friendly for everyone.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Our Vision</ThemedText>
        <ThemedView style={styles.bulletPoints}>
          <ThemedText style={styles.bulletPoint}>1.To revolutionize the way individuals interact with healthcare by providing a platform that prioritizes user experience and accessibility.</ThemedText>
          <ThemedText style={styles.bulletPoint}>2.To foster a community where users can share their health journeys and support one another in achieving better health outcomes.</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Our Mission</ThemedText>
        <ThemedView style={styles.bulletPoints}>
          <ThemedText style={styles.bulletPoint}>1.To provide accurate, reliable health information at your fingertips.</ThemedText>
          <ThemedText style={styles.bulletPoint}>2.To connect users with licensed healthcare professionals for personalized care and advice.</ThemedText>
          <ThemedText style={styles.bulletPoint}>3.To promote preventive care and wellness through education and resources.</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedText style={{textAlign:'center',fontWeight:'bold',}}>Our Services</ThemedText>
      <ThemedText style={styles.subtitle}>
      At CareConnect, we offer a comprehensive range of healthcare services designed to cater
       to your unique needs, including:</ThemedText>
      <ThemedView style={styles.row}>
       
        <ThemedView style={styles.row}>
          
        <ThemedView style={styles.coloum}>
          <ThemedText style={styles.bannertitle}>Doctor Consultations</ThemedText>
          <ThemedText style={styles.bannerpara}>Connect with experienced doctors across various specialties
           through video, chat, or phone calls.</ThemedText>
        </ThemedView>
        <ThemedView style={styles.coloum}>
          <ThemedText style={styles.bannertitle}>Diagnostic Services</ThemedText>
          <ThemedText style={styles.bannerpara}> Book lab tests and diagnostic screenings from trusted healthcare 
            providers with doorstep sample collection.</ThemedText>
        </ThemedView>
        <ThemedView style={styles.coloum}>
          <ThemedText style={styles.bannertitle}>Health Packages</ThemedText>
          <ThemedText style={styles.bannerpara}>Choose from a variety of health check-up plans tailored for individuals,
            families, and corporate organizations.</ThemedText>
        </ThemedView>
        <ThemedView style={styles.coloum}>
          <ThemedText style={styles.bannertitle}>Emergency Assistance</ThemedText>
          <ThemedText style={styles.bannerpara}>
          Get instant support for medical emergencies with our quick response team.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    
        </ThemedView>
       
       
      

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>What We Offer</ThemedText>
        <ThemedView style={styles.bulletPoints}>
          <ThemedText style={styles.bulletPoint}>1.Symptom Checker: Quickly assess your symptoms and receive guidance on potential next steps.</ThemedText>
          <ThemedText style={styles.bulletPoint}>2.Telehealth Services: Consult with healthcare providers from the comfort of your home through secure video calls.</ThemedText>
          <ThemedText style={styles.bulletPoint}>3.Health Resources: Access a wealth of information on various health topics, medications, and treatments.</ThemedText>
          <ThemedText style={styles.bulletPoint}>4.User-Friendly Interface: Designed with you in mind, our app is intuitive and easy to navigate.</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Our Team</ThemedText>
        <ThemedText style={styles.paragraph}>
          Our dedicated team consists of healthcare professionals, technology experts, and user experience designers who are passionate about improving healthcare access. We work tirelessly to ensure that CareConnect meets the needs of our users and stays at the forefront of healthcare technology.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Join Us on Our Journey</ThemedText>
        <ThemedText style={styles.paragraph}>
        Be a part of the CareConnect family and stay updated with the latest in healthcare.
        Follow us on social media for health tips, updates, and exclusive offers:{'\n'}
       Facebook: CareConnectOfficial{'\n'}
       Twitter: @CareConnect{'\n'}
       Instagram: @CareConnect_Health{'\n'}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Contact Us</ThemedText>
        <ThemedText style={styles.paragraph}>
        Have questions or need assistance? We're here to help.{'\n'}
        📧 Email: support@careconnect.com{'\n'}
       📞 Helpline: +123-456-7890{'\n'}
       🌐 Website: www.careconnect.com{'\n'}
        </ThemedText>
        </ThemedView>
      

       
        
        
   
      
      <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',

  },
  header: {
    marginBottom: 20,
    padding:10,
    width:'100%',
    
  },
  title: {
    fontSize: 20,
   color:'Black',
   marginTop:30,
   padding:4,
   margin:4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    padding: 10,
    margin:4,
    
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    padding:3,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    padding:3,
  },
  bulletPoints: {
    marginLeft: 10,
  },
  bulletPoint: {
    fontSize: 16,
    lineHeight: 24,
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
  imagecontainer:{
     backgroundColor: 'white',
      padding: 3,
      margin: 5,
      flexDirection:'row',
      justifyContent:'center',
      
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    width:'95%',
    marginHorizontal: 10,
    alignSelf:'center',
    padding: 15,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  coloum:{
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginInline:2,
    alignSelf:'center',
    
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    
  },
  
  imagecontainer2:{
    
      backgroundColor:'lightblue',
      borderRadius:20,
      padding:10,
      margin:10,
      height:150,
      width:400,
      
  },
  bannertitle:{
    fontSize: 18, 
    color: '#014E78',
    fontWeight: 'bold',
    textAlign:'center',
  },
  bannerpara:{
    fontSize: 12, 
    color: '#555',
    fontWeight:'bold',
    margin:5,
    textAlign:'center',
    padding:4,
  },

   
});

export default AboutUs;