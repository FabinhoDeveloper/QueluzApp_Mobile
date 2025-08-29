import { StatusBar } from 'expo-status-bar';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_200ExtraLight, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './source/navigation/StackNavigator';

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
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  );
}
