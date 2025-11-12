import NeutralButton from "./NeutralButton"
import { StyleSheet, View, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "./PrimaryButton";
import { useAuth } from "../contexts/AuthContext";

export default function LoginRequired(props) {
    const navigation = useNavigation()
    const { logout } = useAuth()

    return (
        <View style={styles.mainContent}>
            <View style={{alignItems: 'center', gap: 15}}>
                <View style={styles.confirmationIcon}>
                    <Ionicons name="lock-closed-outline" size={56} color="white" />            
                </View>

                <Text style={styles.mainTitle}>{"Ops!\nVocê ainda não fez login"}</Text>

                <Text style={styles.mainText}>
                    Para acessar essa tela, faça login na sua conta. Caso ainda não possua uma, realize seu cadastro.
                </Text>
            </View>
            
            <View style={{gap: 10, width: '100%'}}>
                <NeutralButton text={"Tela de Login"} onPress={() => logout()}/>
                <NeutralButton text={"Voltar"} onPress={() => navigation.goBack()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        height: '100%',
        marginHorizontal: 20,
        gap: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmationIcon: {
        backgroundColor: '#E0B60C',
        height: 103,
        width: 103,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainTitle: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Poppins_500Medium'
    },
    mainText: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Poppins_500Medium'
    }
})
