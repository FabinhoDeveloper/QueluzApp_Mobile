import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButton({ titulo }) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{ titulo }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0C447F',
        width: 313.97,
        height: 41.31,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 500,
        color: '#F5F5F7',
    }
})
