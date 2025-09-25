import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from "react-native";

import HomeStack from "./HomeStack";
import NewsStack from "./NewsStack";
import ServicesStack from "./ServicesStack";

const Tab = createBottomTabNavigator()

export default function MainTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarActiveTintColor: "#003366", // azul escuro ativo
                tabBarInactiveTintColor: "#003366",  // cinza inativo
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === "Início") {
                        iconName = focused ? "home" : "home-outline";
                    }  else if (route.name === "Serviços") {
                        iconName = focused ? "menu": "menu-outline";
                    }  else if (route.name === "Solicitações") {
                        iconName = focused ? "folder" : "folder-outline";
                    }  else if (route.name === "Notícias") {
                        iconName = focused ? "newspaper" : "newspaper-outline";
                    } 

                    return (
                        <View style={focused ? styles.activeIconContainer : null}>
                        <Ionicons name={iconName} size={20} color={color} />
                        </View>
                    );
                },
            })}
            >
            <Tab.Screen 
                name="Início" 
                component={HomeStack}
            />

            <Tab.Screen 
                name="Serviços" 
                component={ServicesStack}
                
            />

            <Tab.Screen 
                name="Solicitações" 
                component={NewsStack}
            />
            
            <Tab.Screen 
                name="Notícias" 
                component={NewsStack}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#DED8E1",
    borderRadius: 60,
    elevation: 0
  },
  tabBarLabel: {
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Poppins_500Medium",
  },
  activeIconContainer: {
    backgroundColor: "rgba(120, 86, 255, 0.1)", // lilás claro no fundo
    borderRadius: 20,
    height: 25,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
});