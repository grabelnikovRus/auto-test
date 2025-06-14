export const formatPrice = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

export const formatRun = new Intl.NumberFormat('ru-RU');
