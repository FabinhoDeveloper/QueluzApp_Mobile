import { createStackNavigator } from "@react-navigation/stack";

import NewsPage from '../screens/NewsPage'

const Stack = createStackNavigator()

export default function NewsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="NewsPage" component={NewsPage}/>
        </Stack.Navigator>
    )
}
