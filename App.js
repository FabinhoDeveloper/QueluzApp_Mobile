import { StatusBar } from 'expo-status-bar';
import { useFonts, Poppins_300Light, Poppins_500Medium, Poppins_200ExtraLight } from '@expo-google-fonts/poppins';

import { RobotoFlex_400Regular } from '@expo-google-fonts/roboto-flex'

import { View, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet, TextInput, Platform, Keyboard } from 'react-native';

import Login from './source/screens/Login';
import SearchBox from './source/components/SearchBox';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_200ExtraLight,
    RobotoFlex_400Regular
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
       <Login/>
    </TouchableWithoutFeedback>
    //  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //      <SearchBox/>
    //  </View>
  );
}
