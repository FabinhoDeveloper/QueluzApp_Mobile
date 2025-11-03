import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SecondaryButton from "../components/SecondaryButton";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import CustomCheckBox from "../components/CustomCheckBox";
import FormSection from "../components/FormSection";
import FormInput from "../components/FormInput";
import FormPicker from "../components/FormPicker";
import KeyboardAvoidingContainer from "../components/KeyboardAvoidingContainer";
import NeutralButton from "../components/NeutralButton";
import ConfirmationButton from "../components/ConfirmationButton";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";

import applyCpfMask from "../utils/applyCpfMask";

export default function ConsultationForm() {
    const [selectedOption, setSelectedOption] = useState("Para mim")
    const [isAbleToPress, setIsAbleToPress] = useState(true) // Posteriormente, será trocado para false, sendo  possivel apenas confirmar a solicitacao preechendo todos os dados
    const [isUBSSelected, setIsUBSSelected] = useState(false)
    
    const navigation = useNavigation()
    const { user } = useAuth()

    const options = [
        { label: "Para mim", value: "Para mim" },
        { label: "Para outra pessoa", value: "Para outra pessoa" },
    ];

    return (    
        <KeyboardAvoidingContainer>
        <ScrollViewWithMarginBottom size={120}>
            <SecondaryStackHeader title={"Agendamento\nde Consulta"} color={"#228D9C"}/>
            <View style={styles.container}>
                <FormSection marginBottom={true}>
                    <CustomCheckBox
                        options={options}
                        selected={selectedOption}
                        onSelect={setSelectedOption}
                    />
                </FormSection>

                <FormSection marginBottom={true}>
                    <View style={styles.formSection}>
                        <FormInput name={"Primeiro nome"} value={selectedOption === "Para mim" ? user.first_name : ""}/>
                        <FormInput name={"Sobrenome"} value={selectedOption === "Para mim" ? user.surname : ""}/>
                        <FormInput name={"CPF"} value={selectedOption === "Para mim" ? applyCpfMask(user.cpf) : ""}/>
                        <FormInput name={"Número de Cadastro do SUS"}/>
                        <FormPicker name="Unidade" list={["ESF - Palha", "ESF - União", "ESF - Porteira", "ESF - Figueira"]} onValueChange={() => setIsUBSSelected(true)}/>
                        
                        {isUBSSelected && <FormPicker name="Especialidade" list={["Elogio", "Reclamação", "Sugestão", "Informação"]}/>} 

                        
                    </View>
                </FormSection>


                <FormSection>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '35%'}}>
                            <NeutralButton text={"Cancelar"}/>
                        </View>
                        <View style={{ width: '60%'}}>
                            <ConfirmationButton text={"Prosseguir"} isActive={isAbleToPress} onPress={() => navigation.navigate("ConsultationReview")}/>    
                        </View>
                    </View>
                </FormSection>
            </View>
        </ScrollViewWithMarginBottom>
        </KeyboardAvoidingContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    formSection: {
        gap: 15
    },
    formFooter: {
        flexDirection: 'row', 
        gap: 35, 
    },
    formFooterRow: {
        width: '40%'
    }
})