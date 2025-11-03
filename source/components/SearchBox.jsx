import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

export default function SearchBox({ onFocus, onBlur }) {
    const [value, setValue] = useState("")
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.iconArea}>
                <Feather name="search" size={22} color="rgba(0,0,0,0.25)"/>
            </View>
            
            <View style={styles.textArea}>
                <TextInput
                    style={styles.text}
                    placeholder="Buscar serviço..."
                    placeholderTextColor="rgba(0,0,0,0.25)"
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    maxLength={35}
                    onFocus={() => onFocus?.()}
                    onBlur={() => onBlur?.()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        gap: 6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderColor: "rgba(0,0,0,0.3)", // borda 30% opacidade
        backgroundColor: '#FFFFFF'
    },

    textArea: {
        width: '90%'
    },
    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
        color: "rgba(0,0,0,0.25)"
    }
})
