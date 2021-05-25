const Customer = require('./Customer');
const Movie = require('./Movie');

Customer.hasMany(Movie, {
  foreignKey: 'movie_id',
  onDelete: 'CASCADE'
});

Movie.belongsTo(Customer, {
  foreignKey: 'movie_id'
});

module.exports = {Customer, Movie};