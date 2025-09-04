import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SecondaryButton from "../components/SecondaryButton";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import CustomCheckBox from "../components/CustomCheckBox";
import FormSection from "../components/FormSection";
import FormInput from "../components/FormInput";
import KeyboardAvoidingContainer from "../components/KeyboardAvoidingContainer";
import NeutralButton from "../components/NeutralButton";
import ConfirmationButton from "../components/ConfirmationButton";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";

export default function TripForm() {
    const [selectedOption, setSelectedOption] = useState("Para mim")
    const [addCompanion, setAddCompanion] = useState(false)
    const [isAbleToPress, setIsAbleToPress] = useState(true) // Posteriormente, será trocado para false, sendo  possivel apenas confirmar a solicitacao preechendo todos os dados
    const navigation = useNavigation()
    const { user } = useAuth()

    const options = [
        { label: "Para mim", value: "Para mim" },
        { label: "Para outra pessoa", value: "Para outra pessoa" },
    ];

    return (    
        <KeyboardAvoidingContainer>
        <ScrollViewWithMarginBottom size={120}>
            <SecondaryStackHeader title={"Solicitação\nde Viagem"} color={"#228D9C"}/>
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
                        <FormInput name={"E-mail"} value={selectedOption === "Para mim" ? user.email : ""}/>
                        <FormInput name={"Telefone"} value={selectedOption === "Para mim" ? user.cellphone : ""}/>
                        <FormInput name={"Endereço"} value={selectedOption === "Para mim" ? user.address : ""}/>
                    </View>
                </FormSection>

                <FormSection marginBottom={true}>
                    <View style={styles.formSection}>
                        <FormInput name={"Local da consulta"}/>
                        <FormInput name={"Endereço"}/>
                        <FormInput name={"Comprovante de solicitação"}/>
                    </View>

                    <View style={styles.formFooter}>
                        <View style={styles.formFooterRow}>
                            <FormInput name={"Data"}/>
                        </View>
                        
                        <View style={styles.formFooterRow}>
                            <FormInput name={"Hora"}/>
                        </View>
                    </View>
                </FormSection>

                <FormSection>
                    <SecondaryButton title={addCompanion ? "Remover acompanhante" : "Adicionar acompanhante (Max. 1)"} onPress={() => setAddCompanion(!addCompanion)}/>
                </FormSection>

                {addCompanion && (
                    <FormSection marginBottom={true}>
                        <View style={styles.formSection}>
                            <FormInput name={"Nome completo"}/>
                            <FormInput name={"Telefone"}/>
                            <FormInput name={"E-mail"}/>
                            <FormInput name={"Endereço"}/>
                        </View>
                    </FormSection>
                )}

                <FormSection>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '35%'}}>
                            <NeutralButton text={"Cancelar"}/>
                        </View>
                        <View style={{ width: '60%'}}>
                            <ConfirmationButton text={"Solicitar viagem"} isActive={isAbleToPress} onPress={() => navigation.navigate("TripReview")}/>    
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
        marginTop: 18
    },
    formFooterRow: {
        width: '40%'
    }
})