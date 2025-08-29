import ServiceCard from "../components/ServiceCard";
import ServicesFromDepartment from "../components/ServicesFromDepartment";

export default function EconomicDevelopmentServices() {
    return (
        <ServicesFromDepartment departmentName={"Desenvolvimento Econômico"}>
            <ServiceCard serviceName={"Teste 1"} departmentName={"Secretaria de Des. Econômico"}/>
            <ServiceCard serviceName={"Teste 2"} departmentName={"Secretaria de Des. Econômico"}/>
        </ServicesFromDepartment>
    )
}
