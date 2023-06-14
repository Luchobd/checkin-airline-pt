const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../core/database/db.js");

class Passenger extends Model {}
Passenger.init(
  {
    passenger_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  
  },
  { sequelize,
    modelName: "passenger",
    timestamps: false }
);

module.exports = Passenger;
