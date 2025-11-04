import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useState, useEffect } from "react";

import { useAuth } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

import SearchBox from "./SearchBox";
import NewsCarousel from "./NewsCarousel";

export default function MainHeader({ onSearchFocused, onSearchBlur }) {
    const {user} = useAuth()
    const [searchFocused, setSearchFocused] = useState(false);
    const navigation = useNavigation()

    useEffect(() => {
        console.log(searchFocused)
    }, [searchFocused])

    return (
        <>
        <View style={[styles.container, { height: searchFocused ? 250 : 434 }]}>
            <View style={styles.headerMainContent}>
                <View style={styles.headerTop}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerHello}>Olá, </Text>
                        <Text style={styles.headerUserName}>{user ? user.primeiroNome : "visitante"}!</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Feather name="menu" size={24} color="white" />
                    </TouchableOpacity>                                                           
                </View>

                <View style={[styles.headerSearch, { marginBottom: searchFocused ? 40 : 100 }]}>
                    {!searchFocused && (
                        <Text style={styles.questionText}>O que a Prefeitura de Queluz{'\n'}pode fazer por você hoje?</Text>
                    )}
                    <SearchBox
                        onFocus={() => {
                            setSearchFocused(true)
                            if (onSearchFocused) onSearchFocused()
                        }}
                        onBlur={() => {
                            setSearchFocused(false)
                            if (onSearchBlur) onSearchBlur()
                        }}
                    />
                    
                </View>
            </View>
        </View>
        {!searchFocused && (
            <View style={styles.carouselWrapper}>
                <NewsCarousel/>
            </View>
        )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0C447F',
        borderBottomLeftRadius: 72,
        borderBottomRightRadius: 72,
        paddingTop: 55,
        paddingHorizontal: 32,
        elevation: 8,
        shadowColor: "#000",
    },
    headerMainContent: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between'
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTextContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    headerHello: {
        fontSize: 28.81,
        fontFamily: 'Poppins_400Regular',
        color: "#FFFFFF",
        lineHeight: 38
    },
    headerUserName: {
        fontSize: 28.81,
        fontFamily: 'Poppins_700Bold',
        color: "#FFFFFF",
        marginTop: -7
    },
    burguerMenu: {
        height: 20.44,
        width: 20.44
    },
    headerSearch: {
        gap: 15,
    },
    questionText: {
        fontSize: 16,
        fontFamily: 'Poppins_500Medium',
        color: "#F5F5F7",
        lineHeight: 25,
        letterSpacing: -0.02
    },
    carouselWrapper: {
        marginTop: -80, // faz o carrossel subir por cima do header
    },
})