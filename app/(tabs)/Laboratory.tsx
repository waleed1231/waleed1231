import { View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';


const Laboratory = () => {
  const testCategories = [
    'Blood Tests', 'Imaging', 'COVID-19 Testing', 'Routine Checkups'
  ];
  const populartests = [
    'Complete Blood Count (CBC)', 'Lipid Profile', 'Liver Function Tests (LFTs)', 'Allergy Panel', 'Thyroid Function Tests'
  ];
  
  
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Your Trusted Partner in Diagnostics
          </ThemedText>
          <ThemedText style={{ color: 'white', margin: 10 }}>
            Empowering Health Through Diagnostics
          </ThemedText>
          <ThemedView style={styles.searchBar}>
            <TextInput
              style={styles.input}
              placeholder="Search for tests"
              
            />
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.content}>
          <ThemedText type='default' style={{ padding: 6, fontSize: 17 }}>Choose Your Diagnostic Service</ThemedText>
          {testCategories.map((item, index) => (
            <TouchableOpacity key={index} style={styles.subContainer}>
              <ThemedText style={{ color: 'white', textAlign: 'center' }}>{item}</ThemedText>
            </TouchableOpacity>
          ))}
          <ThemedText type='default' style={{ padding: 6, fontSize: 17 }}> Popular Tests</ThemedText>
          {populartests.map((item, index) => (
            <TouchableOpacity key={index} style={styles.subContainer}>
              <ThemedText style={{ color: 'white', textAlign: 'center' }}>{item}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

export default Laboratory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#f7f7f7',
  },
  subContainer: {
    height: 50,
    borderRadius: 20,
    backgroundColor: 'purple',
    justifyContent: 'center',
    margin: 8,
  },
  header: {
    height: 200,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  input: {
    borderColor: 'gray',
    padding: 10,
  },
  searchBar: {
    marginTop: 20,
    width: 350,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
  },
});