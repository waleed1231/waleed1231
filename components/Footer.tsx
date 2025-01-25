import { View, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import React from 'react';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

export default function Footer() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.footerContent}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
        <View style={styles.linkColumn}>
          <ThemedText style={styles.footerText}> 2023 Your Company Name</ThemedText>
        </View>

        <View style={styles.linkColumn}>
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://example.com/privacy')}>
              <ThemedText style={styles.linkText}>
                <Icon name="shield" size={14} color="white" style={styles.icon} /> Privacy Policy
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://example.com/terms')}>
              <ThemedText style={styles.linkText}>
                <Icon name="file-text" size={14} color="white" style={styles.icon} /> Terms of Service
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://example.com/contact')}>
              <ThemedText style={styles.linkText}>
                <Icon name="envelope" size={14} color="white" style={styles.icon} /> Contact Us
              </ThemedText>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.socialMediaColumn}>
          <ThemedText style={styles.socialMediaHeader}>Follow Us</ThemedText>
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
            <ThemedText style={styles.socialMediaText}>
              <Icon name="facebook" size={14} color="white" style={styles.icon} /> Facebook
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
            <ThemedText style={styles.socialMediaText}>
              <Icon name="twitter" size={14} color="white" style={styles.icon} /> Twitter
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
            <ThemedText style={styles.socialMediaText}>
              <Icon name="instagram" size={14} color="white" style={styles.icon} /> Instagram
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#507687',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 15,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  footerText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  linkColumn: {
    flex: 1,
    alignItems: 'center',
  },
  linkContainer: {
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
    height: 14,
    width: 14,
  },
  socialMediaColumn: {
    flex: 1,
    alignItems: 'center',
  },
  socialMediaHeader: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialMediaText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 50,
    marginRight: 20,
  },
});