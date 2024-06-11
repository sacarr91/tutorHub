const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Instrument extends Model {}

Instrument.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    instrument_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'instrument',
  }
);

module.exports = Instrument;