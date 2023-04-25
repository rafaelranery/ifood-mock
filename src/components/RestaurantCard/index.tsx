/* styles */
import * as S from './styles'
/* assets */
import cardImg from '../../assets/images/hioki-sushi-bg.svg'
import star from '../../assets/images/star-rating.svg'

const RestaurantCard = () => {

  return (
    <S.Card>
      {/*
        img | destaque categoria
        nome | rating | img
        description
        btn
      */}
      <img src={cardImg} alt="" />
      <S.TagContainer>
        <S.Tag>Destaque da semana</S.Tag>
        <S.Tag>Japonesa</S.Tag>
      </S.TagContainer>
      <S.CardAbout>
        <S.CardHeader>
          <h3>Hioki Sushi</h3>
          <aside>
            <p>4.9</p>
            <img src={star} alt="" />
          </aside>
        </S.CardHeader>
        <S.CardDesc>
          Peça já o melhor da culinária japonesa no conforta da sua casa!
          Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
          Entrega rápida, embalagens cuidadosas e qualidade garantida.
          Experimente o Japão sem sair do lar com nosso delivery!
        </S.CardDesc>
        <S.LinkBtn href='#'>Saiba mais</S.LinkBtn>
      </S.CardAbout>
    </S.Card>
  )
}

export default RestaurantCard