
// hooks/useFonts.js
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const useFonts = async () => {
  await Font.loadAsync({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
};

export default useFonts;
