import { View, StyleSheet } from "react-native";

import SecondaryStackHeader from "../components/SecondaryStackHeader";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryButton from "../components/SecondaryButton";
import FormSection from "../components/FormSection";
import ConsultationCard from "../components/ConsultationCard";
import LoginRequired from '../components/LoginRequired'
import { useAuth } from "../contexts/AuthContext";

export default function ConsultationMainPage() {
    const { user } = useAuth()

    return (
        <ScrollViewWithMarginBottom size={100}>
            <SecondaryStackHeader title={"Agendamento\nde Consulta"} color={"#228D9C"}/>
            { user ? (
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
            ) : (
                <LoginRequired/>
            ) }
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
