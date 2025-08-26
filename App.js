import { StatusBar } from 'expo-status-bar';
import { useFonts, Poppins_300Light, Poppins_500Medium, Poppins_200ExtraLight } from '@expo-google-fonts/poppins';

import Login from './source/screens/Login';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_200ExtraLight
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Login/>
  );
}
