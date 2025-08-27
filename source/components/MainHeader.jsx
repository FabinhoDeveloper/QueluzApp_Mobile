import { Image, StyleSheet, Text, View } from "react-native";

import SearchBox from "./SearchBox";
import { useState } from "react";

export default function MainHeader() {
    const [name, setName] = useState("Fábio")

    return (
        <View style={styles.container}>
            <View style={styles.headerMainContent}>
                <View style={styles.headerTop}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerHello}>Olá,</Text>
                        <Text style={styles.headerUserName}>{name ? name : "visitante"}!</Text>
                    </View>
                    {/* <Image style={styles.burguerMenu} source={require("../../assets/images/burguer_menu.png")}/> */}
                </View>

                <View style={styles.headerSearch}>
                    <Text style={styles.questionText}>O que a Prefeitura de Queluz{'\n'}pode fazer por você hoje?</Text>
                    <SearchBox/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0C447F',
        height: 434,
        borderBottomLeftRadius: 72,
        borderBottomRightRadius: 72,
        paddingTop: 66,
        paddingHorizontal: 32,
        elevation: 8,
        shadowColor: "#000"
    },
    headerMainContent: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTextContainer: {
        flexDirection: 'column',
        flex: 1
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
        marginBottom: 70,
    },
    questionText: {
        fontSize: 16,
        fontFamily: 'Poppins_500Medium',
        color: "#F5F5F7",
        lineHeight: 25,
        letterSpacing: -0.02
    }
})