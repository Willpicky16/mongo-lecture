use pizza_db;

db.pizzas.find(
  {price: {$lt: 10}, customer_rating: {$gt: 3}}
).pretty();
