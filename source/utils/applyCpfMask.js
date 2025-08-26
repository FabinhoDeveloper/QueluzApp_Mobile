export default function applyCpfMask(value) {
    // Remove tudo que não é digito
    const digits = value.replace(/\D/g, '')

    // Limita a 11 dígitos
    const limitedDigits = digits.slice(0, 11)

    // Aplica a máscara conforme o usuário digita
    if (limitedDigits.length <= 3) {
        return limitedDigits
    } else if (limitedDigits.length <= 6) {
        return `${limitedDigits.slice(0, 3)}.${limitedDigits.slice(3)}`
    } else if (limitedDigits.length <= 9) {
        return `${limitedDigits.slice(0, 3)}.${limitedDigits.slice(3, 6)}.${limitedDigits.slice(6)}`
    } else {
        return `${limitedDigits.slice(0, 3)}.${limitedDigits.slice(3, 6)}.${limitedDigits.slice(6, 9)}-${limitedDigits.slice(9)}`
    }
}
