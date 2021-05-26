const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Customer extends Model {}

Customer.init(
  {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
  },
    
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "customer",
  }
);

module.exports = Customer;
