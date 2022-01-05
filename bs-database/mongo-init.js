db = db.getSiblingDB('bs');

db.createCollection('dailymenus');
db.createCollection('menus');
db.createCollection('promotions');
db.createCollection('reviews');
db.createCollection('users');

db.dailymenus.insertMany([{
  title: "Menu du jour",
  active: true,
  pdf: "http://localhost:1470/upload/document/Menu_1641246290792.pdf"
}]);

db.menus.insertMany(
  [{
    title: "Pad Thaï",
    price: 22,
    description: "Le repas préféré d'Hanna",
    language: "en",
    category: "main",
    image: "http://localhost:1470/upload/image/restaurant_vegetarien_1641221143733.jpg"
  }, {
    title: "Poulet aigre-doux",
    price: 3,
    image: "http://localhost:1470/upload/image/restaurant_aigredoux_1641221143729.jpg",
    description: "Poulet légèrement piquant",
    category: "main",
    language: "en"
  }, {
    title: "Poulet Cajou",
    price: 19,
    image: "http://localhost:1470/upload/image/restaurant_cajou_1641221143725.jpg",
    description: "What an awesome meal",
    language: "en",
    category: "main"
  }, {
    title: "Tako",
    price: 12,
    image: "http://localhost:1470/upload/image/restaurant_tako_1641283880350.jpg",
    description: "This is an awesome rice dessert",
    category: "dessert",
    language: "en"
  }, {
    title: "Poulet Satay",
    price: 12,
    image: "http://localhost:1470/upload/image/restaurant_satay_1641283910221.jpg",
    description: "Satay chicken breast skewer",
    category: "starter",
    language: "en"
  }, {
    title: "Spring Rolls",
    price: 9,
    image: "http://localhost:1470/upload/image/restaurant_printemps_1641284016553.jpg",
    description: "Delicious spring roll served with hot sauce",
    category: "starter",
    language: "en"
  }, {
    title: "Apple Donut",
    price: 9,
    image: "http://localhost:1470/upload/image/restaurant_pomme_1641284057868.jpg",
    description: "This is a speciality of the chef",
    category: "dessert",
    language: "en"
  }, {
    title: "Red Curry",
    price: 25,
    image: "http://localhost:1470/upload/image/restaurant_curryrouge2_1641284131703.jpg",
    description: "This is a hot curry with chicken or beef",
    category: "main",
    language: "en"
  }, {
    title: "Tom Yun Kun soup",
    price: 13,
    image: "http://localhost:1470/upload/image/restaurant_soup_1641284222032.jpg",
    description: "The famous Thaï soup with chicken",
    category: "starter",
    language: "en"
  }]
);

db.promotions.insertMany([{
  title: "New Year Fondue",
  subtitle: "In the postal bus",
  image: "http://localhost:1470/upload/image/promotion_fondue_1641198942771.jpg",
  description: "You can enjoy our fondue in a brand new stemper.",
  pdf: "",
  language: "en"
}, {
  title: "Luge ",
  subtitle: "adelboden/lenk",
  image: "http://localhost:1470/upload/image/promotion_luge_1641198993725.jpg",
  description: "Come to feel the speed of the winter sports!",
  pdf: "",
  language: "en"
}, {
  title: "New Year Bar",
  subtitle: "The truck",
  image: "http://localhost:1470/upload/image/promotion_bar_1641199060782.jpg",
  description: "Discover our new year's bar!",
  pdf: "http://localhost:1470/upload/document/Menu_1641208245826.pdf",
  language: "en"
}, {
  title: "Ski World Cup",
  subtitle: "Chuenis",
  image: "http://localhost:1470/upload/image/promotion_weltskicup_1641199189479.jpg",
  description: "This is the time to support your national team for the ski competition",
  pdf: "",
  language: "en"
}]);

db.reviews.insertMany(
  [{
    rating: {
      clean: 9,
      service: 7,
      comfort: 8,
      spot: 8,
      amenity: 3,
      breakfast: 8
    },
    active: false,
    description: "Ceci est un article à garder car j'ai passé du temps dessus. J'ai adoré faire du bob dans cet endroit magnifique.",
    author: "Irène D'Ancona",
    date: "3/9/2020"
  }, {
    rating: {
      clean: 9,
      service: 9,
      comfort: 10,
      spot: 10,
      amenity: 6,
      breakfast: 10
    },
    active: true,
    description: "Je me suis toujours demandé pourquoi je ne monterai pas plus souvent à l'hôtel BeauSite. l'endroit est si bucolique. J'adore le schnaps des campagnes qu'ils servent dans les égouts juste à côté",
    author: "Géraldine Cuennet",
    date: "4/9/2020"
  }, {
    rating: {
      clean: 8,
      service: 10,
      comfort: 10,
      spot: 10,
      amenity: 9,
      breakfast: 10
    },
    active: true,
    description: "C'était un séjour très agréable. J'ai adoré promener Tara",
    author: "Hanna Luniakina",
    date: "17/8/2021"
  }, {
    rating: {
      clean: 9,
      service: 6,
      comfort: 6,
      spot: 7,
      amenity: 5,
      breakfast: 7
    },
    active: false,
    description: "J'ai vraiment trouvé la forêt à Adelboden féérique. J'ai presque envie de me détendre mon arc.",
    author: "Miya Anderson",
    date: "19/8/2021"
  }, {
    rating: {
      clean: 3,
      service: 10,
      comfort: 5,
      spot: 10,
      amenity: 10,
      breakfast: 4
    },
    active: true,
    description: "Hey everyone! I have just returned from Hotel Beausite in Adelboden, spending 4 days with my wife and the kids. But after I fucked the janitor and the masseuse and also the owner's dog, my wife absolutely want to divorce. Beside of that, I would rate 10/10 this Hotel. Peace and love.\n\n",
    author: "Daniel Gronokh",
    date: "22/8/2021"
  }]
);

db.users.insertMany([{
  username: "kabir",
  password: "$2b$10$mMaT2de2O7hrOl8w2FmUrOTJPdy/F4GJPdAh3TUh/SC3PsdmgC2ie"
}]);
