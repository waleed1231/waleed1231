import React, { useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { db } from '@/fireconfig'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore'; // Correct import

interface Doctor {
  id: string; // Use string for Firestore document IDs
  name: string;
}

const CityDetails = () => {
  const router = useRouter();
  const { city } = useLocalSearchParams();

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const doctorsCollection = collection(db, 'doctors'); // Ensure you have a 'doctors' collection in Firestore
        const doctorsSnapshot = await getDocs(doctorsCollection);
        const doctorsList = doctorsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Doctor[];

        setDoctors(doctorsList);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: Doctor }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctors in {city}</Text>
      <FlatList
        data={doctors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    width: '100%',
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});

export default CityDetails;