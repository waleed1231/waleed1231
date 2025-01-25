import { View, StyleSheet, TextInput, FlatList, Animated, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

const suggestions = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Grape',
  'Kiwi',
  'Mango',
  'Orange',
  'Peach',
  'Pineapple',
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (searchQuery) {
      const filtered = suggestions.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [searchQuery]);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const renderSuggestion = ({ item }: { item: string }) => (
    <TouchableOpacity onPress={() => setSearchQuery(item)}>
      <View style={styles.suggestionItem}>
        <TextInput style={styles.suggestionText} value={item} editable={false} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search.....1."
        style={styles.input}
        placeholderTextColor="gray"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocused && filteredSuggestions.length > 0 && (
        <Animated.View style={[styles.suggestionsContainer, { opacity: animation }]}>
          <FlatList
            data={filteredSuggestions}
            renderItem={renderSuggestion}
            keyExtractor={(item) => item}
            style={styles.suggestionsList}
          />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    flex: 1,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0', // Background color of the search input
  },
  suggestionsContainer: {
    position: 'absolute',
    top: 70, // Adjust based on the height of the search bar
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  suggestionsList: {
    maxHeight: 150, // Limit the height of the suggestions list
  },
  suggestionItem: {
    padding: 10,
  },
  suggestionText: {
    fontSize: 16,
    color: 'black',
  },
});