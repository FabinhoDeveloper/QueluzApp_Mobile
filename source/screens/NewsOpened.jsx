import { Image, StyleSheet, Text, View } from "react-native";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import { useRoute } from "@react-navigation/native";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";

export default function NewsOpened() {
    const route = useRoute()
    const { title, source } = route.params

    return (
        <ScrollViewWithMarginBottom size={100}>
            <SecondaryStackHeader title={"Notícias"}/>

            <View style={styles.topContainer}>
                <View>
                    <Image style={styles.image} source={source}/>
                </View>
                
                <View style={styles.titleArea}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.subtitleContainer}>
                        <View style={styles.dateTextContainer}>
                            <Text style={styles.dateText}>EDUCAÇÃO</Text>
                        </View>
                        <Text style={styles.postDate}>há 7 dias</Text>
                    </View>
                </View>
            </View>

            <View style={styles.mainTextContainer}>
                <Text style={styles.newsText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum pellentesque odio, sed condimentum purus. Integer a metus aliquet, volutpat nisl eget, laoreet dui. Integer tempor ante nec eros semper aliquam. Nulla sit amet nibh eu est lacinia auctor ac et enim. Suspendisse potenti. Etiam viverra ac nibh vitae dictum. Mauris urna nisl, vehicula vitae nibh cursus, finibus pulvinar turpis. Pellentesque vitae mauris eget ipsum vehicula rutrum quis a erat. Duis ut ex fringilla, egestas eros ac, finibus dui. Suspendisse congue lorem turpis, quis tempor diam egestas quis.
Nullam nec libero quis velit cursus mollis. Etiam enim urna, fringilla sit amet porttitor sed, facilisis eget sem. Sed ante nisl, iaculis nec ex a, ullamcorper egestas nibh. Donec ac velit enim. Integer sem arcu, gravida id sapien sed, viverra convallis elit. Sed dictum molestie lacinia. Morbi rhoncus luctus cursus. Nullam lorem dui, auctor imperdiet sapien ut, posuere suscipit enim. Donec viverra maximus sapien, sed aliquet neque fermentum in. Integer et condimentum enim, sit amet tempor ligula. Maecenas vitae consequat purus, a tincidunt leo. Nulla tincidunt sed justo sit amet volutpat. In venenatis at enim eu auctor.
                </Text>
            </View>
        </ScrollViewWithMarginBottom>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        marginHorizontal: 24,
        marginTop: 20,
        gap: 20
    },
    image: {
        width: '100%',
        height: 204,
        borderRadius: 16,
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
    },
    dateTextContainer: {
        backgroundColor: '#E0B60C',
        width: 59,
        height: 16,
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 9,
        color: '#FFF',
    },
    subtitleContainer: {
        flexDirection: 'row',
        gap: 16
    },
    postDate: {
        fontSize: 8,
        fontFamily: 'Poppins_400Regular',
        color: '#757575'
    },
    mainTextContainer: {
        marginHorizontal: 24,
        marginTop: 30
    },
    newsText: {
        fontFamily: 'Poppins_400Regular',
        lineHeight: 21,
        textAlign: 'justify'
    }
})