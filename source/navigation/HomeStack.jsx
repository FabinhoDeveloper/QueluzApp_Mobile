import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SearchServices from '../screens/SearchServices';
import NewsOpened from '../screens/NewsOpened';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SearchServices" component={SearchServices} />
        <Stack.Screen name="NewsOpened" component={NewsOpened}/>
    </Stack.Navigator>
  );
}
