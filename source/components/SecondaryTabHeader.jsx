import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useAuth } from "../contexts/AuthContext";

export default function SecondaryTabHeader() {
    const {user} = useAuth()

    return (
        <View style={styles.container}>
            <View style={styles.headerMainContent}>
                <View style={styles.headerTop}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerHello}>Olá,</Text>
                        <Text style={styles.headerUserName}>{user ? user.first_name : "visitante"}!</Text>
                    </View>
                    <TouchableOpacity>
                        <Feather name="menu" size={24} color="white" />
                    </TouchableOpacity>                                                           
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
        marginBottom: 100,
    },
    questionText: {
        fontSize: 16,
        fontFamily: 'Poppins_500Medium',
        color: "#F5F5F7",
        lineHeight: 25,
        letterSpacing: -0.02
    },
    carouselWrapper: {
        marginTop: -60, // faz o carrossel subir por cima do header
        paddingLeft: 20, // só pra alinhar
    },
})