import { View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '@/components/HomeScreen/header';
import BannerSection from '@/components/HomeScreen/BannerSection';
import AreYouADoctor from '@/components/HomeScreen/Areyouadoctor';
import Mediciene from '@/components/HomeScreen/Mediciene';
import { ThemedView } from '@/components/ThemedView';
import Testimonials from '@/components/HomeScreen/Testominals';
import WhyChooseUs from '@/components/HomeScreen/WhyChooseus';
import FreeAdviceBanner from '@/components/HomeScreen/FreeAdviceBanner';
import Footer from '@/components/Footer';
import TopRatedDoctors from '../Screens/TopRatedDoctors';
import Search from '@/components/HomeScreen/search';
import { ThemedText } from '@/components/ThemedText';
import CitySelector from '@/components/HomeScreen/CitySelector';


const DATA = [
  { id: '1', component: <BannerSection /> },
  { id: '2', component: <TopRatedDoctors /> },
  { id: '3', component: <WhyChooseUs /> },
  { id: '4', component: <Mediciene /> },
  { id: '5', component: <AreYouADoctor /> },
  { id: '6', component: <Testimonials /> },
  { id: '7', component: <FreeAdviceBanner /> },
];

const renderItem = ({ item }: { item: { id: string; component: JSX.Element } }) => (
  <ThemedView style={styles.sectionContainer}>
    {item.component}
  </ThemedView>
);

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
          <Header />
          <CitySelector /> {/* Add the CitySelector here */}


          
        </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ListFooterComponent={<Footer />}
       
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexGrow: 1,
    width: '100%',
  },
  sectionContainer: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 24,
  },
});