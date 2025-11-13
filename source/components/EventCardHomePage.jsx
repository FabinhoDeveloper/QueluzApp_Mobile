import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function EventCardHomePage() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={require("../../assets/courses/estacao-do-porco.png")}
                />
            </View>
            
            <View style={styles.informationContainer}>
                <Text style={styles.eventName}>Estação do Porco e do Doce</Text>
                
                <View>
                    <View style={styles.infoRow}>
                        <MaterialCommunityIcons name="map-marker-outline" size={15} color="#999"/>
                        <Text style={styles.subtitle}>Estação Ferroviária</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <MaterialCommunityIcons name="calendar-blank" size={15} color="#999"/>
                        <Text style={styles.subtitle}>3 a 5 de outubro</Text>
                    </View>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '48%',
        height: 185,
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        padding: 8
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 8
    },
    informationContainer: {
        padding: 2,
        gap: 5,
        height: '100%',
        justifyContent: 'flex-start',
    },
    eventName: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10,
        color: '#1D1B20',
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    
    },
    subtitle: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 9,
        color: '#49454E',
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
    }
})