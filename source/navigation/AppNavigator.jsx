import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";

import AuthNavigator from "./AuthNavigator";
import MainTab from "./MainTab";
import MainDrawer from "./MainDrawer";


export default function AppNavigator() {
    const { isSigned } = useAuth()

    return (
        <NavigationContainer>
            { isSigned ? 
                <MainDrawer/>
                 : 
                <AuthNavigator/>     
            }
        </NavigationContainer>
    )
}
