import { StyleSheet, View } from "react-native"
import MainHeader from "../components/MainHeader"

export default function Home() {
    return (
        <View style={styles.container}>
            <MainHeader/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})