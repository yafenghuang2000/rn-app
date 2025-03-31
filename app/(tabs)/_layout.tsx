import React from 'react';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ff6700',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#f0f0f0',
          height: 70,
          paddingBottom: 0,
          paddingTop: 2,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: 1,
          marginBottom: 3,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name={focused ? "home" : "home-outline"} 
              size={20} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: '分类',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name="text-box-search-outline" 
              size={20} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="service"
        options={{
          title: '服务',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name={focused ? "heart" : "heart-outline"} 
              size={20} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: '购物车',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name={focused ? "shopping" : "shopping-outline"} 
              size={20} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '我的',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name={focused ? "account-circle" : "account-circle-outline"} 
              size={20} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
} 