import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";
import CustomDrawerContent from "../components/CustomDrawer";
import { Ionicons } from '@expo/vector-icons' // ou MaterialIcons, Feather, etc.

const Drawer = createDrawerNavigator()

import MainTab from "./MainTab";
import UsefulPhoneNumbers from "../screens/UsefulPhoneNumbers";
import Profile from "../screens/Profile";

export default function MainDrawer() {
    return (
        <Drawer.Navigator  
            initialRouteName="Início" 
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerPosition: 'right',
                drawerStyle: styles.drawer,
                drawerLabelStyle: styles.drawerLabelStyle
            }}    
        >
            <Drawer.Screen 
                name="Início" 
                component={MainTab}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={'white'} size={24} />
                    )
                }}    
            />
            <Drawer.Screen 
                name="Telefones Úteis" 
                component={UsefulPhoneNumbers}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="call-outline" color={'white'} size={24} />
                    )
                }}    
                
            />
            <Drawer.Screen 
                name="Endereços Úteis" 
                component={UsefulPhoneNumbers}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="map-outline" color={'white'} size={24} />
                    )
                }}    
                
            />
            <Drawer.Screen 
                name="Perfil" 
                component={Profile}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={'white'} size={24} />
                    )
                }} 
                
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#0C447F',
    },
    drawerLabelStyle: {
        color: 'white',
        fontFamily: 'Poppins_400Regular',
        fontSize: 16
    }
})
