import React from 'react'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  EBGaramond_400Regular,
  // EBGaramond_500Medium,
  // EBGaramond_600SemiBold,
  EBGaramond_700Bold,
  // EBGaramond_800ExtraBold,
  // EBGaramond_400Regular_Italic,
  // EBGaramond_500Medium_Italic,
  // EBGaramond_600SemiBold_Italic,
  // EBGaramond_700Bold_Italic,
  // EBGaramond_800ExtraBold_Italic,
} from '@expo-google-fonts/eb-garamond'
import Routes from './routes'


export default function App() {
  let [fontsLoaded] = useFonts({
		Garamond: EBGaramond_400Regular,
    GaramondBold: EBGaramond_700Bold,
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}

  return <Routes />
}
