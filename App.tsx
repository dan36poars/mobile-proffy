import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AppLoading } from 'expo';
import {
  useFonts,
  Archivo_700Bold,
  Archivo_400Regular,
} from '@expo-google-fonts/archivo';

import {
  Poppins_600SemiBold,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';

// pages
import AppStack from './src/routes/appStack';


export default function App() {

  const [fontsLoaded] = useFonts({
    Archivo_700Bold,
    Archivo_400Regular,
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar style="light" />
        <AppStack />
      </>
    );
  }
}
