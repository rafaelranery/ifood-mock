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
  /* dishes */
  import dulceMarguerita from '../assets/images/La dulce vida trattoria/marguerita.svg'
  /* trattoriaBella */
  import bruschettaImg from '../assets/images/TrattoriaBella/bruschetta.jpg'
  import carbonaraImg from '../assets/images/TrattoriaBella/carbonara.jpg'
  import fettImg from '../assets/images/TrattoriaBella/fettuccine-alfredo.jpg'
  import ossoImg from '../assets/images/TrattoriaBella/ossoBuco.jpg'
  import margheritaImg from '../assets/images/TrattoriaBella/pizza-margherita.jpg'
  import tiramisuImg from '../assets/images/TrattoriaBella/tiramisu.jpg'
  /* sakura */
  import californiaImg from '../assets/images/sakuraSushi/california-roll.jpg'
  import matchaImg from '../assets/images/sakuraSushi/matcha.jpg'
  import misoImg from '../assets/images/sakuraSushi/mushroom-miso-soup-kb-main-210914.jpg'
  import sashImg from '../assets/images/sakuraSushi/sashimi-platter.jpg'
  import tempuraImg from '../assets/images/sakuraSushi/tempura-udon-640.jpg'
  import teryakiImg from '../assets/images/sakuraSushi/teryaki.jpg'
  /* tajmahal */
  import butterImg from '../assets/images/tajmahal/butterChicken.jpg'
  import naanImg from '../assets/images/tajmahal/NAAN-Bread-2.jpg'
  import tikkaImg from '../assets/images/tajmahal/chickenTikka.jpg'
  import mangoImg from '../assets/images/tajmahal/mangoLassi.jpg'
  import samosasImg from '../assets/images/tajmahal/samosas.jpg'
  import vindalooImg from '../assets/images/tajmahal/vindaloo.jpg'
  /* el patron */
  import guacamoleImg from '../assets/images/elPatron/Guacamole-freepik-780x520.jpg'
  import quesoImg from '../assets/images/elPatron/QuesoFundidoWithChorizo-1.jpg'
  import churrosImg from '../assets/images/elPatron/churros.jpg'
  import enchiladasImg from '../assets/images/elPatron/enchiladas.jpg'
  import margaritaImg from '../assets/images/elPatron/margarita-tradicional.jpg'
  import tacosImg from '../assets/images/elPatron/tacos.jpg'
  /* le bistro */
  import baguetteImg from '../assets/images/leBistro/baguette.jpg'
  import beefImg from '../assets/images/leBistro/beefbourguignon.jpg'
  import coqImg from '../assets/images/leBistro/coqauvin.jpg'
  import cremeImg from '../assets/images/leBistro/creme-brulee-destaque-960x625.jpg'
  import escargotImg from '../assets/images/leBistro/escargot.jpg'
  import rattImg from '../assets/images/leBistro/ratt.jpg'
  /* bangkok */
  import curreyGImg from '../assets/images/bangkok/Thai-curry-new-WP1-1920x1080.jpg'
  import papyaImg from '../assets/images/bangkok/laos-green-papaya-salad-tam-mak-hoong-a9c6812c235d8cf55fe60c7da135df8d-2560-q60.jpg'
  import padThaiImg from '../assets/images/bangkok/padThai.jpg'
  import tomYumImg from '../assets/images/bangkok/tom-yum-soup-best-3217653-Hero_01-1bf2ac7948fc407c97db9ee2d1aa2b9b.jpg'


type RestaurantsArray = Restaurant[];

