import { Item } from "../../models/Restaurant"

export const totalValue = (itens: Item[]) => {
  const scopeItens = itens
  return scopeItens.reduce((accumutalor, currentValue) => {
    return accumutalor += currentValue.preco
  }, 0)
}