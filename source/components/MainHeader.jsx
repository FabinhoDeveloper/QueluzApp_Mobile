import { Image, StyleSheet, Text, View } from "react-native";

import SearchBox from "./SearchBox";
import { useState } from "react";

export default function MainHeader() {
    const [name, setName] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.headerMainContent}>
                <View style={styles.headerTop}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerHello}>Olá,</Text>
                        <Text style={styles.headerUserName}>{name ? name : "visitante"}!</Text>
                    </View>
                    <Image style={styles.burguerMenu} source={require("../../assets/images/burguer_menu.png")}/>
                </View>

                <View style={styles.headerSearch}>
                    <Text>O que a Prefeitura de Queluz pode fazer por você hoje?</Text>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerMainContent: {
        width: '70%',
        alignItems: 'center',
        backgroundColor: '#090549ff'
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTextContainer: {
        flexDirection: 'column'
    },
    headerHello: {
        fontSize: 28.81,
        fontFamily: 'Poppins_400Regular',
        color: "#FFFFFF"
    },
    headerUserName: {
        fontSize: 28.81,
        fontFamily: 'Poppins_700Bold',
        color: "#FFFFFF"
    },
    burguerMenu: {
        height: 20.44,
        width: 20.44
    }
})