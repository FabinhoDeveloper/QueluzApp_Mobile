import { StyleSheet, View, ScrollView, Text } from "react-native"

import MainHeader from "../components/MainHeader"
import NewsCarousel from "../components/NewsCarousel"
import HomeSection from "../components/HomeSection"
import DepartmentCard from "../components/DepartmentCard"
import ServiceCard from "../components/ServiceCard"
import CourseCard from "../components/CourseCard"

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <MainHeader/>
            <View style={styles.carouselWrapper}>
                <NewsCarousel/>
            </View>
            <View style={styles.homeMainContent}>
                <View>
                    <HomeSection title="Serviços em Destaque">
                        <View style={styles.mainServicesRow}>
                            <ServiceCard serviceName="Agendar viagem" departmentName={"Secretaria de Saúde"} color={"#228D9C"}/>
                            <ServiceCard serviceName="Agendar consulta médica" departmentName={"Secretaria de Saúde"} color={"#228D9C"}/>
                            <ServiceCard serviceName="Ouvidoria" departmentName={"Secretaria de Administração"}/>
                        </View>
                    </HomeSection>  
                    <HomeSection title="Categorias de Serviços" linkForMore={true} linkTarget={"ServicesNavigation"}>
                        <View style={styles.serviceCardsRow}>
                            <DepartmentCard departmentName="Saúde" source={require("../../assets/images/icons/icon_saude.png")} linkTarget={"HealthServices"}/>
                            <DepartmentCard departmentName="Administração" source={require("../../assets/images/icons/icon_administracao.png")} linkTarget={"AdministrationServices"}/>
                            <DepartmentCard departmentName="Educação" source={require("../../assets/images/icons/icon_educacao.png")} linkTarget={"EducationServices"}/>
                        </View>
                        <View style={styles.serviceCardsRow}>
                            <DepartmentCard departmentName={"Obras e\nServiços"} source={require("../../assets/images/icons/icon_obras.png")} linkTarget={"WorksServices"}/>
                            <DepartmentCard departmentName={"Desenvolvimento\nEconômico"} source={require("../../assets/images/icons/icon_desenvolvimento_economico.png")}/>
                            <DepartmentCard departmentName={"Meio Ambiente\ne Agronegócio"} source={require("../../assets/images/icons/icon_meio_ambiente.png")}/>
                        </View>
                    </HomeSection>

                    <HomeSection title="Cursos Disponíveis" linkForMore={true}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <CourseCard courseName="Salgadeiro" source={require("../../assets/images/curso_salgadeiro.png")}/>
                            <CourseCard courseName="Assistente de RH" source={require("../../assets/images/curso_assistente_rh.png")}/>
                            <CourseCard courseName="Informática" source={require("../../assets/images/curso_informatica.jpg")}/>
                        </View>
                    </HomeSection>

                    <HomeSection title="Eventos" linkForMore={true} linkText="Acessar Calendário">
                        
                    </HomeSection>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    carouselWrapper: {
        marginTop: -80, // faz o carrossel subir por cima do header
    },
    homeMainContent: {
        paddingHorizontal: 24
    },
    mainServicesRow: {
        gap: 8
    },  
    serviceCardsRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    }
})
