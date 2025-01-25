import { View, TextInput, StyleSheet, Image, TouchableOpacity, TouchableHighlight, Platform, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; 

const Header = () => {
  const router = useRouter();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleNavigation = (route: "/(tabs)" | "/Screens/Category" | "/Screens/Aboutus" | "/Screens/Contactus" | "/(tabs)/ProfileScreen" | "/Screens/RegisterScreen") => {
    router.push(route as any);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isMobile = Dimensions.get('window').width < 768; 

  const menuItems: { label: string; route: "/(tabs)" | "/Screens/Category" | "/Screens/Aboutus" | "/Screens/Contactus" | "/(tabs)/ProfileScreen" | "/Screens/RegisterScreen"}[] = [
    { label: 'Home', route: '/(tabs)' },
    { label: 'Categories', route: '/Screens/Category' },
    { label: 'About Us', route: '/Screens/Aboutus' },
    { label: 'Contact Us', route: '/Screens/Contactus' },
    { label: 'Profile', route: '/(tabs)/ProfileScreen' },
   
  ];

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity accessibilityLabel="Home" onPress={() => handleNavigation('/(tabs)')}>
        <Image source={require('../../assets/images/logo.png')} style={styles.image} />
      </TouchableOpacity>

      {isMobile && (
        <TouchableOpacity onPress={toggleMenu} style={styles.toggleButton}>
          <MaterialIcons name={isMenuOpen ? "close" : "menu"} size={24} color="white" />
        </TouchableOpacity>
      )}

      {isMobile && isMenuOpen && (
        <ThemedView style={styles.dropdownMenu}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableHighlight style={styles.navItem} onPress={() => handleNavigation(item.route)} underlayColor="#ddd">
                <ThemedText style={styles.navText}>{item.label}</ThemedText>
              </TouchableHighlight>
              {index < menuItems.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
          ))}
        </ThemedView>
      )}

      {!isMobile && (
        <ThemedView style={styles.navContainer}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation(item.route)}>
                <ThemedText style={styles.navText}>{item.label}</ThemedText>
              </TouchableOpacity>
              {index < menuItems.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
          ))}
        </ThemedView>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    width: '100%',
    backgroundColor: '#507687', 
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
  },
  toggleButton: {
    marginLeft: 'auto', 
    padding: 10,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 100, 
    right: 0,
    backgroundColor: 'white', 
    borderColor: 'grey',
    borderWidth: 1, 
    borderRadius: 5,
    padding: 10,
    zIndex: 1000, 
  },
  navContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#507687',
    paddingTop: 10,
    flexWrap: 'wrap', 
  },
  navItem: {
    marginHorizontal: 10,
    paddingVertical: 10, 
  },
  navText: {
    fontSize: 16,
    color: 'black',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginRight: 0,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 5, 
  },
});

export default Header;