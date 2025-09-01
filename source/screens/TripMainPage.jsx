import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";

import SecondaryStackHeader from "../components/SecondaryStackHeader";
import TripCard from "../components/TripCard";
import FormSection from "../components/FormSection";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryButton from "../components/SecondaryButton";

export default function TripMainPage() {
    return (
        <ScrollViewWithMarginBottom size={100}>
            <SecondaryStackHeader title={"Solicitação\nde Viagem"} color={"#228D9C"}/>
            <View style={styles.mainContent}>
                <FormSection marginBottom={true}>
                    <SecondaryButton title={"Solicitar viagem"} linkTarget={"TripForm"}/>
                </FormSection>

                <FormSection title={"Minhas viagens"}>
                    <View style={styles.tripRecords}>
                        <TripCard status={"Confirmada"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                        <TripCard status={"Cancelada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                        <TripCard status={"Pendente"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                        <TripCard status={"Confirmada"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                        <TripCard status={"Cancelada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                        <TripCard status={"Pendente"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                    </View>
                </FormSection>
            </View>
        </ScrollViewWithMarginBottom>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        marginHorizontal: 20,
    },
    tripRecords: {
        gap: 8    
    }
})
