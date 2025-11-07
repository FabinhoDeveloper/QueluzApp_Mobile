import { ScrollView, StyleSheet, Text, View } from "react-native";

import SecondaryTabHeader from "../components/SecondaryTabHeader";
import HomeSection from "../components/HomeSection";
import News from "../components/News";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";

import news from '../constants/newsList.js'

export default function NewsPage() {
    return (
        <ScrollViewWithMarginBottom size={80}>
            <SecondaryTabHeader/>
            <View style={styles.mainContent}>
                <HomeSection title={"Notícias do Município"}>
                    <View style={styles.newsContainer}>
                        {news.map((news) => {
                            return (
                                <News key={news.title} title={news.title} source={news.source}/>
                            )
                        })}
                    </View>
                </HomeSection>
            </View>
        </ScrollViewWithMarginBottom>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        marginHorizontal: 20
    },
    newsContainer: {
        gap: 14,
    }
})