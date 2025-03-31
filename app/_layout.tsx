import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkInitialAuth();
  }, []);

  const checkInitialAuth = async () => {
    try {
      const token = await SecureStore.getItemAsync('userToken');
      setIsAuthenticated(!!token);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    // 这里可以显示一个加载指示器
    return null;
  }

  return (
    <Stack>
      {!isAuthenticated ? (
        <Stack.Screen 
          name="login" 
          options={{ 
            headerShown: false,
            contentStyle: {
              backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'
            }
          }} 
        />
      ) : (
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false,
            contentStyle: {
              backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'
            }
          }} 
        />
      )}
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
