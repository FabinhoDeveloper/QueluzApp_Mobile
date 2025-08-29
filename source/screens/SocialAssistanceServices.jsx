import ServiceCard from "../components/ServiceCard";
import ServicesFromDepartment from "../components/ServicesFromDepartment";

export default function SocialAssistanceServices() {
    return (
        <ServicesFromDepartment departmentName={"Assistência\nSocial"} headerColor={"#F77E1C"}>
            <ServiceCard serviceName={"Teste 1"} departmentName={"Secretaria de Assistência Social"} color={"#F77E1C"}/>
            <ServiceCard serviceName={"Teste 2"} departmentName={"Secretaria de Assistência Social"} color={"#F77E1C"}/>
        </ServicesFromDepartment>
    )
}
