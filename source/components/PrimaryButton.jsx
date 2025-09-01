import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PrimaryButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{ text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0C447F',
        elevation: 8, 
        shadowColor: '#000', 
        width: 313.97,
        height: 41.31,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    buttonText: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        fontWeight: 500,
        color: '#F5F5F7',
    }
})
