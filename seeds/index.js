require("dotenv").config({
    path: '../.env'
  })

const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedTutors = require('./tutorData');


const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedUsers();

    await seedTutors();

    process.exit(0);
    
  };
  
  seedAll();