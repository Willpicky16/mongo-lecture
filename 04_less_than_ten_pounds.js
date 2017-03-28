use pizza_db;

db.pizzas.find(
  {price: {$lt: 10}}
).pretty();
