const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class TutorReview extends Model {}

TutorReview.init(
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
        key: 'id',
      },
      allowNull: false,
    },
    student_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
    },
    allowNull: false
},
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutor_review',
  }
);

module.exports = TutorReview;