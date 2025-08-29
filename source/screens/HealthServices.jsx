import { ScrollView, StyleSheet, Text, View } from "react-native";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import HomeSection from "../components/HomeSection";
import ServiceCard from "../components/ServiceCard";

export default function HealthServices() {
    return (
        <ScrollView>
            <SecondaryStackHeader title={"Saúde"} color={"#228D9C"}/>
            <View style={styles.mainContent}>
                <HomeSection title={"Selecione o serviço desejado:"}>
                    <View style={styles.servicesList}>       
                        <ServiceCard serviceName={"Agendar viagem"} departmentName={"Secretaria de Saúde"} color={"#228D9C"}/>
                        <ServiceCard serviceName={"Marcar consulta médica"} departmentName={"Secretaria de Saúde"} color={"#228D9C"}/>
                    </View>
                </HomeSection>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    servicesList: {
        gap: 8
    }
})