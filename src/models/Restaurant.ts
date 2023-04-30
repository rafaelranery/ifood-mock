import Dish from "./Dishes"

class Restaurant {
  id: number
  name: string
  rating: number
  category: string
  highlight?: boolean
  description: string
  img: string
  dishes: Dish[]

  constructor(id: number, name: string, rating: number, category: string, description: string, img: string, highlight = false, dishes: Dish[]) {
    this.id = id;
    this.name = name;
    this.rating= rating;
    this.category = category;
    this.description = description;
    this.img = img;
    this.highlight = highlight;
    this.dishes = dishes
  }
}

export default Restaurant