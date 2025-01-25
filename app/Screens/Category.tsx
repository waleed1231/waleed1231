import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView,Platform } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { useRouter } from 'expo-router'; // Import navigation hook
import { ThemedView } from '../../components/ThemedView';
import Header from '../../components/HomeScreen/header';
import Footer from '@/components/Footer';

export default function Category() {
  const router = useRouter(); // Initialize navigation

  // Sample categories data
  const categories = [
    { id: '1', name: 'Dentist', image: require('@/assets/images/teeth.png') },
    { id: '2', name: 'Cardiology', image: require('@/assets/images/icon.png') },
    { id: '3', name: 'Dermatologist', image: require('@/assets/images/dermatology.png') },
    { id: '4', name: 'General Physician', image: require('@/assets/images/physician.png') },
    { id: '5', name: 'Gastroenterologist', image: require('@/assets/images/gas.png') },
    { id: '6', name: 'Hematologist', image: require('@/assets/images/hematology.png') },
    { id: '7', name: 'Nephrologist', image: require('@/assets/images/nep.png') },
    { id: '8', name: 'Neurologist', image: require('@/assets/images/neu.png') },
  ];

  
  const renderCategoryItem = ({ item }: { item: { id: string; name: string; image: any } }) => (
    <TouchableOpacity
      onPress={() => console.log(`Category ${item.name} pressed`)}
      accessibilityLabel={`Navigate to ${item.name} category`}
      accessibilityRole="button"
      style={styles.categoryItem}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <ThemedText style={styles.categoryName}>{item.name}</ThemedText>
    </TouchableOpacity>
  );

  const handleViewAllPress = () => {
    router.push('/Screens/Category'); 
     
  
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ThemedView style={styles.container}>
        <Header />
        <View style={styles.headerContainer}>
          <Image
            source={require('@/assets/images/areyou.png')}
            style={styles.headerImage}
          />
          <View style={styles.headerTextContainer}>
            <ThemedText style={styles.headerText}>
              Find the Right Doctor for Your Needs
            </ThemedText>
            <ThemedText style={styles.headerDescription}>
              Explore our comprehensive list of healthcare specialists to get the care you deserve. 
              Whether you're seeking general consultation, expert advice, or specialized treatment, 
              we make it easy to connect with trusted professionals near you.
            </ThemedText>
          </View>
        </View>

        {/* "View All" Button at Top Right */}
        <View style={styles.header}>
          <ThemedText style={styles.title}>Categories</ThemedText>
          <TouchableOpacity onPress={handleViewAllPress} style={styles.viewAllButton}>
            <ThemedText style={styles.viewAllText}>View All</ThemedText>
          </TouchableOpacity>
        </View>
        
        {/* Horizontal FlatList for Categories */}
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />

       
        <ThemedView style={styles.infoContainer}>
          <ThemedText style={styles.infoText}>
            Explore our categories to find the right healthcare professional for your needs.
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', 
  },
  headerContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#10375C',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    margin: 20,
    width:Platform.select({ web: '95%', default: '100%' }), 
   
  },
  headerImage: {
    width: 230, 
    height: 180, 
    marginRight: 16, 
  },
  headerTextContainer: {
    flex: 1, 
  },
  headerText: {
    fontSize:  20,
    color: '#7ED4AD',
    textAlign: 'left', 
  },
  headerDescription: {
    color: 'white',
    textAlign: 'left', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  viewAllButton: {
    padding: 8,
  },
  viewAllText: {
    fontSize: 16,
    color: 'blue',
    padding: 20,
  },
  listContainer: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryItem: {
    padding: 8,
    marginTop:40,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
    color: 'black',
  },
  infoContainer: {
    flexDirection: 'column', 
    backgroundColor: '#e0f7fa', 
    height: '20%',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#00796b',
    textAlign: 'center',
  },
});