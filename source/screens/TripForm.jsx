import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Platform, Modal } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from 'expo-image-picker'

import SecondaryButton from "../components/SecondaryButton";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import CustomCheckBox from "../components/CustomCheckBox";
import FormSection from "../components/FormSection";
import FormInput from "../components/FormInput";
import FormInputButton from "../components/FormInputButton";
import KeyboardAvoidingContainer from "../components/KeyboardAvoidingContainer";
import NeutralButton from "../components/NeutralButton";
import ConfirmationButton from "../components/ConfirmationButton";

import applyPhoneMask from "../utils/applyPhoneMask";

export default function TripForm() {
    const [selectedOption, setSelectedOption] = useState("Para mim");
    const [addCompanion, setAddCompanion] = useState(false);
    const [isAbleToPress, setIsAbleToPress] = useState(true);
    const [dateObj, setDateObj] = useState(null);
    const [timeObj, setTimeObj] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [image, setImage] = useState(null)

    const navigation = useNavigation();
    const { user } = useAuth();

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            first_name: user?.primeiroNome || "",
            surname: user?.sobrenome || "",
            email: user?.email || "",
            cellphone: user?.telefone || "",
            address: user?.endereco || "",
            local: "",
            local_address: "",
            comprovante: null,
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
                first_name: user?.primeiroNome || "",
                surname: user?.sobrenome || "",
                email: user?.email || "",
                cellphone: user?.telefone || "",
                address: user?.endereco || "",
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
        navigation.navigate("TripReview", { formData: data });
    };

    const formatDate = (d) => {
        const day = d ? String(d.getDate()).padStart(2, '0') : "";
        const month = d ? String(d.getMonth() + 1).padStart(2, '0') : "";
        const year = d ? d.getFullYear() : "";
        return `${day}/${month}/${year}`;
    };

    const formatTime = (t) => {
        const hours = t ? String(t.getHours()).padStart(2, '0') : "";
        const minutes = t ? String(t.getMinutes()).padStart(2, '0') : "";
        return `${hours}:${minutes}`;
    };

    const getTodayStart = () => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            return result.assets[0].uri;
        }
        return null;
    };

    const takePhoto = async () => {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        if (permission.status !== "granted") {
            alert("Permissão para acessar a câmera é necessária!");
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: false,
            aspect: [4, 3],
            quality: 0.8,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            return result.assets[0].uri;
        }
        return null;
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
                                        value={applyPhoneMask(value)}
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
                                render={({ field: { value, onChange } }) => (
                                    <>
                                    <FormInputButton
                                        name="Comprovante de agendamento"
                                        placeholder="Selecionar da galeria"
                                        onPress={async () => {
                                            const selectedImage = await pickImage();
                                            if (selectedImage) {
                                                onChange(selectedImage);
                                            }
                                        }}
                                        value={value}
                                    />
                                    <NeutralButton
                                        text="Tirar Foto"
                                        onPress={async () => {
                                            const selectedImage = await takePhoto();
                                            if (selectedImage) {
                                                onChange(selectedImage);
                                            }
                                        }}
                                    />
                                    {value && <Text>Imagem selecionada ✔️</Text>}
                                    </>
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
                                    render={({ field: { value, onChange } }) => (
                                        <View>
                                            <Text style={styles.inputLabel}>Data</Text>
                                            <TouchableOpacity
                                                onPress={() => { setShowDatePicker(true); setShowTimePicker(false); }}
                                                style={styles.pickerInput}
                                            >
                                                <Text style={styles.pickerValue}>
                                                    {value ? value : ""}
                                                </Text>
                                            </TouchableOpacity>

                                            {showDatePicker && (
                                                Platform.OS === 'ios' ? (
                                                    <Modal
                                                        transparent
                                                        animationType="slide"
                                                        visible={showDatePicker}
                                                        onRequestClose={() => setShowDatePicker(false)}
                                                    >
                                                        <View style={styles.modalOverlay}>
                                                            <View style={styles.modalContent}>
                                                                <DateTimePicker
                                                                    value={dateObj || new Date()}
                                                                    mode="date"
                                                                    display="spinner"
                                                                    minimumDate={getTodayStart()}
                                                                    onChange={(event, selectedDate) => {
                                                                        // no iOS deixamos o picker visível até o usuário confirmar
                                                                        const currentDate = selectedDate || dateObj || new Date();
                                                                        setDateObj(currentDate);
                                                                        onChange(formatDate(currentDate));
                                                                    }}
                                                                    style={styles.iosPicker}
                                                                />
                                                                <View style={styles.modalButtons}>
                                                                    <TouchableOpacity
                                                                        onPress={() => { setShowDatePicker(false); }}
                                                                        style={styles.modalButton}
                                                                    >
                                                                        <Text>Cancelar</Text>
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity
                                                                        onPress={() => { setShowDatePicker(false); }}
                                                                        style={styles.modalButton}
                                                                    >
                                                                        <Text>OK</Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </Modal>
                                                ) : (
                                                    <DateTimePicker
                                                        value={dateObj || new Date()}
                                                        mode="date"
                                                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                                        minimumDate={getTodayStart()}
                                                        onChange={(event, selectedDate) => {
                                                            if (Platform.OS !== 'ios') {
                                                                setShowDatePicker(false);
                                                                if (event?.type !== 'set') return; // dismissed
                                                            }
                                                            const currentDate = selectedDate || dateObj || new Date();
                                                            setDateObj(currentDate);
                                                            onChange(formatDate(currentDate));
                                                        }}
                                                    />
                                                )
                                            )}

                                            {errors.data && <Text style={styles.errorMessage}>{errors.data.message}</Text>}
                                        </View>
                                    )}
                                />
                            </View>
                            
                            <View style={styles.formFooterRow}>
                                <Controller
                                    control={control}
                                    name="hora"
                                    rules={{ required: "Hora é obrigatória" }}
                                    render={({ field: { value, onChange } }) => (
                                        <View>
                                            <Text style={styles.inputLabel}>Hora</Text>
                                            <TouchableOpacity
                                                onPress={() => { setShowTimePicker(true); setShowDatePicker(false); }}
                                                style={styles.pickerInput}
                                            >
                                                <Text style={styles.pickerValue}>
                                                    {value ? value : ""}
                                                </Text>
                                            </TouchableOpacity>

                                            {showTimePicker && (
                                                Platform.OS === 'ios' ? (
                                                    <Modal
                                                        transparent
                                                        animationType="slide"
                                                        visible={showTimePicker}
                                                        onRequestClose={() => setShowTimePicker(false)}
                                                    >
                                                        <View style={styles.modalOverlay}>
                                                            <View style={styles.modalContent}>
                                                                <DateTimePicker
                                                                    value={timeObj || new Date()}
                                                                    mode="time"
                                                                    display="spinner"
                                                                    onChange={(event, selectedTime) => {
                                                                        // no iOS deixamos o picker visível até o usuário confirmar
                                                                        const currentTime = selectedTime || timeObj || new Date();
                                                                        setTimeObj(currentTime);
                                                                        onChange(formatTime(currentTime));
                                                                    }}
                                                                    style={styles.iosPicker}
                                                                />
                                                                <View style={styles.modalButtons}>
                                                                    <TouchableOpacity
                                                                        onPress={() => { setShowTimePicker(false); }}
                                                                        style={styles.modalButton}
                                                                    >
                                                                        <Text>Cancelar</Text>
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity
                                                                        onPress={() => { setShowTimePicker(false); }}
                                                                        style={styles.modalButton}
                                                                    >
                                                                        <Text>OK</Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </Modal>
                                                ) : (
                                                    <DateTimePicker
                                                        value={timeObj || new Date()}
                                                        mode="time"
                                                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                                        onChange={(event, selectedTime) => {
                                                            if (Platform.OS !== 'ios') {
                                                                setShowTimePicker(false);
                                                                if (event?.type !== 'set') return; // dismissed
                                                            }
                                                            const currentTime = selectedTime || timeObj || new Date();
                                                            setTimeObj(currentTime);
                                                            onChange(formatTime(currentTime));
                                                        }}
                                                    />
                                                )
                                            )}

                                            {errors.hora && <Text style={styles.errorMessage}>{errors.hora.message}</Text>}
                                        </View>
                                    )}
                                />
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
                                            keyboardType="numeric"
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
    },
    inputLabel: {
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
        marginBottom: 13
    },
    pickerInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 12,
        paddingHorizontal: 18,
        height: 41.31,
        justifyContent: 'center'
    },
    pickerValue: {
        color: "#636364",
        fontSize: 14,
        fontFamily: 'Poppins_300Light'
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end' /* slide from bottom */,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingTop: 12,
        paddingBottom: 24,
        alignItems: 'center'
    },
    iosPicker: {
        width: '100%',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 8
    },
    modalButton: {
        paddingHorizontal: 16,
        paddingVertical: 8
    }
});
