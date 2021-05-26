const Customer = require('./Customer');
const Movie = require('./Movie');

Customer.hasOne(Movie, {
  foreignKey: 'movie_id',
  onDelete: 'CASCADE'
});

Movie.belongsTo(Customer, {
  foreignKey: 'customer_id'
});

module.exports = {Customer, Movie};