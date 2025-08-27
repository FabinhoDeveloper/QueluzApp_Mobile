import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function ServiceCard({ serviceName }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.nameArea}>
                <Text style={styles.serviceName}>{serviceName}</Text>
            </View>
            <View style={styles.departmentNameArea}>
                <Image style={styles.departmentIcon} source={require("../../assets/images/mini_icons/miniIcon_saude_branco.png")}/>
                <Text style={styles.departmentName}>Secretaria de Saúde</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#BFBFBF',
        height: 81,
        borderRadius: 9,
        justifyContent: 'space-between',
        overflow: 'hidden', // Nada passar o limite do container
    },
    nameArea: {
        height: '75%',
        justifyContent: 'center',
        paddingHorizontal: 14,
    },
    serviceName: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        color: '#0C447F'
    },
    departmentNameArea: {
        height: '25%',
        backgroundColor: '#228D9C',
        paddingHorizontal: 14,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        

    },
    departmentName: {
        fontSize: 11,
        fontFamily: 'Poppins_200ExtraLight',
        color: '#F5F5F7'
    },
    departmentIcon: {
        width: 13,
        height: 12
    }
})
