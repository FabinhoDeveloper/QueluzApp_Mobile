import ServiceCard from "../components/ServiceCard";
import ServicesFromDepartment from "../components/ServicesFromDepartment";

export default function HealthServices() {
    return (
        <ServicesFromDepartment departmentName={"Saúde"} headerColor={"#228D9C"}>
            <ServiceCard serviceName={"Agendar viagem"} departmentName={"Secretaria de Saúde"} color={"#228D9C"} linkTarget={"TripMainPage"}/>
            <ServiceCard serviceName={"Marcar consulta médica"} departmentName={"Secretaria de Saúde"} color={"#228D9C"}/>
        </ServicesFromDepartment>
    )
}
