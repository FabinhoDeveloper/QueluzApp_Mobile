import ServiceCard from "../components/ServiceCard";
import ServicesFromDepartment from "../components/ServicesFromDepartment";

export default function WorksServices() {
    return (
        <ServicesFromDepartment departmentName={"Obras e Serviços"} headerColor={"#994A20"}>
            <ServiceCard serviceName={"Teste 1"} departmentName={"Secretaria de Obras e Serviços"} color={"#994A20"}/>
            <ServiceCard serviceName={"Teste 2"} departmentName={"Secretaria de Obras e Serviços"} color={"#994A20"}/>
        </ServicesFromDepartment>
    )
}
