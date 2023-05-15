export function formatPriceBRL(defaultNumber: number) {
  const currencyBRL = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return currencyBRL.format(defaultNumber)
}