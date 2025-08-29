import { ScrollView, StyleSheet, Text, View } from "react-native";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import HomeSection from "../components/HomeSection";
import ServiceCard from "../components/ServiceCard";

export default function AdministrationServices() {
    return (
        <ScrollView>
            <SecondaryStackHeader title={"Administração"}/>
            <View style={styles.mainContent}>
                <HomeSection title={"Selecione o serviço desejado:"}>
                    <View style={styles.servicesList}>       
                        <ServiceCard serviceName={"Teste 1"} departmentName={"Secretaria de Administração"}/>
                        <ServiceCard serviceName={"Teste 2"} departmentName={"Secretaria de Administração"}/>
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
