const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class TutorLink extends Model {}

TutorLink.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    platform_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'platform',
          key: 'id'
        },
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutor_link',
  }
);

module.exports = TutorLink;