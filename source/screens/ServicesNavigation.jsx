import { StyleSheet, View } from "react-native";

import SecondaryHeader from "../components/SecondaryStackHeader";

export default function ServicesNavigation() {
    return (
        <View styles={styles.container}>
            <SecondaryHeader/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
