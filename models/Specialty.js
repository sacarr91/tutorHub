const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Specialty extends Model {}

Specialty.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    specialty_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'specialty',
  }
);

module.exports = Specialty;
