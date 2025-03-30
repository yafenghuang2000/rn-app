// app/components/CustomNavbar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomNavbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>My Custom Navbar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default CustomNavbar;