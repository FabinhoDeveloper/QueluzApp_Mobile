import { StatusBar } from 'expo-status-bar';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_200ExtraLight, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { View, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet, TextInput, Platform, Keyboard } from 'react-native';

import Login from './source/screens/Login';
import Home from './source/screens/Home';

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
   <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Login/>
   </TouchableWithoutFeedback>
    // <Home/>
  );
}
