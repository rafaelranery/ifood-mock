class Restaurant {
  id: number
  name: string
  rating: number
  category: string
  highlight?: boolean
  description: string
  img: string

  constructor(id: number, name: string, rating: number, category: string, description: string, img: string, highlight = false) {
    this.id = id;
    this.name = name;
    this.rating= rating;
    this.category = category;
    this.description = description;
    this.img = img;
    this.highlight = highlight;
  }
}

export default Restaurant