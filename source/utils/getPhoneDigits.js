export default function getPhoneDigits(phone) {
    return phone.replace(/\D/g, '');
}