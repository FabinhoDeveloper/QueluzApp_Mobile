import ServiceCard from "../components/ServiceCard";
import ServicesFromDepartment from "../components/ServicesFromDepartment";

export default function EducationServices() {
    return (
        <ServicesFromDepartment departmentName={"Educação"} headerColor={"#FFC916"}>
            <ServiceCard serviceName={"Agendar viagem"} departmentName={"Secretaria de Educação"} color={"#b48a02ff"}/>
            <ServiceCard serviceName={"Marcar consulta médica"} departmentName={"Secretaria de Educação"} color={"#b48a02ff"}/>
        </ServicesFromDepartment>
    )
}
