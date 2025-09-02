import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import NewsStack from "./NewsStack";
import ServicesStack from "./ServicesStack";

const Tab = createBottomTabNavigator()

export default function MainNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomeStack" component={HomeStack}/>
            <Tab.Screen name="ServicesStack" component={ServicesStack}/>
            <Tab.Screen name="NewsStack" component={NewsStack}/>
        </Tab.Navigator>
    )
}
