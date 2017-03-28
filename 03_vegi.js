use pizza_db;

db.pizzas.find(
  {"vegetarian": true}
).pretty();
