import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SearchServices from '../screens/SearchServices';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SearchServices" component={SearchServices} />
    </Stack.Navigator>
  );
}
