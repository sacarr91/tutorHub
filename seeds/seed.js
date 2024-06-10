require("dotenv").config({
  path: '../.env'
})
const sequelize = require('../config/connection');
const { User, Instrument } = require('../models');
const { Tutor } = require('../models');

const userData = require('./userData.json');
const tutorData = require('./tutorData.json');
const instrumentData = require('./instrumentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Tutor.bulkCreate(tutorData, {
    individualHooks: true,
    returning: true,
  });

  await Instrument.bulkCreate(instrumentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
