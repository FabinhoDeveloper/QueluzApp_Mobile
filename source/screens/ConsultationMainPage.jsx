import { View, StyleSheet } from "react-native";

import SecondaryStackHeader from "../components/SecondaryStackHeader";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryButton from "../components/SecondaryButton";
import FormSection from "../components/FormSection";
import TripCard from "../components/TripCard";
import ConsultationCard from "../components/ConsultationCard";

export default function ConsultationMainPage() {
    return (
        <ScrollViewWithMarginBottom size={100}>
            <SecondaryStackHeader title={"Agendamento\nde Consulta"} color={"#228D9C"}/>
            <View style={styles.mainContent}>
                <FormSection marginBottom={true}>
                    <SecondaryButton title={"Agendar consulta"} linkTarget={"ConsultationForm"}/>
                </FormSection>

                <FormSection title={"Minhas consultas"}>
                    <View style={styles.tripRecords}>
                        <ConsultationCard status={"Consulta agendada"} specialistType={"Oftalmologista"} local={"ESF - Palha"} data={"02/02/2025"}/>
                        <ConsultationCard status={"Consulta cancelada"} specialistType={"Endocrinologista"} local={"ESF - Palha"} data={"02/02/2025"}/>
                        <ConsultationCard status={"Aguardando vaga"} specialistType={"Ginecologista"} local={"ESF - Palha"} data={"02/02/2025"}/>
            
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
