import { Restaurant } from './../models/Restaurant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PurchasePayload = {
  products: [
    {
      id: number
      price: number
    }
  ],
  delivery: {
    receiver: string
    adress: {
      description: string
      city: string
      zipCode: string
      number: number,
      complement: string
    }
  },
  payment: {
    card: {
      name: string
      number: string
      code: number,
      expires: {
        month: number,
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantsQuery, usePurchaseMutation } = api
export default api