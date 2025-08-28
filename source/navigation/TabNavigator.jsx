import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import ServicesNavigation from "../screens/ServicesNavigation";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Início" component={Home}/>
            <Tab.Screen name="Serviços" component={ServicesNavigation}/>
        </Tab.Navigator>
    )
}
