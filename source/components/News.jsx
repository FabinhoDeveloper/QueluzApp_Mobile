import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default function News({ title, source }) { // Posteriormente, a imagem será dinamica
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log("Noticia selecionada")}>
                <Image  
                    source={source}
                    style={styles.image}    
                />

                <Text style={styles.title}>{ title }</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        height: 202,
        width: 344,
        borderRadius: 13,
        overflow: 'hidden',
        
    },
    image: {
        width: '100%',
        height: '100%',
        elevation: 7
    },
    title: {
        position: 'absolute',
        fontFamily: 'Poppins_500Medium',
        textShadowRadius: 20,
        bottom: 15,
        left: 15,
        right: 15,
        color: "#F5F5F7",
        fontSize: 13
    }
})
