import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function CourseCard({ courseName, source }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>                
                <Image source={source}/>
            </TouchableOpacity>
            <Text style={styles.courseName}>{courseName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        alignItems: 'center',
        gap: 8
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 11,
        width: 104,
        height: 158
    },
    courseName: {
        fontSize: 11,
        fontFamily: 'Poppins_500Medium',
        letterSpacing: -0.2,
        textAlign: 'center'
    }
})