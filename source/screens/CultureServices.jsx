import ServiceCard from "../components/ServiceCard";
import ServicesFromDepartment from "../components/ServicesFromDepartment";

export default function CultureServices() {
    return (
        <ServicesFromDepartment departmentName={"Cultura e\nTurismo"} headerColor={"#B14F34"}>
            <ServiceCard serviceName={"Teste 1"} departmentName={"Secretaria de Cultura e Turismo"} color={"#B14F34"}/>
            <ServiceCard serviceName={"Teste 2"} departmentName={"Secretaria de Cultura e Turismo"} color={"#B14F34"}/>
        </ServicesFromDepartment>
    )
}
