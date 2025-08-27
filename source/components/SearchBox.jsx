import { useState } from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default function SearchBox() {
    const [value, setValue] = useState("")

    return (
        <View style={styles.container}>
            <Feather name="search" size={22} color="rgba(0,0,0,0.3)" />
            <TextInput
                style={styles.text}
                placeholder="Buscar serviço..."
                placeholderTextColor="rgba(0,0,0,0.3)"
                value={value}
                onChangeText={(text) => setValue(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        gap: 15.5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderColor: "rgba(0,0,0,0.25)", // borda 30% opacidade
        backgroundColor: '#FFFFFF'
    },
    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
        textAlign: 'left',
        color: "rgba(0,0,0,0.25)"
    }
})
