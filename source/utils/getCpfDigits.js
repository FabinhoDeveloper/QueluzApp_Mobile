export default function getCpfDigits(value) {
  if (!value) return ""
  return value.replace(/\D/g, '').slice(0, 11)
}
