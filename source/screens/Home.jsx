import { StyleSheet, View, ScrollView } from "react-native"
import MainHeader from "../components/MainHeader"

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <MainHeader/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
