import { StyleSheet, Text, View } from "react-native";

import SecondaryTabHeader from "../components/SecondaryTabHeader";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import DepartmentCard from "../components/DepartmentCard";
import HomeSection from "../components/HomeSection";

export default function ServicesNavigation() {
    return (
        <View styles={styles.container}>
            <SecondaryStackHeader title={"Serviços"}/>
            <View style={styles.mainContent}>
                <HomeSection title={"Navegue pelos serviços"}>
                        <View style={styles.serviceCardsRow}>
                            <DepartmentCard departmentName={"Saúde"} source={require("../../assets/images/icons/icon_saude.png")} linkTarget={"HealthServices"}/>
                            <DepartmentCard departmentName={"Administração"} source={require("../../assets/images/icons/icon_administracao.png")} linkTarget={"AdministrationServices"}/>
                            <DepartmentCard departmentName={"Educação"} source={require("../../assets/images/icons/icon_educacao.png")} linkTarget={"EducationServices"}/>
                        </View>
                        <View style={styles.serviceCardsRow}>
                            <DepartmentCard departmentName={"Obras e\nServiços"} source={require("../../assets/images/icons/icon_obras.png")}/>
                            <DepartmentCard departmentName={"Desenvolvimento\nEconômico"} source={require("../../assets/images/icons/icon_desenvolvimento_economico.png")}/>
                            <DepartmentCard departmentName={"Meio Ambiente\ne Agronegócio"} source={require("../../assets/images/icons/icon_meio_ambiente.png")}/>
                        </View>
                        <View style={styles.serviceCardsRow}>
                            <DepartmentCard departmentName={"Comunicação"} source={require("../../assets/images/icons/icon_comunicacao.png")}/>
                            <DepartmentCard departmentName={"Assistência\nSocial"} source={require("../../assets/images/icons/icon_assistencia_social.png")}/>
                            <DepartmentCard departmentName={"Cultura e\nTurismo"} source={require("../../assets/images/icons/icon_cultura_e_turismo.png")}/>
                        </View>
                </HomeSection>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        paddingHorizontal: 20, 
        marginTop: 20
    },
    serviceCardsRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 10
    }
})
