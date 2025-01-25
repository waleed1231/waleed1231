import { View, Text,Image ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { ThemedText } from '../../components/ThemedText'
import { ThemedView } from '../../components/ThemedView'

export default function GetStarted() {
  return (
   <ThemedView style={styles.container} >
    <ThemedView style={styles.Subcontainer}>
    <ThemedText>
        <Image 
        source={require('@/assets/images/get.png')}
        style={styles.image}
        /> 
    </ThemedText>
    </ThemedView>
    <ThemedText type='subtitle' style={{marginTop:30,color:'white',textAlign:'center'}}>
    Welcome to  <ThemedText style={{fontSize:26,color:'bright'}}>CareConnect</ThemedText>
    </ThemedText>
    <ThemedText style={{color:'white', fontSize:15,textAlign:'center'}}>
    Connecting You with Trusted Home Services Effortlessly
    </ThemedText>
    <TouchableOpacity style={styles.btn}>
        <ThemedText  style={{color:'white', textAlign:'center',margin:8,}}>
            Let's Get Started
        </ThemedText>
    </TouchableOpacity>
    </ThemedView>
);}
const styles = StyleSheet.create({
    
     container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'purple',
        padding:20

        
     },
    
    Subcontainer:
    {
        height:"55%",
        width:"70%",
        alignSelf:'center',
        marginTop:60,
        backgroundColor:'purple',
       
        
    },
    image:{
        borderRadius:50,
    },
    btn:{
        height:40,
        width:150,
        backgroundColor:'green',
        borderRadius:10,
        marginTop:20,

        
        

    },
})