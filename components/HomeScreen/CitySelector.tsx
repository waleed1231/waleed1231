// CitySelector.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ThemedText } from '../ThemedText';
import { useRouter } from 'expo-router';

const cities = [
  { label: 'Sargodha', value: 'Sargodha' },
  { label: 'Lahore', value: 'Lahore' },
  { label: 'Multan', value: 'Multan' },
  { label: 'Islamabad', value: 'Islamabad' },
  { label: 'Faisalabad', value: 'Faisalabad' },
];

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0].value);
  const router = useRouter();

  const handleCitySelection = () => {
    // Navigate to the CityDetails screen and pass the selected city as a query parameter
    router.push(`/Screens/CityDetails?city=${encodeURIComponent(selectedCity)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Your City:</Text>
      <Picker
        selectedValue={selectedCity}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCity(itemValue)}
      >
        {cities.map((city) => (
          <Picker.Item key={city.value} label={city.label} value={city.value} />
        ))}
      </Picker>
      <TouchableOpacity style={styles.btn} onPress={handleCitySelection}>
        <ThemedText style={styles.btntext}>Select City</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  btn: {
    width: '45%',
    height: 40,
    backgroundColor: '#014E78',
    borderRadius: 20,
    margin: 9,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: 'center',
  },
  btntext: {
    color: '#fff',
    textAlign: 'center',
    margin: 2,
    fontSize: 16,
  },
});

export default CitySelector;