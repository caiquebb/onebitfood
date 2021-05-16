export default function toCurrency (value) {
  const formatter = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(value);
}