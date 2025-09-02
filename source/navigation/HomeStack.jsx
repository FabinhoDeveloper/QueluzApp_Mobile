import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import ServicesStack from './ServicesStack';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ServicesStack" component={ServicesStack}/>
    </Stack.Navigator>
  );
}
