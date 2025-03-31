import React from 'react';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false,
          contentStyle: {
            backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'
          }
        }} 
      />
      <Stack.Screen 
        name="+not-found" 
        options={{
          title: '页面未找到',
          contentStyle: {
            backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'
          }
        }}
      />
    </Stack>
  );
}
