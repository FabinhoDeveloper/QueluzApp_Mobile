import { ScrollView, StyleSheet, Text, View } from "react-native";

import SecondaryTabHeader from "../components/SecondaryTabHeader";
import HomeSection from "../components/HomeSection";
import NewsCardFromPage from '../components/NewsCardFromPage.jsx'
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import { useNavigation } from "@react-navigation/native";

import news from '../constants/newsList.js'

export default function NewsPage() {
    const navigation = useNavigation()

    return (
        <ScrollViewWithMarginBottom size={100}>
            <SecondaryTabHeader/>
            <View style={styles.mainContent}>
                <View style={styles.newsContainer}>
                    {news.map((news) => {
                        return (
                            <NewsCardFromPage key={news.title} title={news.title} source={news.source} onPress={() => navigation.navigate("NewsOpened", {
                                title: news.title,
                                source: news.source
                            })}/>
                        )
                    })}
                </View>
            </View>
        </ScrollViewWithMarginBottom>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 25
    },
    newsContainer: {
        gap: 14,
    }
})