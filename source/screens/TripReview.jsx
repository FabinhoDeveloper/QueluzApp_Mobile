import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import SecondaryStackHeader from "../components/SecondaryStackHeader";
import FormSection from "../components/FormSection";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import InfoCard from "../components/InfoCard";
import NeutralButton from "../components/NeutralButton";
import ConfirmationButton from "../components/ConfirmationButton";

import { useNavigation } from "@react-navigation/native";

export default function TripReview() {
    const navigation = useNavigation()
    const route = useRoute();
    const { formData } = route.params;
    console.log(formData);

    const handleConfirm = () => {
        console.log("Confirmando solicitação");
        console.log(formData);
        navigation.navigate("TripSuccess");
    }

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
                <ConfirmationButton text={"Confirmar solicitação"} isActive={true} onPress={handleConfirm}/>
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