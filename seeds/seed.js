const sequelize = require("../config/connection");
const { Customer} = require("../models");

const customerSeedData = require("./customerData.json");
const seatSeedData = require("./seatData.json");
const movieSeedData = require("./movieData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const customers = await Customer.bulkCreate(customerSeedData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // for (const customer of customerData) {
  //   await Customer.create({
  //     ...customer,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }
  // await Movies.bulkCreate(movieSeedData);
  await Customer.bulkCreate(customerSeedData);
  // await Seats.bulkCreate(seatSeedData);

  console.log("All seeds planted");
  process.exit(0);
};

seedDatabase();
