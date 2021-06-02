const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    movie_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    show_time: {
      type: DataTypes.STRING,
    },
    total_seats: {
      type: DataTypes.INTEGER,
    },
    selected_seats: {
      type: DataTypes.INTEGER,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // customer_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "movie",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "movie",
  }
);

module.exports = Movie;
