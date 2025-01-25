import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Fontisto from '@expo/vector-icons/Fontisto';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          display: Platform.OS === 'web' ? 'none' : 'flex', // Hide tab bar on web
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color="purple" />,
        }}
      />
      <Tabs.Screen
        name="Laboratory"
        options={{
          title: 'Lab',
          tabBarIcon: ({ color }) => <Fontisto name="laboratory" size={24} color="purple" />
        }}
      />
     
      <Tabs.Screen
      name='BookAppointment'
      options={{
        title: 'Appointment',
        tabBarIcon: ({ color }) => <FontAwesome name="calendar" size={24} color="purple" />
      }}
      />
      <Tabs.Screen
  name="ProfileScreen" // The unique identifier for this screen
  options={{
    title: 'Profile', // The label shown on the tab
    tabBarIcon: ({ color }) =><Ionicons name="people-circle" size={24} color="purple" />
  }}
/>
    </Tabs>
  );
}
