import { StyleSheet, View, Text } from "react-native";

import MainHeader from "../components/MainHeader";

export default function SearchServices() {
    return (
        <View style={styles.container}>
            <MainHeader/>
            <Text>SearchServices</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})
