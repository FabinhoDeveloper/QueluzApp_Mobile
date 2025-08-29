import ServicesFromDepartment from "../components/ServicesFromDepartment";
import ServiceCard from "../components/ServiceCard";

export default function AdministrationServices() {
    return (
        <ServicesFromDepartment departmentName={"Administração"}>       
            <ServiceCard serviceName={"Teste 1"} departmentName={"Secretaria de Administração"}/>
            <ServiceCard serviceName={"Teste 2"} departmentName={"Secretaria de Administração"}/>
        </ServicesFromDepartment>
                
    )
}

