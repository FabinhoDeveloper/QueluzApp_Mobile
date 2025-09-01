import { StyleSheet, View, Text } from "react-native";

export default function FormSection({ marginBottom, children, title }) {
    return (
        <View style={[
            styles.container, 
            marginBottom ? { borderBottomWidth: 1, paddingBottom: 30 } : undefined, 
            !title ? { paddingTop: 25 } : undefined
        ]}>
            {title && <Text style={styles.title}>{title}</Text>}
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins_400Regular',
        marginVertical: 20
    }
})
