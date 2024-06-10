require("dotenv").config({
  path: '../.env'
})
const sequelize = require('../config/connection');
const { User, Role } = require('../models');

const userData = require('./userData.json');
const roleData = require('./roleData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Role.bulkCreate(roleData, {
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
