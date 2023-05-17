export type Item = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Cardapio = Item[]

export type Restaurant = {
  id: number
  destacado: boolean
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio
}