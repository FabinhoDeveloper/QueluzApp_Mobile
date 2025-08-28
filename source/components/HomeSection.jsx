import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeSection({ title, linkForMore, linkText, children }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.mainTitle}>{ title }</Text>
                {linkForMore && (
                    <TouchableOpacity>
                        <Text style={styles.titleLink}>{linkText ? linkText : "Ver mais"}</Text>
                    </TouchableOpacity>
                )}
            </View>
            { children ? children : 
                <View style={{paddingTop: 50, paddingBottom: 50, alignItems: 'center'}}>
                    <Text style={{ fontFamily: 'Poppins_500Medium', textDecorationStyle: 'double'}}>Nada a encontrar aqui ainda!</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    },
    titleArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    mainTitle: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16
    },
    titleLink: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 11,
        textDecorationLine: 'underline',
        color: '#0C447F'
    }
})
