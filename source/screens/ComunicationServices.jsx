import ServiceCard from "../components/ServiceCard";
import ServicesFromDepartment from "../components/ServicesFromDepartment";

export default function ComunicationServices() {
    return (
        <ServicesFromDepartment departmentName={"Comunicação"}>
            <ServiceCard serviceName={"Teste 1"} departmentName={"Secretaria de Comunicação"}/>
            <ServiceCard serviceName={"Teste 2"} departmentName={"Secretaria de Comunicação"}/>
        </ServicesFromDepartment>
    )
}
