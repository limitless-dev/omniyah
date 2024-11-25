import { Tabs } from 'expo-router';
import { Bell, Home, Search, User2 } from 'lucide-react-native';
import React from 'react';
import { Dimensions } from 'react-native';

import { colors } from '@/constants/colors';
import { useColorScheme } from '@/lib/useColorScheme';

export default function ProtectedLayout() {
  const { colorScheme } = useColorScheme();
  const screenWidth = Dimensions.get('window').width;
  const iconSize = screenWidth > 375 ? 30 : 24;
  const iconWidth = (focused: boolean) => (focused ? 2 : 1);
  // const iconFill =
  //   colorScheme === 'dark' ? colors.dark.foreground : colors.light.foreground;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor:
            colorScheme === 'dark'
              ? colors.dark.background
              : colors.light.background,
        },
        tabBarActiveTintColor:
          colorScheme === 'dark'
            ? colors.dark.foreground
            : colors.light.foreground,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Home
              size={iconSize}
              strokeWidth={iconWidth(focused)}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <Search
              size={iconSize}
              color={color}
              strokeWidth={iconWidth(focused)}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color, focused }) => (
            <Bell
              size={iconSize}
              color={color}
              strokeWidth={iconWidth(focused)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <User2
              size={iconSize}
              color={color}
              strokeWidth={iconWidth(focused)}
            />
          ),
        }}
      />
    </Tabs>
  );
}
