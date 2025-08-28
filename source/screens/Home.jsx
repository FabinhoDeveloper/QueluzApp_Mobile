import { StyleSheet, View, ScrollView, Text } from "react-native"

import MainHeader from "../components/MainHeader"
import NewsCarousel from "../components/NewsCarousel"
import HomeSection from "../components/HomeSection"
import DepartmentCard from "../components/DepartmentCard"
import ServiceCard from "../components/ServiceCard"

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
                            <ServiceCard serviceName="Agendar viagem"/>
                            <ServiceCard serviceName="Ouvidoria"/>
                            <ServiceCard serviceName="Agendar consulta médica"/>
                        </View>
                    </HomeSection>  
                    <HomeSection title="Categorias de serviços" linkForMore={true}>
                        <View style={styles.serviceCardsRow}>
                            <DepartmentCard departmentName="Saúde" source={require("../../assets/images/icons/icon_saude.png")}/>
                            <DepartmentCard departmentName="Administração" source={require("../../assets/images/icons/icon_administracao.png")}/>
                            <DepartmentCard departmentName="Comunicação" source={require("../../assets/images/icons/icon_comunicacao.png")}/>
                        </View>
                        <View style={styles.serviceCardsRow}>
                            <DepartmentCard departmentName={"Obras e\nServiços"} source={require("../../assets/images/icons/icon_obras.png")}/>
                            <DepartmentCard departmentName={"Desenvolvimento\nEconômico"} source={require("../../assets/images/icons/icon_desenvolvimento_economico.png")}/>
                            <DepartmentCard departmentName={"Meio Ambiente\ne Agronegócio"} source={require("../../assets/images/icons/icon_meio_ambiente.png")}/>
                        </View>
                    </HomeSection>

                    <HomeSection title="Cursos Disponíveis" linkForMore={true}>
                        
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
        marginTop: 11, 
        marginBottom: 3
    }
})
