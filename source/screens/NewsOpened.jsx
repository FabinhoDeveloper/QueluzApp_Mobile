import { Image, StyleSheet, Text, View } from "react-native";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import { useRoute } from "@react-navigation/native";

export default function NewsOpened() {
    const route = useRoute()
    const { title, source } = route.params

    return (
        <View>
            <SecondaryStackHeader title={"Notícias"}/>
            <View style={styles.topContainer}>
                <Image style={styles.image} source={source}/>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <View>
                        <Text style={{ backgroundColor: '#E0B60C' }}>EDUCAÇÃO</Text>
                        <Text>há 7 dias</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        marginHorizontal: 30,
        marginTop: 20,
        gap: 20
    },
    image: {
        width: '100%',
        height: 204,
        borderRadius: 15
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
    },
    dateText: {

    }
})