import NeutralButton from "./NeutralButton"
import { StyleSheet, View, Text } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

export default function SuccessMessage(props) {
    const navigation = useNavigation()

    return (
        <View style={styles.mainContent}>
            <View style={styles.confirmationIcon}>
                <Feather name="check" size={56} color="white" />
            </View>

            <Text style={styles.mainTitle}>{"Recebemos sua\nsolicitação"}</Text>

            <Text style={styles.mainText}>
                {props.text}
            </Text>
            
            <NeutralButton text={"Voltar"} onPress={() => navigation.navigate("ServicesNavigation")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        height: '60%',
        marginHorizontal: 20,
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmationIcon: {
        backgroundColor: '#3E7F0C',
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
