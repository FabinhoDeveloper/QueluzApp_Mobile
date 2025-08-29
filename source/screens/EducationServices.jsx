import { StyleSheet, Text, View } from "react-native";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import HomeSection from "../components/HomeSection";
import ServiceCard from "../components/ServiceCard";

export default function EducationServices() {
    return (
        <View>
            <SecondaryStackHeader title={"Educação"} color={"#FFC916"}/>
            <View style={styles.mainContent}>
                <HomeSection title={"Selecione o serviço desejado:"}>
                    <View style={styles.servicesList}>       
                        <ServiceCard serviceName={"Teste 1"} departmentName={"Secretaria de Educação"} color={"#a07b00ff"}/>
                        <ServiceCard serviceName={"Teste 2"} departmentName={"Secretaria de Educação"} color={"#a07b00ff"}/>
                    </View>
                </HomeSection>
            </View>
        </View>
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