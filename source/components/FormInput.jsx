import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function FormInput(props) {
    return (
        <TextInput
            style={styles.textInput}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: 313.97,
        height: 41.31,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 12,
        paddingHorizontal: 15,
        lineHeight: 1,
        color: "#636364",
        letterSpacing: 0.03,
        fontWeight: 300,
        fontSize: 14
    }
})
