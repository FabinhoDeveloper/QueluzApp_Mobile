import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import MainTab from "./MainTab";

const Stack = createStackNavigator()

export default function LoginStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="MainStackNavigator" component={MainTab} />
        </Stack.Navigator>
    )
}
