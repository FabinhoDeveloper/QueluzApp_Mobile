import { StyleSheet, Text, View } from "react-native";

import SecondaryStackHeader from "../components/SecondaryStackHeader";
import FormSection from "../components/FormSection";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import InfoCard from "../components/InfoCard";
import NeutralButton from "../components/NeutralButton";
import ConfirmationButton from "../components/ConfirmationButton";

import { TextInput } from "react-native-gesture-handler";

export default function TripReview() {
    return (
        <ScrollViewWithMarginBottom size={100}>
            <SecondaryStackHeader title={"Solicitação\nde Viagem"} color={"#228D9C"}/>
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
                            { value: "Santa Casa de Aparecida", bold: true },
                            { label: "Endereço", value: "Rua Manoel de Santos Marques, 234, Centro, Aparecida/SP" },
                            { label: "Data", value: "29/10/2025" },
                            { label: "Horário", value: "15h30" },
                        ]}
                    />

                    <InfoCard
                        title={"ACOMPANHANTE"}
                        items={[
                            { value: "Érika Aparecida Teixeira Francisco dos Santos", bold: true },
                            { label: "Endereço", value: "Rua Manoel de Santos Marques, 234, Centro, Aparecida/SP" },
                            { label: "Telefone", value: "(12) 99707-9759" },
                        ]}
                    />
            </View>
            
            <View style={{gap: 10}}>
                <NeutralButton text={"Não está certo"}/>
                <ConfirmationButton text={"Confirmar solicitação"} isActive={true}/>
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