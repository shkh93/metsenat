export const formatMoneyDecimal = (number, fix = 0, option = 'currency') => {
  const options = {
    maximumFractionDegits: fix,
    minimumFractionDegits: fix,
  }
  return number ? new Intl.NumberFormat('ru-Ru', options).format(number) : '0'
}
