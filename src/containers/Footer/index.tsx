import * as S from './styles'

import logo from '../../assets/images/efood-logo.svg'
import fblogo from '../../assets/images/fb-logo.svg'
import instlogo from '../../assets/images/instagram-logo.svg'
import ttlogo from '../../assets/images/twitter-logo.svg'


const Footer = () => {


  return (
    <S.Footer>
      <div className="container">
        <img src={logo} />
        <S.Links>
          <li>
            <a href="#">
              <img src={instlogo} alt="Instagram Logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={fblogo} alt="Facebook Logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ttlogo} alt="Twitter Logo" />
            </a>
          </li>
        </S.Links>
        <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega e pela qualidade do produto é toda do estabelecimento contratado</p>
      </div>
    </S.Footer>

  )
}

export default Footer