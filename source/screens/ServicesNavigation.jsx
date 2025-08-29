import { StyleSheet, Text, View } from "react-native";

import SecondaryTabHeader from "../components/SecondaryTabHeader";
import SecondaryStackHeader from "../components/SecondaryStackHeader";

export default function ServicesNavigation() {
    return (
        <View styles={styles.container}>
            <SecondaryStackHeader title={"Administração"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
