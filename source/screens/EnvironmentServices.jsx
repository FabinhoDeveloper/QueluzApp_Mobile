import ServiceCard from "../components/ServiceCard";
import ServicesFromDepartment from "../components/ServicesFromDepartment";

export default function EnvironmentServices() {
    return (
        <ServicesFromDepartment departmentName={"Meio Ambiente e Agricultura"} headerColor={"#057F07"}>
            {/* <ServiceCard serviceName={"Agendar viagem"} departmentName={"Secretaria de Meio Ambiente e Agricultura"} color={"#057F07"}/>
            <ServiceCard serviceName={"Marcar consulta médica"} departmentName={"Secretaria de Meio Ambiente e Agricultura"} color={"#057F07"}/> */}
        </ServicesFromDepartment>
    )
}
