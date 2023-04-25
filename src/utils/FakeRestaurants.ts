/* Class */
import Restaurant from "../models/Restaurant";
/* img */
import hiokiImg from '../assets/images/hioki-sushi-bg.svg'
import laDolceImg from '../assets/images/la-dolce-tratoria-bg.svg'
import tratBellaImg from '../assets/images/rsz_trattoriatest.jpg'
import sakuraImg from '../assets/images/sakura-bg.png'
import bangkokImg from '../assets/images/bangkok-bg.png'
import elPatronImg from '../assets/images/elPatron-bg.png'
import leBistroImg from '../assets/images/leBistro-bg.png'
import tajMahalImg from '../assets/images/tajMahal-bg.png'



type RestaurantsArray = Restaurant[];

const RestaurantsFakeAPI: RestaurantsArray = [
  {
    id: 1,
    name: 'Hioki Sushi',
    rating: 4.9,
    category: 'Japanese',
    highlight: true,
    description: 'Peça já o melhor da culinária japonesa no conforta da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    img: hiokiImg
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    category: 'Italian',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    img: laDolceImg
  },
  {
    id: 3,
    name: 'Trattoria Bella',
    rating: 4.5,
    category: 'Italian',
    description: 'Trattoria Bella is a charming Italian restaurant, serving fresh pasta, wood-fired pizza, and authentic Italian dishes. The cozy atmosphere and attentive service make it the perfect place for a romantic dinner or family gathering. Don\'t forget to try their classic Tiramisu for dessert!',
    img: tratBellaImg
  },
  {
    id: 4,
    name: 'Sakura Sushi',
    rating: 4.8,
    category: 'Japanese',
    description: 'Sakura Sushi is an elegant Japanese restaurant, offering an extensive menu of sushi, sashimi, and other Japanese specialties. The expert chefs use only the freshest ingredients to create dishes that are both visually stunning and delicious. With its sophisticated ambiance and attentive service, Sakura Sushi is perfect for a date or special occasion.',
    img: sakuraImg
  },
  {
    id: 5,
    name: 'Taj Mahal',
    rating: 4.2,
    category: 'Indian',
    description: 'Taj Mahal is a vibrant Indian restaurant, serving up spicy and aromatic dishes such as Chicken Tikka Masala, Butter Chicken, and Lamb Vindaloo. The warm and inviting atmosphere, coupled with attentive service, creates the perfect setting for a memorable dining experience. Be sure to try their refreshing Mango Lassi!',
    img: tajMahalImg
  },
  {
    id: 6,
    name: 'El Patron',
    rating: 4.4,
    category: 'Mexican',
    description: 'El Patron is a colorful Mexican restaurant, serving traditional dishes such as Tacos Al Pastor, Enchiladas, and Queso Fundido. The festive ambiance and delicious margaritas make it the perfect spot for a night out with friends or family. End the meal with a sweet treat like Churros.',
    img: elPatronImg
  },
  {
    id: 7,
    name: 'Le Bistro',
    rating: 4.6,
    category: 'French',
    description: 'Le Bistro is a charming French restaurant, serving classic dishes such as Coq Au Vin, Beef Bourguignon, and Ratatouille. The warm and cozy ambiance, along with the carefully curated wine list, make it the perfect place for a romantic dinner or intimate gathering. Don\'t forget to indulge in their classic Crème Brûlée.',
    img: leBistroImg
  },
  {
    id: 8,
    name: 'Bangkok Kitchen',
    rating: 4.3,
    category: 'Thai',
    description: 'Bangkok Kitchen is a lively Thai restaurant, offering flavorful dishes such as Pad Thai, Green Curry, and Tom Yum Soup. The vibrant and colorful atmosphere, along with the friendly service, create the perfect setting for a casual night out with friends. Be sure to try their spicy Papaya Salad for a kick of heat!',
    img: bangkokImg
  }
]

export default RestaurantsFakeAPI