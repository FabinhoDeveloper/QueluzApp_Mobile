import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function SecondaryStackHeader({ title, color }) {
    const navigation = useNavigation()

    return (
        <View style={[styles.container, { backgroundColor: color || '#0C447F' }]}>
            <View style={styles.headerMainContent}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{title}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0C447F',
        height: 183,
        borderBottomLeftRadius: 72,
        borderBottomRightRadius: 72,
        paddingTop: 15,
        paddingHorizontal: 32,
        elevation: 8,
        shadowColor: "#000",
    },
    headerMainContent: {
        // backgroundColor: 'red',
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    },
    headerTop: {
        // backgroundColor: 'gray',
        flexDirection: 'row',
        gap: 19,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 28.81,
        fontFamily: 'Poppins_400Regular',
        color: "#FFFFFF",
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
        
    },
})