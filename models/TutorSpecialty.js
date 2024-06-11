const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class TutorSpecialty extends Model {}

TutorSpecialty.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    specialty_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'specialty',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutor_specialty',
  }
);

module.exports = TutorSpecialty;