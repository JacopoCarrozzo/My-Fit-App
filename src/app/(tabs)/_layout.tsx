import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Apple, CircleUserRound } from 'lucide-react-native';
import React from 'react';
import { Image } from 'react-native';

export default function TabLayout() {
  const ICON_SIZE = 26;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.light.acqua,
        tabBarInactiveTintColor: Colors.light.lightBlue,

        tabBarStyle: {
          height: 80,
          borderTopWidth: 0.5,
          backgroundColor: Colors.light.heavyBlue,
        },

        tabBarIconStyle: {
          marginTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 13.5,
          fontWeight: '500',
          marginTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Diary',
          tabBarIcon: ({ color }) => <FontAwesome name="book" size={ICON_SIZE} color={color} />,
        }}
      />

      <Tabs.Screen
        name="diet-page"
        options={{
          title: 'Diet',
          tabBarIcon: ({ color }) => <Apple size={ICON_SIZE} color={color} />,
        }}
      />

      <Tabs.Screen
        name="training-page"
        options={{
          title: 'Training',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('@/assets/images/run-icon.png')}
              style={{
                width: 29,
                height: 35,
                tintColor: color,
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="scan-page"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('@/assets/images/barcode.png')}
              style={{
                width: 29,
                height: 40,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile-page"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <CircleUserRound size={ICON_SIZE} color={color} />,
        }}
      />
    </Tabs>
  );
}
