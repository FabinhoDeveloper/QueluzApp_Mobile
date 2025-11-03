import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";

import TripCard from "../components/TripCard";
import FormSection from "../components/FormSection";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryButton from "../components/SecondaryButton";
import SecondaryTabHeader from "../components/SecondaryTabHeader";
import HomeSection from "../components/HomeSection";

export default function Requests() {
    return (
        <ScrollViewWithMarginBottom size={100}>
            <SecondaryTabHeader/>
            <View style={styles.mainContent}>
                <HomeSection title={"Minhas solicitações"}>
                    <View style={styles.tripRecords}>
                        <TripCard status={"Confirmada"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                        <TripCard status={"Cancelada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                        <TripCard status={"Pendente"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                        <TripCard status={"Confirmada"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                        <TripCard status={"Cancelada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                        <TripCard status={"Pendente"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                    </View>
                </HomeSection>
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
