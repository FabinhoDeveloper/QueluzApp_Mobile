import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import fonts from "./assets/fonts/fonts";

import CustomButton from './source/components/CustomButton.jsx'
import FormInput from './source/components/FormInput.jsx';
import { useState } from 'react';

export default function App() {
  const [password, setPassword] = useState('')
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   Font.loadAsync(fonts).then(() => setLoaded(true));
  // }, []);


  return (
    <View style={styles.container}>
      
      <FormInput
        placeholder="Digite sua Senha"
        onChangeText={(password) => setPassword(password)}
      />
      <CustomButton titulo='Entrar'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
