import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default function NewsCardFromPage({ title, source, category, date }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageArea}>
                <Image 
                    source={source} 
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            
            <View style={styles.contentArea}>
                <View style={styles.categoryTag}>
                    <Text style={styles.categoryText}>Educação</Text>
                </View>
                
                <Text style={styles.title} numberOfLines={4}>
                    {title}
                </Text>
                
                <Text style={styles.date}>há 1 dia</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ 
    container: {
        height: 130,
        width: '100%',
        borderRadius: 13,
        backgroundColor: '#fff',
        flexDirection: 'row',
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    imageArea: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        width: 120,
        height: '100%',
    },
    image: {
        borderRadius: 13,
        width: '100%',
        height: '100%',
    },
    contentArea: {
        flex: 1,
        padding: 12,
        justifyContent: 'space-between',
    },
    categoryTag: {
        backgroundColor: '#FFC700', // Cor amarela como na imagem
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    categoryText: {
        color: '#000',
        fontSize: 9,
        fontFamily: 'Poppins_400Regular',
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        color: '#000',
        lineHeight: 13,
    },
    date: {
        fontSize: 8,
        fontFamily: 'Poppins_400Regular',
        color: '#666',
    }
})