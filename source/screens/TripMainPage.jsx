import { ScrollView, StyleSheet, View } from "react-native";

import SecondaryStackHeader from "../components/SecondaryStackHeader";
import TripCard from "../components/TripCard";

export default function TripMainPage() {
    return (
        <ScrollView style={styles.container}>
            <SecondaryStackHeader title={"Solicitação\nde Viagem"} color={"#228D9C"}/>
            <View style={styles.mainContent}>
                <TripCard status={"Confirmada"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                <TripCard status={"Realizada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                <TripCard status={"Pendente"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                <TripCard status={"Cancelada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                <TripCard status={"Confirmada"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                <TripCard status={"Realizada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                <TripCard status={"Pendente"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                <TripCard status={"Cancelada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                <TripCard status={"Confirmada"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                <TripCard status={"Realizada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                <TripCard status={"Pendente"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                <TripCard status={"Cancelada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                <TripCard status={"Confirmada"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                <TripCard status={"Realizada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                <TripCard status={"Pendente"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                <TripCard status={"Cancelada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        marginHorizontal: 20,
        gap: 8
    }
})
