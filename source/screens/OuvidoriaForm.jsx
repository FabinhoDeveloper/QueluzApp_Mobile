import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../contexts/AuthContext";
import KeyboardAvoidingContainer from "../components/KeyboardAvoidingContainer";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import FormInput from "../components/FormInput";
import FormSection from "../components/FormSection";
import ConfirmationButton from "../components/ConfirmationButton";
import NeutralButton from "../components/NeutralButton";
import FormPicker from "../components/FormPicker";

export default function OuvidoriaForm() {
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const { user } = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            assunto: "",
            categoria: "",
            mensagem: "",
            nome_solicitante: user ? `${user.first_name} ${user.surname}` : "",
            email_solicitante: user ? user.email : ""
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigation.goBack();
        }, 1000);
    };

    return (
        <ScrollViewWithMarginBottom size={100}>
            <KeyboardAvoidingContainer>
                <SecondaryStackHeader title={"Ouvidoria\nMunicipal"} />
                <View style={styles.container}>
                    <FormSection marginBottom={true} title={"Escreva sua mensagem"} />

                    {/* Assunto */}
                    <Controller
                        control={control}
                        name="assunto"
                        rules={{ required: "O campo Assunto é obrigatório" }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <FormInput
                                name="Assunto"
                                placeholder="Digite o Assunto"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                error={errors.assunto?.message}
                            />
                        )}
                    />
                    {errors.assunto && <Text style={styles.errorMessage}>{errors.assunto.message}</Text>}

                    {/* Categoria */}
                    <Controller
                        control={control}
                        name="categoria"
                        rules={{ required: "Selecione uma categoria" }}
                        render={({ field: { value, onChange } }) => (
                            <FormPicker
                                name="Categoria"
                                list={["Elogio", "Reclamação", "Sugestão", "Informação"]}
                                selectedValue={value}
                                onValueChange={onChange}
                                error={errors.categoria?.message}
                            />
                        )}
                    />
                    {errors.categoria && <Text style={styles.errorMessage}>{errors.categoria.message}</Text>}

                    {/* Mensagem */}
                    <Controller
                        control={control}
                        name="mensagem"
                        rules={{ required: "Digite sua mensagem" }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <FormInput
                                name="Mensagem"
                                size={150}
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                error={errors.mensagem?.message}
                            />
                        )}
                    />
                    {errors.mensagem && <Text style={styles.errorMessage}>{errors.mensagem.message}</Text>}

                    {/* Nome do solicitante */}
                    <Controller
                        control={control}
                        name="nome_solicitante"
                        rules={{ required: "O nome do solicitante é obrigatório" }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <FormInput
                                name="Nome do Solicitante"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                error={errors.nome_solicitante?.message}
                            />
                        )}
                    />
                    {errors.nome_solicitante && <Text style={styles.errorMessage}>{errors.nome_solicitante.message}</Text>}

                    {/* Email do solicitante */}
                    <Controller
                        control={control}
                        name="email_solicitante"
                        rules={{
                            required: "O e-mail é obrigatório",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "E-mail inválido"
                            }
                        }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <FormInput
                                name="E-mail do Solicitante"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                error={errors.email_solicitante?.message}
                            />
                        )}
                    />
                    {errors.email_solicitante && <Text style={styles.errorMessage}>{errors.email_solicitante.message}</Text>}

                    {/* Botões */}
                    <ConfirmationButton text="Enviar mensagem" onPress={handleSubmit(onSubmit)} isLoading={isLoading} />
                    <NeutralButton text={"Cancelar"} onPress={() => navigation.goBack()} />
                </View>
            </KeyboardAvoidingContainer>
        </ScrollViewWithMarginBottom>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        gap: 20
    },
    errorMessage: {
        color: "red",
        marginTop: -10
    }
});
