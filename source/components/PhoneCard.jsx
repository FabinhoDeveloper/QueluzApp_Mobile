import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Linking } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

export default function PhoneCard({ name, address, phone }) {
    const [isOpened, setIsOpened] = useState(false) 
    
    return (
        <TouchableOpacity style={styles.container} onPress={() => setIsOpened(!isOpened)}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>{name}</Text>
                <Ionicons name="chevron-down" size={20} color="#0C447F" />
            </View>
            {isOpened && (
                <View style={styles.informationArea}>
                    <Text style={styles.informationText}>{address}</Text>
                    <TouchableOpacity style={styles.phoneButton}>
                        <Feather name="phone" size={13} color="white" />
                        <Text onPress={() => Linking.openURL(`tel:${phone}`)} style={styles.phoneText}>{phone}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.25)',
        width: 333,
    },
    titleArea: {
        height: 50,
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    title: {
        fontFamily: 'Poppins_600SemiBold'
    },
    informationArea: {
        justifyContent: 'center',
        height: 64,
        backgroundColor: '#F0F0F0',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#0C447F',
        paddingHorizontal: 20
    },
    informationText: {
        fontFamily: 'Poppins_300Light',
        fontSize: 12,
        color: '#878787'
    },
    phoneButton: {
        borderRadius: 10,
        backgroundColor: '#3E7F0C',
        height: 25,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 6
    },
    phoneText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 12,
        color: '#FFF',
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
    }
})