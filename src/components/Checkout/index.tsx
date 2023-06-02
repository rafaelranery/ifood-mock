import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { CarBtn, color } from '../../styles'
import * as S from './styles'
import { displayCheckout, endCheckout, goToPayment, payloadBuilder, returnFromPayment, close as closeCart } from '../../store/reducers/cart'
import { totalValue } from '../../utils/functions/totalValue'
import { formatPriceBRL } from '../../utils/functions/formatPriceBRL'
import { RootReducer } from '../../store/store'
import { usePurchaseMutation } from '../../services/api'
import Loader from '../Loader'

const Checkout = () => {
  const dispatch = useDispatch()
  const [purchase, { data }] = usePurchaseMutation()
  const { checkout, itens } = useSelector((state: RootReducer) => state.cart)

  const setProducts = (): [{id: number, price: number}] => {
    const products: { id: number; price: number }[] = [];

    itens.map(item => {
      products.push({
        id: item.id,
        price: item.preco
      })
    })
    return products
  }


  const paymentForm = useFormik({
    initialValues: {
      receiver: '',
      adressDescription: '',
      adressCity: '',
      zipCode: '',
      adressNumber: '',
      adressComplement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      receiver: Yup.string().min(5, 'São necessários ao menos 5 caracteres').required('O campo é obrigatório'),
      adressDescription: Yup.string().min(5, 'São necessários ao menos 5 caracteres').required('O campo é obrigatório.'),
      adressCity: Yup.string().min(5, 'São necessários ao menos 5 caracteres').required('O campo é obrigatório.'),
      zipCode: Yup.string().min(9, 'O campo deve conter 9 caracteres').max(9, 'O campo deve conter 9 caracteres').required('O campo é obrigatório.'),
      adressNumber: Yup.string().min(1, 'O campo deve conter ao menos 1 caracter').required('O campo é obrigatório.'),
      adressComplement: Yup.string().min(1, 'O campo deve conter 9 caracteres').notRequired(),
      cardOwner: Yup.string().min(5, 'São necessários ao menos 5 caracteres').required('O campo é obrigatório'),
      cardNumber: Yup.string().min(19, 'O campo deve conter 16 caracteres').max(19, 'O campo deve conter 16 caracteres').required('O campo é obrigatório.'),
      cardCode: Yup.string().min(3, 'O campo deve conter 3 caracteres').max(3, 'O campo deve conter 3 caracteres').required('O campo é obrigatório.'),
      expiresMonth: Yup.string().min(2, 'O campo deve conter 2 caracteres').max(2, 'O campo deve conter 2 caracteres').required('O campo é obrigatório.'),
      expiresYear: Yup.string().min(2, 'O campo deve conter ao menos 2 caracter').max(2, 'O campo deve conter 2 caracteres').required('O campo é obrigatório.')
    }),
    onSubmit: values => {
      purchase({
        products: setProducts(),
        delivery: {
          receiver: values.receiver,
          adress: {
            description: values.adressDescription,
            city: values.adressCity,
            zipCode: values.zipCode,
            number: Number(values.adressNumber),
            complement: values.adressComplement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
      dispatch(endCheckout())
    }
  })

  const isInvalid = (inputField: string) => {
    if (inputField in paymentForm.touched && inputField in paymentForm.errors) {
      return true
    }
    return false
  }

  const endPurchase = () => {
    dispatch(displayCheckout(false))
    dispatch(closeCart())
  }


  if (checkout.checkoutPhase === 'delivery') {
    return (
      <S.CheckoutForm>
        <>
          <S.Row>
            <h3>Entrega</h3>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="receiver">Quem vai receber</label>
              <input className={isInvalid('receiver') ? 'error' : ''} {...paymentForm.getFieldProps('receiver')} type="text" id="receiver" />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="adressDescription">Endereço</label>
              <input className={isInvalid('adressDescription') ? 'error' : ''} {...paymentForm.getFieldProps('adressDescription')} type="text" id="adressDescription" />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="adressCity">Cidade</label>
              <input className={isInvalid('adressCity') ? 'error' : ''} {...paymentForm.getFieldProps('adressCity')} type="text" id="adressCity" />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup maxWidth='144px'>
              <label htmlFor="zipCode">CEP</label>
              <InputMask className={isInvalid('zipCode') ? 'error' : ''} mask='99999-999' {...paymentForm.getFieldProps('zipCode')} type="text" id="zipCode" />
            </S.InputGroup>
            <S.InputGroup maxWidth='144px'>
              <label htmlFor="adressNumber">Número</label>
              <input className={isInvalid('adressNumber') ? 'error' : ''} {...paymentForm.getFieldProps('adressNumber')} type="text" id="adressNumber" />
            </S.InputGroup>
          </S.Row>
          <S.Row marginBottom='24px'>
            <S.InputGroup>
              <label htmlFor="adressComplement">Complemento (opcional)</label>
              <input className={isInvalid('adressComplement') ? 'error' : ''} {...paymentForm.getFieldProps('adressComplement')} type="text" id="adressComplement" />
            </S.InputGroup>
          </S.Row>
          <CarBtn onClick={() => dispatch(goToPayment())}>Continuar com o pagamento</CarBtn>
          <CarBtn onClick={() => dispatch(displayCheckout(false))}>Voltar ao carrinho</CarBtn>
        </>
      </S.CheckoutForm>
    )
  }

  if (checkout.checkoutPhase === 'payment') {
    return (
      <S.CheckoutForm onSubmit={paymentForm.handleSubmit}>
        <>
          <S.Row>
            <h3>Pagamento - Valor a pagar {formatPriceBRL(totalValue(itens))}</h3>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="cardOwner">Nome no cartão</label>
              <input className={isInvalid('cardOwner') ? 'error' : ''} {...paymentForm.getFieldProps('cardOwner')} type="text" id="cardOwner" />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup maxWidth='228px'>
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask className={isInvalid('cardNumber') ? 'error' : ''} mask='9999 9999 9999 9999' {...paymentForm.getFieldProps('cardNumber')} type="text" id="cardNumber" />
            </S.InputGroup>
            <S.InputGroup maxWidth='87px'>
              <label htmlFor="cardCode">CVV</label>
              <InputMask className={isInvalid('cardCode') ? 'error' : ''} mask='999' {...paymentForm.getFieldProps('cardCode')} type="text" id="cardCode" />
            </S.InputGroup>
          </S.Row>
          <S.Row marginBottom='24px'>
            <S.InputGroup maxWidth='144px'>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask className={isInvalid('expiresMonth') ? 'error' : ''} mask='99' {...paymentForm.getFieldProps('expiresMonth')} type="text" id="expiresMonth" />
            </S.InputGroup>
            <S.InputGroup maxWidth='144px'>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask className={isInvalid('expiresYear') ? 'error' : ''} mask='99' {...paymentForm.getFieldProps('expiresYear')} type="text" id="expiresYear" />
            </S.InputGroup>
          </S.Row>
          <CarBtn type='submit'>Finalizar Pagamento</CarBtn>
          <CarBtn onClick={() => dispatch(returnFromPayment())}>Voltar para a edição de endereço</CarBtn>
        </>
      </S.CheckoutForm>
    )
  }

  if (checkout.checkoutPhase === 'done' && data) {
    return (
      <S.CheckoutContainer>
        <h3>Pedido Realizado - {data.orderId} </h3>
        <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no enderço fonrecido.</p>
        <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
        <p>Lembre-se da importnância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
        <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
        <CarBtn onClick={endPurchase}>Concluir</CarBtn>
      </S.CheckoutContainer>
    )
  }

  return <Loader color={color.salmonLighter} />
}

export default Checkout