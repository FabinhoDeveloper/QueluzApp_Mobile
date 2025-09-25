import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";

import AuthNavigator from "./AuthNavigator";
import MainTab from "./MainNavigator";

export default function AppNavigator() {
    const { isSigned } = useAuth()

    return (
        <NavigationContainer>
            { isSigned ? 
                <MainTab/>
                 : 
                <AuthNavigator/>     
            }
        </NavigationContainer>
    )
}
