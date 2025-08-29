import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

import MainStackNavigator from "./MainStackNavigator";
import TestTab from "../screens/TestTab";

const Tab = createBottomTabNavigator();

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
          } else if (route.name === "Notícias") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person": "person-outline";
          }

          // custom extra: bolinha de fundo quando ativo
          return (
            <View style={focused ? styles.activeIconContainer : null}>
              <Ionicons name={iconName} size={20} color={color} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Início" component={MainStackNavigator} iconName={"home"}/>
      <Tab.Screen name="Notícias" component={TestTab} />
      <Tab.Screen name="Perfil" component={TestTab} />
    </Tab.Navigator>
  );
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
