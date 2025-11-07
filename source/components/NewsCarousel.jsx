import { StyleSheet, FlatList } from "react-native";
import News from "./News";

// Posteriormente, haverá uma integração com API    
import news from '../constants/newsList.js'

export default function NewsCarousel() {
  return (
    <FlatList
        contentContainerStyle={styles.content}
        style={styles.container}
        data={news}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
            <News title={item.title} source={item.source} />
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
