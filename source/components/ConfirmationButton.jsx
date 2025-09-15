import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ConfirmationButton(props) {
    return (
        <TouchableOpacity 
            onPress={props.onPress}
            style={[styles.container, props.isUnactive ?  { backgroundColor: '#ADADAD' } : { backgroundColor: '#3E7F0C' }]}
        >
            <Text style={[styles.text, props.isUnactive ? { color: '#000' } : { color: '#FFF' }]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
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
