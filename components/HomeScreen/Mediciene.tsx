import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { useRouter } from 'expo-router';





export default function AreYouADoctor() {
    const router=useRouter();
    const handleOrdernow=()=>{
        router.push('/Screens/mediciens')
    }
    
  return (
    
    <ThemedView style={styles.container}>
      <ThemedView style={styles.contentContainer}>
        <Image
          source={require('@/assets/images/areyou.png')}
          style={styles.image}
          resizeMode="contain" // Ensures the image maintains its aspect ratio
        />
        <ThemedView style={styles.textContainer}>
          <ThemedText style={styles.text}>Order Your Medicines with Ease</ThemedText>
          <ThemedText type='default' style={styles.subText}>
          Get the medications you need, delivered right to your doorstep.
          Safe, reliable, and hassle-free.
          </ThemedText>
          <TouchableOpacity style={styles.btn} onPress={handleOrdernow}>
            <ThemedText style={styles.btnText}>Order Now</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
 
}

const styles = StyleSheet.create({
  
    container: {
      flex:1,
      width: '90%',
      height: '46%',
      
      
      justifyContent: 'center',
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#014e78',
      borderRadius: 20,
    },
    image: {
      width: '30%',
      height: '100%',
      marginRight: 10,
      resizeMode:'cover',
    },
    textContainer: {
      flexDirection: 'column',
      backgroundColor: '#014e78',
      alignItems: 'center',
      margin:10,
      flex: 1,
    },
    text: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      padding:10,
    },
    subText: {
      color: 'white',
      marginBottom: 10,
      margin:5
    },
    btn: {
      width:'55%',
      height: 40,
      backgroundColor: '#ffff',
      borderRadius: 20,
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
    btnText: {
      fontSize: 13,
      color: '#563A9C',
    },
  });