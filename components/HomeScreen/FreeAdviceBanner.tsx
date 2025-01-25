import { View, Text,StyleSheet,TouchableOpacity ,Image,Platform} from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import Octicons from '@expo/vector-icons/Octicons';
import { useRouter } from 'expo-router';


export default function FreeAdviceBanner() {
  const router=useRouter();

  const handleFaq=()=>{
    router.push('/Screens/Faq')
    },
    handleAskFreeQuestions=()=>{
      router.push('/Screens/Contactus')
    }
  return (
    <ThemedView style={styles.freeAdviceSection} >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <ThemedText style={styles.freeAdviceContainer} type='subtitle'>
          Get a Free Medical Advice{'\n'}
          <Octicons name="check" size={20} color="#4A90E2"/>
          <ThemedText style={{color:'blue'}}>
            Ask Free Questions
          </ThemedText>{'\n'}
          <Octicons name="check" size={20} color="#4A90E2"/>
          <ThemedText style={{color:'blue'}}>
            Ask free Questions
          </ThemedText>
        </ThemedText>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%' }}>
          <TouchableOpacity style={styles.freeAdviceButton} onPress={handleFaq}>
            <ThemedText style={styles.freeAdviceText}>FAQ's</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.freeAdviceButton} onPress={handleAskFreeQuestions}>
            <ThemedText style={styles.freeAdviceText}>Ask Free Questions</ThemedText>
          </TouchableOpacity>
        </View>
        <Image
          source={require('@/assets/images/doc.png')}
          style={styles.freeAdviceImage}
        />
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  freeAdviceSection: {
    flex:1,
    flexDirection:'row',
    width: Platform.select({ web: '90%', default: '100%' }),
    padding: 20,
    alignItems: 'center',
    marginTop: 26,
    backgroundColor:"#DFEFEB",
    borderRadius:20,
  },
  freeAdviceContainer: {
    width:'35%',
    flexDirection:'column',
    paddingHorizontal: 16,
    alignItems: 'flex-start',
    marginTop: 20,
    justifyContent:'flex-start',
    margin:10,
  },
  freeAdviceImage: {
    width: '25%',
    height: 100,
    resizeMode:'contain',
  },
  freeAdviceText: {
    fontSize: 15,
    color:'white',
    textAlign: 'center',
  },
  freeAdviceButton: {
    width:'40%',
    height: 50,
    backgroundColor: '#014E78',
    borderRadius: 20,
    marginTop: 20,
    margin:9,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
})