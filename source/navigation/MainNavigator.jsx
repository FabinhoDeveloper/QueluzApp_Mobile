import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'
import Fontisto from '@expo/vector-icons/Fontisto';
import { StyleSheet } from "react-native";

import HomeStack from "./HomeStack";
import NewsStack from "./NewsStack";
import ServicesStack from "./ServicesStack";

const Tab = createBottomTabNavigator()

export default function MainNavigator() {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: styles.tabContainer,
            // ...resto das suas screenOptions
        })}
    >
            <Tab.Screen 
                name="HomeStack" 
                component={HomeStack}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons   
                            name={focused ? 'home' : 'home-outline'}
                            size={20}
                            color={"#0C447F"}
                        />
                    ),
                }}
            />

            <Tab.Screen 
                name="ServicesStack" 
                component={ServicesStack}
                options={{
                    tabBarLabel: 'Serviços',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons   
                            name={focused ? 'menu' : 'menu-outline'}
                            size={20}
                            color={"#0C447F"}
                        />
                    )
                }}    
            />
            
            <Tab.Screen 
                name="NewsStack" 
                component={NewsStack}
                options={{
                    tabBarLabel: 'Notícias',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'newspaper' : 'newspaper-outline'}
                            size={20}
                            color={"#0C447F"}
                        />
                    ),
                    
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#DED8E1',
        borderRadius: 60,
        position: 'absolute',
        marginBottom: 21,
        marginHorizontal: 21,
        elevation: 0
    },
    tabLabel: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#1D1B20',
        fontSize: 9,
    },
    tabLabelActive: {
        backgroundColor: '#E8DEF8',
        borderRadius: 16, // arredonda as bordas do background
    }
})
