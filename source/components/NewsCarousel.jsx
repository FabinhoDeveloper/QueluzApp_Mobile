import { StyleSheet, FlatList } from "react-native";
import News from "./News";

// Posteriormente, haverá uma integração com API    
const news = [
  {
    title: "Obras e Esporte têm atuação conjunta para reformar quadras do município",
    source: require("../../assets/images/imagem_noticia.png"),
  },
  {
    title: "Alunos do futsal de Queluz brilham em amistoso na cidade de Lorena-SP",
    source: require("../../assets/images/imagem_noticia.png"),
  },
  {
    title: "Saúde tem novo encontro no programa de Educação Continuada para melhor atender os munícipes",
    source: require("../../assets/images/imagem_noticia.png"),
  },
  {
    title: "Saúde mantém cidade segura contra Aedes Aegypt durante todo o ano",
    source: require("../../assets/images/imagem_noticia.png"),
  },
  {
    title: "População de Queluz terá acesso mais rápido e seguro a remédios com novo sistema",
    source: require("../../assets/images/imagem_noticia.png"),
  },
];

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
