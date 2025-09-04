export default function applyPhoneMask(value) {
  // Remove tudo que não é dígito
  const digits = value.replace(/\D/g, '')

  // Limita a 11 dígitos (DDD + 9 + número)
  const limitedDigits = digits.slice(0, 11)

  // Aplica a máscara conforme o usuário digita
  if (limitedDigits.length <= 2) {
    return `(${limitedDigits}`
  } else if (limitedDigits.length <= 3) {
    return `(${limitedDigits.slice(0, 2)}) ${limitedDigits.slice(2)}`
  } else if (limitedDigits.length <= 7) {
    return `(${limitedDigits.slice(0, 2)}) ${limitedDigits.slice(2, 3)} ${limitedDigits.slice(3)}`
  } else if (limitedDigits.length <= 11) {
    return `(${limitedDigits.slice(0, 2)}) ${limitedDigits.slice(2, 3)} ${limitedDigits.slice(3, 7)}-${limitedDigits.slice(7)}`
  }

  return limitedDigits
}
