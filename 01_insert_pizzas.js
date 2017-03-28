use pizza_db;

db.pizzas.insert([
  {
      name: 'Vegi Hot',
      price: 6.95,
      vegetarian: true,
      toppings: ['Cheese', 'Tomato', 'Oregano', 'Chili', 'Peppers', 'Onions'],
      customer_rating: 5
  },
  {
      name: 'Peperoni',
      price: 11.95,
      vegetarian: false,
      toppings: ['Cheese', 'Tomato', 'Oregano', 'Peperoni'],
      customer_rating: 4
  },
  {
      name: 'Catch of the Day',
      price: 8.95,
      vegetarian: false,
      toppings: ['Cheese', 'Tomato', 'Oregano', 'Tuna', 'Peppers', 'Onions', 'Prawns'],
      customer_rating: 3
  }
])
