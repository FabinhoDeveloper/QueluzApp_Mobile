import { StyleSheet, TouchableOpacity, Text } from "react-native";

import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

export default function SecondaryButton({ title, linkTarget, onPress }) {
    const navigation = useNavigation()
    
    return (
        <TouchableOpacity style={styles.tripFormButton} onPress={linkTarget ? () => navigation.navigate(linkTarget) : onPress }>
            <Feather name="plus" size={25} color="black" />
            <Text style={[styles.tripFormButtonText, title.length > 20 ? {fontSize: 14} : {fontSize: 18}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tripFormButton: {
        width: "100%",
        height: 53,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.5)",
        borderRadius: 9,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        gap: 12
    },
    tripFormButtonText: {
        fontFamily: 'Poppins_500Medium',
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
    },
})
