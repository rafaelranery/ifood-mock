import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setRestaurants } from "../store/reducers/restaurants"

export const useFetchRestaurants = () => {
  const dispatch = useDispatch()

  function fetchRestaurants() {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then(res => res.json())
    .then(data => dispatch(setRestaurants(data)))
  }
  
  useEffect(() => {
    fetchRestaurants()
  }, [])
  
  return null
}
