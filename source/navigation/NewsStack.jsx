import { createStackNavigator } from "@react-navigation/stack";

import NewsPage from '../screens/NewsPage'
import NewsOpened from "../screens/NewsOpened";

const Stack = createStackNavigator()

export default function NewsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="NewsPage" component={NewsPage}/>
            <Stack.Screen name="NewsOpened" component={NewsOpened}/>
        </Stack.Navigator>
    )
}
