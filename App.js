import { StatusBar } from 'expo-status-bar';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_200ExtraLight, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { SafeAreaView } from 'react-native-safe-area-context';

import Router from './source/navigation/index.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Router/>
  );
}