const RestaurantsFakeAPI: RestaurantsArray = [
  {
    id: 1,
    name: 'Hioki Sushi',
    rating: 4.9,
    category: 'Japanese',
    highlight: true,
    description: 'Peça já o melhor da culinária japonesa no conforta da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    img: hiokiImg,
    dishes: [
      {
        name: 'Sashimi Platter',
        description: 'Assorted fresh raw fish served with soy sauce, wasabi, and pickled ginger.',
        img: sashImg,
      },
      {
        name: 'Chicken Teriyaki',
        description: 'Grilled chicken with a sweet and savory teriyaki sauce, served with rice and vegetables.',
        img: teryakiImg,
      },
      {
        name: 'Miso Soup',
        description: 'Savory soup made with miso paste, seaweed, and tofu.',
        img: misoImg,
      },
      {
        name: 'Matcha Ice Cream',
        description: 'Creamy ice cream flavored with powdered green tea, a popular Japanese dessert.',
        img: matchaImg,
      },
    ]
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    category: 'Italian',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    img: laDolceImg,
    dishes: [
      {
        name: 'Margherita Pizza',
        description: 'Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.',
        img: dulceMarguerita
      }
    ]
  },
  {
    id: 3,
    name: 'Trattoria Bella',
    rating: 4.5,
    category: 'Italian',
    description: 'Trattoria Bella is a charming Italian restaurant, serving fresh pasta, wood-fired pizza, and authentic Italian dishes. The cozy atmosphere and attentive service make it the perfect place for a romantic dinner or family gathering.',
    img: tratBellaImg,
    dishes: [
      {
        name: 'Margherita Pizza',
        description: 'Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.',
        img: margheritaImg,
      },
      {
        name: 'Spaghetti Carbonara',
        description: 'Pasta dish with eggs, bacon, cheese, and black pepper.',
        img: carbonaraImg,
      },
      {
        name: 'Fettuccine Alfredo',
        description: 'Creamy pasta dish made with butter, cream, and Parmesan cheese.',
        img: fettImg,
      },
      {
        name: 'Tiramisu',
        description: 'Italian dessert with layers of espresso-dipped ladyfingers and mascarpone cheese.',
        img: tiramisuImg,
      },
      {
        name: 'Osso Buco',
        description: 'Italian dish made with braised veal shanks, vegetables, and broth.',
        img: ossoImg,
      },
      {
        name: 'Bruschetta',
        description: 'Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.',
        img: bruschettaImg,
      },
    ]
  },
  {
    id: 4,
    name: 'Sakura Sushi',
    rating: 4.8,
    category: 'Japanese',
    description: 'Sakura Sushi is an elegant Japanese restaurant, offering an extensive menu of sushi, sashimi, and other Japanese specialties. The expert chefs use only the freshest ingredients to create dishes that are both visually stunning and delicious.',
    img: sakuraImg,
    dishes: [
      {
        name: 'California Roll',
        description: 'Sushi roll filled with crab meat, avocado, and cucumber, wrapped in seaweed and rice.',
        img: californiaImg,
      },
      {
        name: 'Sashimi Platter',
        description: 'Assorted fresh raw fish served with soy sauce, wasabi, and pickled ginger.',
        img: sashImg,
      },
      {
        name: 'Chicken Teriyaki',
        description: 'Grilled chicken with a sweet and savory teriyaki sauce, served with rice and vegetables.',
        img: teryakiImg,
      },
      {
        name: 'Tempura Udon',
        description: 'Thick udon noodles in a hot dashi broth with crispy tempura shrimp and vegetables.',
        img: tempuraImg,
      },
      {
        name: 'Miso Soup',
        description: 'Savory soup made with miso paste, seaweed, and tofu.',
        img: misoImg,
      },
      {
        name: 'Matcha Ice Cream',
        description: 'Creamy ice cream flavored with powdered green tea, a popular Japanese dessert.',
        img: matchaImg,
      },
    ]
  },
  {
    id: 5,
    name: 'Taj Mahal',
    rating: 4.2,
    category: 'Indian',
    description: 'Taj Mahal is a vibrant Indian restaurant, serving up spicy and aromatic dishes such as Chicken Tikka Masala, Butter Chicken, and Lamb Vindaloo. The warm and inviting atmosphere, coupled with attentive service, creates the perfect setting for a memorable dining experience.',
    img: tajMahalImg,
    dishes: [
      {
        name: 'Chicken Tikka Masala',
        description: 'Grilled chicken in a creamy tomato sauce with spices.',
        img: tikkaImg,
      },
      {
        name: 'Naan Bread',
        description: 'Soft, fluffy Indian bread baked in a clay oven, served with curry dishes.',
        img: naanImg,
      },
      {
        name: 'Samosas',
        description: 'Fried or baked pastry filled with spiced potatoes, vegetables, or meat.',
        img: samosasImg,
      },
      {
        name: 'Butter Chicken',
        description: 'Marinated chicken cooked in a rich, buttery tomato-based sauce.',
        img: butterImg,
      },
      {
        name: 'Lamb Vindaloo',
        description: 'Spicy curry dish with tender lamb, potatoes, and vinegar.',
        img: vindalooImg,
      },
      {
        name: 'Mango Lassi',
        description: 'Sweet and creamy yogurt-based drink flavored with fresh mango.',
        img: mangoImg,
      },
    ]
  },
  {
    id: 6,
    name: 'El Patron',
    rating: 4.4,
    category: 'Mexican',
    description: 'El Patron is a colorful Mexican restaurant, serving traditional dishes such as Tacos Al Pastor, Enchiladas, and Queso Fundido. The festive ambiance and delicious margaritas make it the perfect spot for a night out with friends or family.',
    img: elPatronImg,
    dishes: [
      {
        name: 'Guacamole',
        description: 'Classic Mexican dip made with mashed avocado, onion, tomato, lime juice, and salt.',
        img: guacamoleImg,
      },
      {
        name: 'Tacos Al Pastor',
        description: 'Marinated pork cooked on a vertical spit, served in a soft tortilla with pineapple and cilantro.',
        img: tacosImg,
      },
      {
        name: 'Enchiladas',
        description: 'Rolled tortillas filled with meat or cheese, covered with sauce and cheese, and baked.',
        img: enchiladasImg,
      },
      {
        name: 'Queso Fundido',
        description: 'Melted cheese dish mixed with chorizo, served with tortillas or chips.',
        img: quesoImg,
      },
      {
        name: 'Churros',
        description: 'Deep-fried dough pastry sprinkled with cinnamon sugar, served with chocolate dipping sauce.',
        img: churrosImg,
      },
      {
        name: 'Margarita',
        description: 'Classic cocktail made with tequila, lime juice, and orange liqueur, served with salt on the rim.',
        img: margaritaImg,
      },
    ]
  },
  {
    id: 7,
    name: 'Le Bistro',
    rating: 4.6,
    category: 'French',
    description: 'Le Bistro is a charming French restaurant, serving classic dishes such as Coq Au Vin, Beef Bourguignon, and Ratatouille. The warm and cozy ambiance, along with the carefully curated wine list.',
    img: leBistroImg,
    dishes: [
      {
        name: 'Coq Au Vin',
        description: 'Chicken cooked in red wine with bacon, mushrooms, onions, and garlic.',
        img: coqImg,
      },
      {
        name: 'Escargots',
        description: 'Snails cooked with garlic butter and herbs, served in their shells.',
        img: escargotImg,
      },
      {
        name: 'Ratatouille',
        description: 'Stewed vegetables dish with eggplant, zucchini, peppers, and tomatoes.',
        img: rattImg,
      },
      {
        name: 'Crème Brûlée',
        description: 'Rich custard dessert topped with a layer of caramelized sugar.',
        img: cremeImg,
      },
      {
        name: 'Baguette',
        description: 'Classic French bread with a crispy crust and a soft, chewy interior.',
        img: baguetteImg,
      },
      {
        name: 'Beef Bourguignon',
        description: 'Beef stew cooked in red wine with carrots, onions, and mushrooms.',
        img: beefImg,
      },
    ]
  },
  {
    id: 8,
    name: 'Bangkok Kitchen',
    rating: 4.3,
    category: 'Thai',
    description: 'Bangkok Kitchen is a lively Thai restaurant, offering flavorful dishes such as Pad Thai, Green Curry, and Tom Yum Soup. The vibrant and colorful atmosphere, along with the friendly service.',
    img: bangkokImg,
    dishes: [
      {
        name: 'Pad Thai',
        description: 'Thai stir-fried noodles with veggies, peanuts, tofu, and a sweet and sour sauce.',
        img: padThaiImg,
      },
      {
        name: 'Tom Yum Soup',
        description: 'Spicy and sour soup made with lemongrass, lime, chili, and shrimp or chicken.',
        img: tomYumImg,
      },
      {
        name: 'Green Curry',
        description: 'Creamy coconut-based curry with green chili, veggies, and meat or seafood.',
        img: curreyGImg,
      },
      {
        name: 'Papaya Salad',
        description: 'Shredded green papaya, tomatoes, chili, and peanuts in a sweet and spicy dressing.',
        img: papyaImg,
      }
    ]
  }
]

export default RestaurantsFakeAPI