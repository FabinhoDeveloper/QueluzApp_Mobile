import { StyleSheet, Text, View } from "react-native";

import SecondaryStackHeader from "../components/SecondaryStackHeader";
import FormSection from "../components/FormSection";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import InfoCard from "../components/InfoCard";
import NeutralButton from "../components/NeutralButton";
import ConfirmationButton from "../components/ConfirmationButton";
import { useNavigation } from "@react-navigation/native";

export default function ConsultationReview() {
    const navigation = useNavigation()

    return (
        <ScrollViewWithMarginBottom size={100}>
            <SecondaryStackHeader title={"Agendamento\nde Consulta"} color={"#228D9C"}/>
            <View style={styles.mainContainer}>
                <View style={styles.infoCardsContainer}>
                    <FormSection marginBottom={true} title={"Revise suas informações"}></FormSection>
                    <InfoCard
                        title={"PACIENTE"}
                        items={[
                            { value: "Fábio Ezequiel Teixeira dos Santos", bold: true },
                            { label: "E-mail", value: "fabioezequiel555@gmail.com" },
                            { label: "Telefone", value: "(24) 99275-3941" },
                            { label: "Endereço", value: "Rua Corifeu de Azevedo Marques, 435, São Miguel" },
                        ]}
                    />
                    
                    <InfoCard
                        title={"CONSULTA"}
                        items={[
                            { value: "Cardiologista", bold: true },
                            { label: "Endereço", value: "ESF da Palha - Rua Corifeu de Azendo Marques, 000, Queluz (SP)" },
                            { label: "Data", value: "29/10/2025" },
                            { label: "Horário", value: "15h30" },
                        ]}
                    />

                    <InfoCard
                        title={"RESPONSÁVEL PELA CONSULTA"}
                        items={[
                            { value: "Érika Aparecida Teixeira Francisco dos Santos", bold: true },
                            { label: "Telefone", value: "(12) 99707-9759" },
                            { label: "Endereço", value: "Rua Custódio Martins, 294" }
                        ]}
                    />
            </View>
            
            <View style={{gap: 10}}>
                <NeutralButton text={"Não está certo"} onPress={() => navigation.goBack()}/>
                <ConfirmationButton text={"Confirmar agendamento"} isActive={true} onPress={() => navigation.navigate("ConsultationSuccess")}/>
            </View>
            
            </View>
            
        </ScrollViewWithMarginBottom>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
        gap: 35
    },
    infoCardsContainer: {  
        gap: 17 
    }
})