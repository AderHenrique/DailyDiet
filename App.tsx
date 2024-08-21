import { ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import theme from './src/theme';
import { Routes } from './src/routes';
import React from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content"/>
      {fontsLoaded ? <Routes /> : <ActivityIndicator/> }
    </ThemeProvider>
  );
}
