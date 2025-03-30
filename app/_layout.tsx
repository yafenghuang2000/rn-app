import {  DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import CustomNavbar from '@/components/CustomNavbar';

SplashScreen.preventAutoHideAsync();

 function RootLayout() {

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack
        screenOptions={{
          header: () => <CustomNavbar />,
        }}
      >
        <Stack.Screen name="index" options={{  }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default RootLayout;
