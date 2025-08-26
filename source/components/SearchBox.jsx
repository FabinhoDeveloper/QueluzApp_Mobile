import { View, Image, StyleSheet, TextInput } from "react-native";

export default function SearchBox() {
    return (
        <View style={styles.container}>
            <Image style={styles.searchIcon} source={require("../../assets/images/search.png")}/>
            <TextInput
                style={styles.text}
                placeholder="Buscar serviço..."
                placeholderTextColor="rgba(0,0,0,0.3)"
                maxLength={19}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 323,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        gap: 15.5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderColor: "rgba(0,0,0,0.25)", // borda 30% opacidade
    },
    searchIcon: {
        width: 24,
        height: 24
    },
    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 19.87,
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
        textAlign: 'left'
    }
})
