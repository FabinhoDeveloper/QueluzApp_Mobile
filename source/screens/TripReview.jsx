import * as FileSystem from 'expo-file-system'
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import SecondaryStackHeader from "../components/SecondaryStackHeader";
import FormSection from "../components/FormSection";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import InfoCard from "../components/InfoCard";
import NeutralButton from "../components/NeutralButton";
import ConfirmationButton from "../components/ConfirmationButton";

import { useNavigation } from "@react-navigation/native";

import api from "../services/api";
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function TripReview() {
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()
    const route = useRoute();
    const { formData } = route.params;
    const { user } = useAuth()


    const handleConfirm = async (data) => {
        setIsLoading(true)

        try {
            const { data: urlResponse } = await api.post("/viagem/generate-url", {
                fileType: "image/jpeg",
                idUsuario: user.idUsuario
            });

            const { uploadUrl, fileUrl } = urlResponse;

            const imageResponse = await fetch(data.comprovante); // lê o arquivo local
            const blob = await imageResponse.blob(); // converte pra Blob

            const uploadResponse = await fetch(uploadUrl, {
                method: "PUT",
                headers: { "Content-Type": "image/jpeg" },
                body: blob,
            });

            if (!uploadResponse.ok) throw new Error("Falha no upload para S3");

            await api.post("/viagem/request", {
                ...data,
                idUsuario: user.idUsuario,
                comprovante: fileUrl,
            });

            Alert.alert("Sucesso", "Solicitação enviada com sucesso!");
            navigation.navigate("TripSuccess")
    } catch (error) {
        console.error('Erro ao enviar:', error);
        Alert.alert('Erro', 'Falha ao enviar solicitação.');
    } finally {
        setIsLoading(false)
    }
    };

    return (
        <ScrollViewWithMarginBottom size={100}>
            <SecondaryStackHeader title={"Solicitação\nde Viagem"} color={"#228D9C"}/>
            <View style={styles.mainContainer}>
                <View style={styles.infoCardsContainer}>
                    <FormSection marginBottom={true} title={"Revise suas informações"}></FormSection>
                    <InfoCard
                        title={"PACIENTE"}
                        items={[
                            { value: `${formData.first_name} ${formData.surname}`, bold: true },
                            { label: "E-mail", value: formData.email },
                            { label: "Telefone", value: formData.cellphone },
                            { label: "Endereço", value: formData.address },
                        ]}
                    />

                    <InfoCard
                        title={"CONSULTA"}
                        items={[
                            { value: formData.local, bold: true },
                            { label: "Endereço", value: formData.local_address },
                            { label: "Data", value: formData.data },
                            { label: "Horário", value: formData.hora },
                        ]}
                    />

                    {formData.companion_name ? (
                        <InfoCard
                            title={"ACOMPANHANTE"}
                            items={[
                            { value: formData.companion_name, bold: true },
                            { label: "Telefone", value: formData.companion_phone },
                            { label: "E-mail", value: formData.companion_email },
                            { label: "Endereço", value: formData.companion_address },
                            ]}
                        />
                    ) : null}

            </View>
            
            <View style={{gap: 10}}>
                <NeutralButton text={"Não está certo"}/>
                <ConfirmationButton text={!isLoading ? "Confirmar solicitação" : <ActivityIndicator size={24} color={"#F5F5F7"}/>} isActive={true} onPress={() => handleConfirm(formData)}/>
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