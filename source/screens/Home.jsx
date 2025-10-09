import { StyleSheet, View, ScrollView, FlatList } from "react-native"
import { useState } from "react"

import MainHeader from "../components/MainHeader"
import HomeSection from "../components/HomeSection"
import DepartmentCard from "../components/DepartmentCard"
import ServiceCard from "../components/ServiceCard"
import CourseCard from "../components/CourseCard"
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom"
import ServicesFromDepartment from "../components/ServicesFromDepartment"
import { useAuth } from "../contexts/AuthContext"

const servicesList = [
    { serviceName: "Agendar viagem", departmentName: "Secretaria de Saúde", color: "#228D9C", linkTarget: { stack: "Serviços", screen: "TripMainPage" } },
    { serviceName: "Agendar consulta médica", departmentName: "Secretaria de Saúde", color: "#228D9C", linkTarget: { stack: "Serviços", screen: "ConsultationMainPage" } },
    { serviceName: "Ouvidoria", departmentName: "Secretaria de Administração", linkTarget: { stack: "Serviços", screen: "OuvidoriaForm" } },
]

export default function Home() {
    const [isSearchFocused, setIsSearchFocused] = useState(false)
    const { user } = useAuth()

    console.log(user)

    return (
        <ScrollViewWithMarginBottom size={80}>
            <MainHeader
                onSearchFocused={() => setIsSearchFocused(true)}
                onSearchBlur={() => setIsSearchFocused(false)}
            />
            <View style={styles.homeMainContent}>

            {!isSearchFocused && (
                <View>
                    <HomeSection title="Serviços em Destaque">
                        <View style={styles.mainServicesRow}>
                            <ServiceCard serviceName="Agendar viagem" departmentName={"Secretaria de Saúde"} color={"#228D9C"} linkTarget={{stack: "Serviços", screen: "TripMainPage"}}/>
                            <ServiceCard serviceName="Agendar consulta médica" departmentName={"Secretaria de Saúde"} color={"#228D9C"} linkTarget={{stack: "Serviços", screen: "ConsultationMainPage"}}/>
                            <ServiceCard serviceName="Ouvidoria" departmentName={"Secretaria de Administração"} linkTarget={{stack: "Serviços", screen: "OuvidoriaForm"}}/>
                        </View>
                    </HomeSection>  
                    <HomeSection title="Categorias de Serviços" linkForMore={true} linkTarget={{stack: "Serviços", screen: "ServicesNavigation"}}>
                        <View style={styles.serviceCardsRow}>
                            <DepartmentCard departmentName="Saúde" source={require("../../assets/images/icons/icon_saude.png")} linkTarget={{stack: "Serviços", screen: "HealthServices"}}/>
                            <DepartmentCard departmentName="Administração" source={require("../../assets/images/icons/icon_administracao.png")} linkTarget={{stack: "Serviços", screen: "AdministrationServices"}}/>
                            <DepartmentCard departmentName="Educação" source={require("../../assets/images/icons/icon_educacao.png")} linkTarget={{stack: "Serviços", screen: "EducationServices"}}/>
                        </View>
                        <View style={styles.serviceCardsRow}>
                            <DepartmentCard departmentName={"Obras e\nServiços"} source={require("../../assets/images/icons/icon_obras.png")} linkTarget={{stack: "Serviços", screen: "WorksServices"}}/>
                            <DepartmentCard departmentName={"Desenvolvimento\nEconômico"} source={require("../../assets/images/icons/icon_desenvolvimento_economico.png")} linkTarget={{stack: "Serviços", screen: "EconomicDevelopmentServices"}}/>
                            <DepartmentCard departmentName={"Meio Ambiente\ne Agronegócio"} source={require("../../assets/images/icons/icon_meio_ambiente.png")} linkTarget={{stack: "Serviços", screen: "EnvironmentServices"}}/>
                        </View>
                    </HomeSection>

                    <HomeSection title="Cursos Disponíveis" linkForMore={true}>
                        <View style={styles.coursesRow}>
                            <CourseCard courseName="Salgadeiro" source={require("../../assets/images/curso_salgadeiro.png")}/>
                            <CourseCard courseName="Assistente de RH" source={require("../../assets/images/curso_assistente_rh.png")}/>
                            <CourseCard courseName="Informática" source={require("../../assets/images/curso_informatica.jpg")}/>
                        </View>
                    </HomeSection>

                    <HomeSection title="Eventos" linkForMore={true} linkText="Acessar Calendário">
                        
                    </HomeSection>
                </View>
                )}
                {isSearchFocused && (
                    <HomeSection title={"Serviços"}>
                        <View style={styles.mainServicesRow}>
                            {servicesList.map((item) => (
                                <ServiceCard key={item.serviceName} serviceName={item.serviceName} departmentName={item.departmentName} color={item.color} linkTarget={item.linkTarget}/>
                            ))}
                        </View>
                    </HomeSection>
                )}
                
                
            </View>

        </ScrollViewWithMarginBottom>
    )
}

const styles = StyleSheet.create({
    homeMainContent: {
        paddingHorizontal: 24
    },
    mainServicesRow: {
        gap: 8
    },  
    serviceCardsRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },
    coursesRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }
})
