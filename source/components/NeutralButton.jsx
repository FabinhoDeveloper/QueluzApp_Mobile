import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function NeutralButton(props) {
    return (
        <TouchableOpacity 
            onPress={props.onPress}
            style={styles.container}
        >
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9',
        width: '100%',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
    }
})
