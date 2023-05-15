class Dish {
  name: string
  description: string
  img: string
  price: number

  constructor(name: string, description: string, img: string, price: number) {
    this.name = name;
    this.description = description
    this.img = img,
    this.price = price
  }
}

export default Dish