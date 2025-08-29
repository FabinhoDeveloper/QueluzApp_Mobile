import { NavigationContainer } from '@react-navigation/native';
import LoginStackNavigator from './LoginStackNavigator';

export default function Router() {
    return (
        <NavigationContainer>
            <LoginStackNavigator/>        
        </NavigationContainer>
    )
}
