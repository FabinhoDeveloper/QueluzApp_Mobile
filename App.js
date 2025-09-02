import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_200ExtraLight, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { AuthProvider } from './source/contexts/AuthContext';
import AppNavigator from './source/navigation/AppNavigator';

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
    <AuthProvider>
      <AppNavigator/>
    </AuthProvider>
  );
}
