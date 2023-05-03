import * as S from './styles'
/* img temp */

type Props = {
  name: string,
  description: string,
  img: string
}

const DisheCard = ({name, description, img}: Props) => (
  <S.Card>
      <img src={img} alt="" />
      <S.CardTitle>{name}</S.CardTitle>
      <S.CardDesc>{description}</S.CardDesc>
      <S.CarBtn>Add to cart</S.CarBtn>
    </S.Card>
)
export default DisheCard