// Mock data for restaurants, menus, and users

export const users = [
  {
    id: 1,
    username: "john",
    password: "1234",
    orders: [],
  },
  {
    id: 2,
    username: "jane",
    password: "abcd",
    orders: [],
  },
];

// Replace each restaurant's 'image' field with a unique, working Unsplash image URL. No duplicates. Use direct Unsplash links for food/restaurant themes.
const workingImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1548365328-8b849e6c7b8b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1514512364185-4c2b678557dd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-ec6b0b1b6c9e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1523475496153-3d6cc8760bc7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
];

export const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    menu: [
      { id: 1, name: "Margherita Pizza", price: 10, description: "Classic cheese & tomato", image: "https://images.unsplash.com/photo-1548365328-8b849e6c7b8b" },
      { id: 2, name: "Pepperoni Pizza", price: 12, description: "Pepperoni & cheese", image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c" },
    ],
    reviews: [
      { user: "john", rating: 5, comment: "Great pizza!" },
      { user: "jane", rating: 4, comment: "Tasty but a bit salty." },
    ],
  },
  {
    id: 2,
    name: "Sushi World",
    cuisine: "Japanese",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    menu: [
      { id: 1, name: "Salmon Nigiri", price: 8, description: "Fresh salmon over rice", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288" },
      { id: 2, name: "Tuna Roll", price: 7, description: "Tuna roll with rice and seaweed", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc" },
    ],
    reviews: [
      { user: "jane", rating: 5, comment: "Best sushi in town!" },
    ],
  },
  {
    id: 3,
    name: "Empire Restaurant",
    cuisine: "North Indian",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    menu: [
      { id: 1, name: "Butter Chicken", price: 15, description: "Creamy tomato chicken curry", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
      { id: 2, name: "Paneer Tikka", price: 12, description: "Grilled paneer cubes", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc" },
    ],
    reviews: [
      { user: "arjun", rating: 5, comment: "Authentic taste!" },
    ],
  },
  {
    id: 4,
    name: "Truffles",
    cuisine: "American",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
    menu: [
      { id: 1, name: "Classic Burger", price: 9, description: "Juicy beef burger", image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c" },
      { id: 2, name: "Cheese Fries", price: 6, description: "Fries with cheese sauce", image: "https://images.unsplash.com/photo-1548365328-8b849e6c7b8b" },
    ],
    reviews: [
      { user: "sara", rating: 5, comment: "Best burgers in Bangalore!" },
    ],
  },
  {
    id: 5,
    name: "Meghana Foods",
    cuisine: "Andhra",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    menu: [
      { id: 1, name: "Chicken Biryani", price: 14, description: "Spicy Andhra biryani", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288" },
      { id: 2, name: "Veg Biryani", price: 11, description: "Vegetarian biryani", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc" },
    ],
    reviews: [
      { user: "ravi", rating: 5, comment: "Biryani is a must-try!" },
    ],
  },
  {
    id: 6,
    name: "Corner House",
    cuisine: "Desserts",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1548365328-8b849e6c7b8b",
    menu: [
      { id: 1, name: "Death by Chocolate", price: 8, description: "Chocolate ice cream sundae", image: "https://images.unsplash.com/photo-1548365328-8b849e6c7b8b" },
      { id: 2, name: "Hot Chocolate Fudge", price: 7, description: "Fudge with ice cream", image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c" },
    ],
    reviews: [
      { user: "anita", rating: 5, comment: "Heaven for dessert lovers!" },
    ],
  },
  {
    id: 7,
    name: "MTR 1924",
    cuisine: "South Indian",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    menu: [
      { id: 1, name: "Rava Idli", price: 5, description: "Steamed semolina idli", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc" },
      { id: 2, name: "Masala Dosa", price: 7, description: "Crispy dosa with potato filling", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288" },
    ],
    reviews: [
      { user: "deepak", rating: 5, comment: "Classic Bangalore breakfast!" },
    ],
  },
  {
    id: 8,
    name: "Nagarjuna",
    cuisine: "Andhra",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    menu: [
      { id: 1, name: "Andhra Meals", price: 13, description: "Traditional Andhra thali", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
      { id: 2, name: "Chicken Fry", price: 12, description: "Spicy chicken fry", image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c" },
    ],
    reviews: [
      { user: "priya", rating: 4, comment: "Loved the meals!" },
    ],
  },
  {
    id: 9,
    name: "Toit",
    cuisine: "Brewery",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
    menu: [
      { id: 1, name: "Wood-fired Pizza", price: 13, description: "Pizza from wood-fired oven", image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c" },
      { id: 2, name: "Craft Beer", price: 6, description: "House-brewed beer", image: "https://images.unsplash.com/photo-1548365328-8b849e6c7b8b" },
    ],
    reviews: [
      { user: "rahul", rating: 5, comment: "Great vibe and food!" },
    ],
  },
  {
    id: 10,
    name: "Airlines Hotel",
    cuisine: "South Indian",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    menu: [
      { id: 1, name: "Set Dosa", price: 6, description: "Soft dosas with chutney", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc" },
      { id: 2, name: "Filter Coffee", price: 3, description: "Classic South Indian coffee", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288" },
    ],
    reviews: [
      { user: "meera", rating: 4, comment: "Lovely garden seating!" },
    ],
  },
  {
    id: 11,
    name: "CTR (Central Tiffin Room)",
    cuisine: "South Indian",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    menu: [
      { id: 1, name: "Benni Masala Dosa", price: 8, description: "Crispy dosa with butter", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc" },
      { id: 2, name: "Filter Coffee", price: 3, description: "Classic filter coffee", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288" },
    ],
    reviews: [
      { user: "kiran", rating: 5, comment: "Best dosa in Bangalore!" },
    ],
  },
  {
    id: 12,
    name: "Vidyarthi Bhavan",
    cuisine: "South Indian",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    menu: [
      { id: 1, name: "Masala Dosa", price: 7, description: "Iconic crispy dosa", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc" },
      { id: 2, name: "Rava Vada", price: 5, description: "Crispy vada", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288" },
    ],
    reviews: [
      { user: "suman", rating: 5, comment: "A must-visit for dosa lovers!" },
    ],
  },
  {
    id: 13,
    name: "Karavalli",
    cuisine: "Coastal",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    menu: [
      { id: 1, name: "Meen Pollichathu", price: 18, description: "Fish in banana leaf", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
      { id: 2, name: "Appam & Stew", price: 14, description: "Appam with coconut stew", image: "https://images.unsplash.com/photo-1548365328-8b849e6c7b8b" },
    ],
    reviews: [
      { user: "leena", rating: 5, comment: "Authentic coastal flavors!" },
    ],
  },
  {
    id: 14,
    name: "Brahmin's Coffee Bar",
    cuisine: "South Indian",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    menu: [
      { id: 1, name: "Idli Vada", price: 6, description: "Soft idlis and crispy vada", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc" },
      { id: 2, name: "Chutney", price: 2, description: "Famous coconut chutney", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288" },
    ],
    reviews: [
      { user: "arvind", rating: 5, comment: "Simple and delicious!" },
    ],
  },
  {
    id: 15,
    name: "The Only Place",
    cuisine: "Continental",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
    menu: [
      { id: 1, name: "Steak", price: 20, description: "Juicy grilled steak", image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c" },
      { id: 2, name: "Apple Pie", price: 8, description: "Classic dessert", image: "https://images.unsplash.com/photo-1548365328-8b849e6c7b8b" },
    ],
    reviews: [
      { user: "sneha", rating: 5, comment: "Best steak in town!" },
    ],
  },
].map((r, i) => ({
  ...r,
  image: workingImages[i] || r.image
})); 