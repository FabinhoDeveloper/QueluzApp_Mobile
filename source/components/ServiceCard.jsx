import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function ServiceCard({ serviceName, departmentName, departmentIcon, color, linkTarget }) {
    const navigation = useNavigation()
    
    return (
        <TouchableOpacity style={styles.container} onPress={
            linkTarget ? () => {
                if (typeof linkTarget === "string") {
                    navigation.navigate(linkTarget);
                } else if (typeof linkTarget === "object" && linkTarget.stack) {
                    navigation.navigate(linkTarget.stack, {
                    screen: linkTarget.screen,
                });
            }
        } : undefined }>
            <View style={styles.nameArea}>
                <Text style={styles.serviceName}>{serviceName}</Text>
            </View>
            <View style={[styles.departmentNameArea, color ? {backgroundColor: color} : {backgroundColor: "#0C447F"}]}>
                <Image style={styles.departmentIcon} source={departmentIcon ? departmentIcon : require("../../assets/images/mini_icons/miniIcon_saude_branco.png")}/>
                <Text style={styles.departmentName}>{departmentName ? departmentName : "Secretaria de Saúde"}</Text>
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
        color: '#0C447F',
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
    },
    departmentNameArea: {
        height: '25%',
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
