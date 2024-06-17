const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class UserInstrument extends Model {}

UserInstrument.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
    instrument_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "instrument",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_instrument",
  }
);

module.exports = UserInstrument;
