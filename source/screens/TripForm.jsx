import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import DateTimePicker from "@react-native-community/datetimepicker";

import SecondaryButton from "../components/SecondaryButton";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import CustomCheckBox from "../components/CustomCheckBox";
import FormSection from "../components/FormSection";
import FormInput from "../components/FormInput";
import KeyboardAvoidingContainer from "../components/KeyboardAvoidingContainer";
import NeutralButton from "../components/NeutralButton";
import ConfirmationButton from "../components/ConfirmationButton";

import applyPhoneMask from "../utils/applyPhoneMask";

export default function TripForm() {
    const [selectedOption, setSelectedOption] = useState("Para mim");
    const [addCompanion, setAddCompanion] = useState(false);
    const [isAbleToPress, setIsAbleToPress] = useState(true);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const navigation = useNavigation();
    const { user } = useAuth();

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            first_name: user?.first_name || "",
            surname: user?.surname || "",
            email: user?.email || "",
            cellphone: user?.cellphone || "",
            address: user?.address || "",
            local: "",
            local_address: "",
            comprovante: "",
            data: "",
            hora: "",
            companion_name: "",
            companion_phone: "",
            companion_email: "",
            companion_address: ""
        }
    });

    // Atualiza valores quando alterna entre "Para mim" e "Para outra pessoa"
    const handleOptionChange = (option) => {
        setSelectedOption(option);
        if (option === "Para mim") {
            reset({
                first_name: user?.first_name || "",
                surname: user?.surname || "",
                email: user?.email || "",
                cellphone: user?.cellphone || "",
                address: user?.address || "",
            }, { keepErrors: true, keepDirty: true });
        } else {
            reset({
                first_name: "",
                surname: "",
                email: "",
                cellphone: "",
                address: "",
            }, { keepErrors: true, keepDirty: true });
        }
    };

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        navigation.navigate("TripReview", { formData: data });
    };

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };
    
    const onTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(false);
        setTime(currentTime);
    };

    return (
        <KeyboardAvoidingContainer>
            <ScrollViewWithMarginBottom size={120}>
                <SecondaryStackHeader title={"Solicitação\nde Viagem"} color={"#228D9C"} />
                <View style={styles.container}>
                    
                    {/* Seleção de opção */}
                    <FormSection marginBottom={true}>
                        <CustomCheckBox
                            options={[
                                { label: "Para mim", value: "Para mim" },
                                { label: "Para outra pessoa", value: "Para outra pessoa" },
                            ]}
                            selected={selectedOption}
                            onSelect={handleOptionChange}
                        />
                    </FormSection>

                    {/* Dados pessoais */}
                    <FormSection marginBottom={true}>
                        <View style={styles.formSection}>
                            <Controller
                                control={control}
                                name="first_name"
                                rules={{ required: "Primeiro nome é obrigatório" }}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <FormInput
                                        name="Primeiro nome"
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        error={errors.first_name?.message}
                                    />
                                )}
                            />
                            {errors.first_name && <Text style={styles.errorMessage}>{errors.first_name.message}</Text>}

                            <Controller
                                control={control}
                                name="surname"
                                rules={{ required: "Sobrenome é obrigatório" }}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <FormInput
                                        name="Sobrenome"
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        error={errors.surname?.message}
                                    />
                                )}
                            />
                            {errors.surname && <Text style={styles.errorMessage}>{errors.surname.message}</Text>}

                            <Controller
                                control={control}
                                name="email"
                                rules={{
                                    required: "E-mail é obrigatório",
                                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido" }
                                }}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <FormInput
                                        name="E-mail"
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        error={errors.email?.message}
                                    />
                                )}
                            />
                            {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}

                            <Controller
                                control={control}
                                name="cellphone"
                                rules={{ required: "Telefone é obrigatório" }}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <FormInput
                                        name="Telefone"
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={text => onChange(applyPhoneMask(text))}
                                        error={errors.cellphone?.message}
                                    />
                                )}
                            />
                            {errors.cellphone && <Text style={styles.errorMessage}>{errors.cellphone.message}</Text>}

                            <Controller
                                control={control}
                                name="address"
                                rules={{ required: "Endereço é obrigatório" }}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <FormInput
                                        name="Endereço"
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        error={errors.address?.message}
                                    />
                                )}
                            />
                            {errors.address && <Text style={styles.errorMessage}>{errors.address.message}</Text>}
                        </View>
                    </FormSection>

                    {/* Dados da viagem */}
                    <FormSection marginBottom={true}>
                        <View style={styles.formSection}>
                            <Controller
                                control={control}
                                name="local"
                                rules={{ required: "Local da consulta é obrigatório" }}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <FormInput
                                        name="Local da consulta"
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        error={errors.local?.message}
                                    />
                                )}
                            />
                            {errors.local && <Text style={styles.errorMessage}>{errors.local.message}</Text>}
                        

                            <Controller
                                control={control}
                                name="local_address"
                                rules={{ required: "Endereço é obrigatório" }}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <FormInput
                                        name="Endereço"
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        error={errors.local_address?.message}
                                    />
                                )}
                            />
                            {errors.local_address && <Text style={styles.errorMessage}>{errors.local_address.message}</Text>}

                            <Controller
                                control={control}
                                name="comprovante"
                                rules={{ required: "Comprovante é obrigatório" }}
                                render={({ field: { value, onChange, onBlur } }) => (
                                    <FormInput
                                        name="Comprovante de solicitação"
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        error={errors.comprovante?.message}
                                    />
                                )}
                            />
                            {errors.comprovante && <Text style={styles.errorMessage}>{errors.comprovante.message}</Text>}
                        </View>

                        <View style={styles.formFooter}>
                            <View style={styles.formFooterRow}>
                                <Controller
                                    control={control}
                                    name="data"
                                    rules={{ required: "Data é obrigatória" }}
                                    render={({ field: { value, onChange, onBlur } }) => (
                                        <FormInput
                                            name="Data"
                                            value={value}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            error={errors.data?.message}
                                        />
                                    )}
                                />
                                {errors.data && <Text style={styles.errorMessage}>{errors.data.message}</Text>}
                            </View>
                            
                            <View style={styles.formFooterRow}>
                                <Controller
                                    control={control}
                                    name="hora"
                                    rules={{ required: "Hora é obrigatória" }}
                                    render={({ field: { value, onChange, onBlur } }) => (
                                        <FormInput
                                            name="Hora"
                                            value={value}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            error={errors.hora?.message}
                                        />
                                    )}
                                />
                                {errors.hora && <Text style={styles.errorMessage}>{errors.hora.message}</Text>}
                            </View>
                        </View>
                    </FormSection>

                    {/* Acompanhante */}
                    <FormSection>
                        <SecondaryButton
                            title={addCompanion ? "Remover acompanhante" : "Adicionar acompanhante (Max. 1)"}
                            onPress={() => setAddCompanion(!addCompanion)}
                        />
                    </FormSection>

                    {addCompanion && (
                        <FormSection marginBottom={true}>
                            <View style={styles.formSection}>
                                <Controller
                                    control={control}
                                    name="companion_name"
                                    rules={{ required: "Nome do acompanhante é obrigatório" }}
                                    render={({ field: { value, onChange, onBlur } }) => (
                                        <FormInput
                                            name="Nome completo"
                                            value={value}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            error={errors.companion_name?.message}
                                        />
                                    )}
                                />
                                {errors.companion_name && <Text style={styles.errorMessage}>{errors.companion_name.message}</Text>}

                                <Controller
                                    control={control}
                                    name="companion_phone"
                                    rules={{ required: "Telefone do acompanhante é obrigatório" }}
                                    render={({ field: { value, onChange, onBlur } }) => (
                                        <FormInput
                                            name="Telefone"
                                            value={value}
                                            onBlur={onBlur}
                                            onChangeText={text => onChange(applyPhoneMask(text))}
                                            error={errors.companion_phone?.message}
                                        />
                                    )}
                                />
                                {errors.companion_phone && <Text style={styles.errorMessage}>{errors.companion_phone.message}</Text>}

                                <Controller
                                    control={control}
                                    name="companion_email"
                                    rules={{
                                        required: "E-mail do acompanhante é obrigatório",
                                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido" }
                                    }}
                                    render={({ field: { value, onChange, onBlur } }) => (
                                        <FormInput
                                            name="E-mail"
                                            value={value}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            error={errors.companion_email?.message}
                                        />
                                    )}
                                />
                                {errors.companion_email && <Text style={styles.errorMessage}>{errors.companion_email.message}</Text>}

                                <Controller
                                    control={control}
                                    name="companion_address"
                                    rules={{ required: "Endereço do acompanhante é obrigatório" }}
                                    render={({ field: { value, onChange, onBlur } }) => (
                                        <FormInput
                                            name="Endereço"
                                            value={value}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            error={errors.companion_address?.message}
                                        />
                                    )}
                                />
                                {errors.companion_address && <Text style={styles.errorMessage}>{errors.companion_address.message}</Text>}
                            </View>
                        </FormSection>
                    )}

                    {/* Botões */}
                    <FormSection>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: '35%'}}>
                                <NeutralButton text={"Cancelar"} />
                            </View>
                            <View style={{ width: '60%'}}>
                                <ConfirmationButton text={"Solicitar viagem"} isActive={isAbleToPress} onPress={handleSubmit(onSubmit)} />    
                            </View>
                        </View>
                    </FormSection>
                </View>
            </ScrollViewWithMarginBottom>
        </KeyboardAvoidingContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    formSection: {
        gap: 15
    },
    formFooter: {
        flexDirection: 'row',
        gap: 35,
        marginTop: 18
    },
    formFooterRow: {
        width: '40%'
    },
    errorMessage: {
        color: "red",
        marginTop: -10
    }
});
