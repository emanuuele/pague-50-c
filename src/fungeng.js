export default function formatToBrl(value = 0) {
    let newValue = value.toString();
    return `R$ ${newValue.replace('.', ',')}`;
}