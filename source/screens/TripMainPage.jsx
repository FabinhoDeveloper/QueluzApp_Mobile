import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";

import SecondaryStackHeader from "../components/SecondaryStackHeader";
import TripCard from "../components/TripCard";
import FormSection from "../components/FormSection";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";

import Feather from '@expo/vector-icons/Feather';

export default function TripMainPage() {
    return (
        <ScrollViewWithMarginBottom>
            <SecondaryStackHeader title={"Solicitação\nde Viagem"} color={"#228D9C"}/>
            <View style={styles.mainContent}>
                <FormSection marginBottom={true}>
                    <TouchableOpacity style={styles.tripFormButton}>
                        <Feather name="plus" size={25} color="black" />
                        <Text style={styles.tripFormButtonText}>Solicitar viagem</Text>
                    </TouchableOpacity>
                </FormSection>

                <FormSection title={"Minhas viagens"}>
                    <View style={styles.tripRecords}>
                        <TripCard status={"Confirmada"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                        <TripCard status={"Cancelada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                        <TripCard status={"Pendente"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                        <TripCard status={"Confirmada"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                        <TripCard status={"Cancelada"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                        <TripCard status={"Pendente"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
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
    tripRequest: {
         
    },
    tripFormButton: {
        width: 352,
        height: 53,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.5)",
        borderRadius: 9,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        gap: 12
    },
    tripFormButtonText: {
        fontSize: 20,
        fontFamily: 'Poppins_500Medium',
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
    },
    tripRecords: {
        gap: 8    
    }
})
