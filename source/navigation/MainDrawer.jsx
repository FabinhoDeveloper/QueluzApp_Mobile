import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator()

import MainTab from "./MainTab";
import UsefulPhoneNumbers from "../screens/Profile";
import Profile from "../screens/Profile";

export default function MainDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Início" screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Início" component={MainTab}/>
            <Drawer.Screen name="Telefones Úteis" component={UsefulPhoneNumbers}/>
            <Drawer.Screen name="Perfil" component={Profile}/>
        </Drawer.Navigator>
    )
}
