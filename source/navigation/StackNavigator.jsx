import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ServicesNavigation from '../screens/ServicesNavigation';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ServicesNavigation" component={ServicesNavigation} />
    </Stack.Navigator>
  );
}
