import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function FormInputButton(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <TouchableOpacity style={styles.textInput} {...props}>
                <Text style={styles.placeholder}>{props.placeholder}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 13  
    },
    name: {
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
    },  
    textInput: {
        width: '100%',
        borderWidth: 1,
        justifyContent: 'center',
        height: 41.31,
        borderColor: '#C4C4C4',
        borderRadius: 12,
        paddingHorizontal: 18,  
    },
    placeholder: {
        fontFamily: 'Poppins_300Light',
        color: "#636364",
        fontSize: 14,
        // Propriedades para centralizar o placeholder
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
        textAlign: 'left', // Mantém alinhado à esquerda horizontalmente
    }
})
