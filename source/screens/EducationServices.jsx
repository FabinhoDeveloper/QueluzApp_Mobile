import ServiceCard from "../components/ServiceCard";
import ServicesFromDepartment from "../components/ServicesFromDepartment";

export default function EducationServices() {
    return (
        <ServicesFromDepartment departmentName={"Educação"} headerColor={"#FFAD00"}>
            {/* <ServiceCard serviceName={"Agendar viagem"} departmentName={"Secretaria de Educação"} color={"#FFAD00"}/>
            <ServiceCard serviceName={"Marcar consulta médica"} departmentName={"Secretaria de Educação"} color={"#FFAD00"}/> */}
        </ServicesFromDepartment>
    )
}
