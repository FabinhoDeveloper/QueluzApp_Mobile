import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { useAuth } from "../contexts/AuthContext";
import KeyboardAvoidingContainer from "../components/KeyboardAvoidingContainer";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import FormInput from "../components/FormInput";
import FormSection from "../components/FormSection";
import ConfirmationButton from "../components/ConfirmationButton";
import NeutralButton from "../components/NeutralButton";
import FormPicker from "../components/FormPicker";
import { useNavigation } from "@react-navigation/native";

export default function OuvidoriaForm() {
    const [showCategories, setShowCategories] = useState(false)
    const [categoria, setCategoria] = useState("")
    const navigation = useNavigation()
    const {user} = useAuth()

    return (
        <ScrollViewWithMarginBottom size={100}>
            <KeyboardAvoidingContainer>
                <SecondaryStackHeader title={"Ouvidoria\nMunicipal"}/>
                <View style={styles.container}>
                    <FormSection marginBottom={true} title={"Escreva sua mensagem"}/>
                    <FormInput
                        name="Assunto"
                    />

                    <FormPicker name="Categoria" list={["Elogio", "Reclamação", "Sugestão", "Informação"]}/>

                    <FormInput
                        name="Mensagem"
                        size={150}
                    />

                    <FormInput
                        name="Nome do Solicitante"
                        value={user ? `${user.first_name} ${user.surname}` : ""}
                    />
                    <FormInput
                        name="E-mail do Solicitante"
                        value={user ? user.email : ""}
                    />

                    <ConfirmationButton text="Enviar mensagem"/>
                    <NeutralButton text={"Cancelar"} onPress={() => navigation.goBack()}/>
                </View>
            </KeyboardAvoidingContainer>
        </ScrollViewWithMarginBottom>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        gap: 20
    }
})