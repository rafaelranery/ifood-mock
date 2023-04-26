import * as S from './styles'
/* img temp */
import dishPhoto from '../../assets/images/La dulce vida trattoria/marguerita.svg'

const DisheCard = () => {
  return (
    <S.Card>
      <img src={dishPhoto} alt="" />
      <S.CardTitle>Pizza Marguerita</S.CardTitle>
      <S.CardDesc>A clássica Marguerita: molho de tomate, suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</S.CardDesc>
      <S.CarBtn>Add to cart</S.CarBtn>
    </S.Card>
  )
}
export default DisheCard