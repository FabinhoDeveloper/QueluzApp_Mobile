import { StyleSheet, View, Text } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfilePic() {
    const { user } = useAuth()

    const cpfRaw = Array.isArray(user.cpf) ? user.cpf.join('') : String(user.cpf || '');
    const digitsOnly = cpfRaw.replace(/\D/g, ''); 
    const first3 = digitsOnly.slice(0, 3);

    const sobrenomeRaw = Array.isArray(user.sobrenome) ? user.sobrenome.join(' ') : String(user.sobrenome || '');
    const firstSobrenomePart = sobrenomeRaw.trim().split(/\s+/)[0] || '';

    return (
        <View style={styles.container}>
            <View style={styles.profilePicture}>
                <Ionicons name="person-outline" size={70} color="black" />
            </View>
            <View style={styles.userDataArea}>
                <Text style={styles.username}>{user.primeiroNome} {firstSobrenomePart}</Text>
                <Text style={styles.userCpf}>CPF {first3}.***.***-**</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePicture: {
        width: 140,              // largura
        height: 140,             // altura igual
        borderRadius: 70,       // metade da largura
        backgroundColor: "#d3d3d3ff", // cor de fundo da “bola”
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    userDataArea: {

    },
    username: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 19
    },
    userCpf: {
        fontFamily: 'Poppins_400Regular',
        color: '#ABABAB'
    }
})
