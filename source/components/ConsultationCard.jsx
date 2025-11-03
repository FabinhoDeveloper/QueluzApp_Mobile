import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Feather from '@expo/vector-icons/Feather';

export default function ConsultationCard({ status, specialistType, local, data }) {
    function getBackgroundColor(status) {
        switch (status) {
            case "Consulta cancelada":
                return { backgroundColor: "#b11308" };
            case "Consulta realizada":
                return { backgroundColor: "#3E7F0C" };
            case "Consulta agendada":
                return { backgroundColor: "#3E7F0C" };
            case "Aguardando vaga":
                return { backgroundColor: "#e6a100" };
            default:
                return { backgroundColor: "#888" };
        }
    }

    function getStatusIcon(status) {
        switch(status) {
            case "Consulta cancelada":
                return ( <Feather name="x" size={32} color="white" /> )
            case "Consulta realizada":0
                return ( <Feather name="check" size={32} color="white" />)
            case "Consulta agendada":
                return ( <Feather name="calendar" size={32} color="white" />)
            case "Aguardando vaga":
                return ( <Feather name="clock" size={32} color="white" />)
            default:
                return ( undefined ) 
        }
    }

    return (
        <View style={styles.container}>        
            <View style={styles.iconArea}>
                <View style={[
                    styles.icon, 
                    getBackgroundColor(status)]}
                > 
                    { getStatusIcon(status) }
                    
                </View>
            </View>

            <View style={styles.informationArea}>
                <Text style={styles.statusText}>Status: {status}</Text>
                <Text style={styles.localText}>{specialistType}</Text>
                <Text style={styles.dataText}>{local} - {data}</Text>
            </View>
            
            <View style={styles.linkArea}>
                <TouchableOpacity>
                    <Text style={styles.linkText}>ver detalhes</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 89,
        borderRadius: 8,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        overflow: 'hidden'
    },
    iconArea: {
        width: '20%',
        justifyContent: 'center',
        alignItems: "flex-end",
        // backgroundColor: '#868686ff'
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    informationArea: {
        width: '60%',
        justifyContent: 'center',
        gap: 2,
        // backgroundColor: '#645656ff',
        paddingLeft: 5
    },
    statusText: {
        fontFamily: "Poppins_300Light",
        fontSize: 12,
        lineHeight: 16
    },
    localText: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 13,
        lineHeight: 18
    },
    dataText: {
        fontFamily: "Poppins_300Light",
        fontSize: 13,
        lineHeight: 14
    },
    linkArea: {
        width: '20%',
        justifyContent: 'flex-end',
        // backgroundColor: '#464646ff'
    },
    linkText: {
        fontFamily: 'Poppins_300Light',
        fontSize: 10,
        color: '#0C447F',
        textDecorationLine: 'underline',
        marginBottom: 12,
        marginLeft: -7
    }
})