import { StyleSheet, View, ScrollView } from "react-native"

import MainHeader from "../components/MainHeader"
import NewsCarousel from "../components/NewsCarousel"

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <MainHeader/>
            <View style={styles.carouselWrapper}>
                <NewsCarousel/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    carouselWrapper: {
        marginTop: -80, // faz o carrossel subir por cima do header
  },
})
