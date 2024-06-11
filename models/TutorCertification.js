const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class TutorCertification extends Model {}

TutorCertification.init(
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
    certification_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'certification',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutor_certification',
  }
);

module.exports = TutorCertification;