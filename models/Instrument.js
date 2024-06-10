const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Instrument extends Model {}

Instrument.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        instrument_name: {
            type: DataTypes.STRING,
        },

    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'instrument',
    }
);

module.exports = Instrument;