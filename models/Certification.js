const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Certification extends Model {}

Certification.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    certification_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'certification',
  }
);

module.exports = Certification;
