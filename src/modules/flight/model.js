const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../core/database/db.js");

class Fligth extends Model {}
Fligth.init(
  {
    flight_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  
  },
  { sequelize,
    modelName: "fligth",
    timestamps: false }
);

module.exports = Fligth;
