import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function KeyboardAvoidingContainer({ children }) {
    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                { children }
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
