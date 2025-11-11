import { StyleSheet, FlatList } from "react-native";
import News from "./News";
import { useNavigation } from "@react-navigation/native";

// Posteriormente, haverá uma integração com API    
import news from '../constants/newsList.js'
import { useEffect } from "react";

export default function NewsCarousel() {
  const navigation = useNavigation()

  return (
    <FlatList
        contentContainerStyle={styles.content}
        style={styles.container}
        data={news}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
            <News onPress={() => navigation.navigate("NewsOpened", {
                title: item.title,
                source: item.source,
            })} title={item.title} source={item.source} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
    container: {
        
    },
    content: {
        gap: 5,
        paddingLeft: 20,
        paddingRight: 20
    }
});
