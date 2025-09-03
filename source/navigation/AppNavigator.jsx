import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";

import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

export default function AppNavigator() {
    const { isSigned } = useAuth()

    return (
        <NavigationContainer>
            { isSigned ? 
                <MainNavigator/>
                 : 
                <AuthNavigator/>     
            }
        </NavigationContainer>
    )
}
