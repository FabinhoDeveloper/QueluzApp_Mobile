import { ScrollView, StyleSheet, Text, View } from "react-native";

import SecondaryTabHeader from "../components/SecondaryTabHeader";
import HomeSection from "../components/HomeSection";
import News from "../components/News";

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


export default function NewsPage() {
    return (
        <ScrollView>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        marginHorizontal: 20
    },
    newsContainer: {
        gap: 14,
        marginBottom: 80
    }
})