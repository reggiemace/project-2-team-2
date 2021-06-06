const Customer = require('./Customer');
const Movie = require('./Movie');
// Define a customer as having many movies in the movied table
// Customer.hasMany(Movie, {
//   foreignKey: 'customer_id',
//   onDelete: 'CASCADE'
// });

// Movie.belongsTo(Customer, {
//   foreignKey: 'customer_id'
// });

Movie.hasOne(Customer, {
  foreignKey: 'movie_id'
})

module.exports = {Customer, Movie};