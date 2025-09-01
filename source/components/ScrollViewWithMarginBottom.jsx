// Usado em telas aonde haverá o bottom tab navigator

import { ScrollView, StyleSheet } from "react-native";

export default function ScrollViewWithMarginBottom({ children, size }) {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: size }}>
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
