import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SecondaryButton from "../components/SecondaryButton";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import CustomCheckBox from "../components/CustomCheckBox";
import FormSection from "../components/FormSection";
import FormInput from "../components/FormInput";

export default function TripForm() {
    const [selectedOption, setSelectedOption] = useState("")
    const [addCompanion, setAddCompanion] = useState(false)

    const options = [
        { label: "Para mim", value: "Para mim" },
        { label: "Para outra pessoa", value: "Para outra pessoa" },
    ];

    return (    
        <ScrollViewWithMarginBottom size={100}>
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
                        <FormInput name={"Nome"}/>
                        <FormInput name={"E-mail"}/>
                        <FormInput name={"Telefone"}/>
                        <FormInput name={"Endereço"}/>
                    </View>
                </FormSection>

                <FormSection marginBottom={true}>
                    <View style={styles.formSection}>
                        <FormInput name={"Local da consulta"}/>
                        <FormInput name={"Endereço"}/>
                        <FormInput name={"Comprovante de solicitação"}/>
                        <FormInput name={"Data"}/>
                        <FormInput name={"Hora"}/>
                    </View>
                </FormSection>

                <FormSection>
                    <SecondaryButton title={"Adicionar acompanhante"} onPress={() => setAddCompanion(!addCompanion)}/>
                </FormSection>

                {addCompanion && (
                    <FormSection marginBottom={true}>
                        <View style={styles.formSection}>
                            <FormInput name={"Nome completo"}/>
                            <FormInput name={"Endereço"}/>
                            <FormInput name={"E-mail"}/>
                        </View>
                    </FormSection>
                )}
            </View>
        </ScrollViewWithMarginBottom>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    formSection: {
        gap: 15
    }
})