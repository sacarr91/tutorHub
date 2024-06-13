require("dotenv").config({
  path: '../.env'
})
const sequelize = require('../config/connection');
const { 
  User,
  Role, 
  Instrument, 
  UserInstrument, 
  Certification, 
  TutorCertification, 
  Specialty, 
  TutorSpecialty,
  TutorLink,
TutorReview } 
  
  = require('../models');

const userData = require('./userData.json');
const roleData = require('./roleData.json');
const instrumentData = require('./instrumentData.json');
const userInstrumentData = require('./userInstrumentData.json');
const certificationData = require('./certificationData.json');
const tutorCerificationData = require('./tutorCertificationData.json');
const specialtyData = require('./specialtyData.json');
const tutorSpecialtyData = require('./tutorSpecialtyData.json');
const tutorLinkData = require('./tutorLinkData.json');
const tutorReviewData = require('./tutorReview.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Role.bulkCreate(roleData, {
    returning: true,
  });

  await Instrument.bulkCreate(instrumentData, {
    returning: true,
  });

  await Certification.bulkCreate(certificationData, {
    returning: true,
  });

  await Specialty.bulkCreate(specialtyData, {
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await UserInstrument.bulkCreate(userInstrumentData, {
    returning: true,
  });

  await TutorCertification.bulkCreate(tutorCerificationData, {
    returning: true,
  });

  await TutorSpecialty.bulkCreate(tutorSpecialtyData, {
    returning: true,
  });

  await TutorLink.bulkCreate(tutorLinkData, {
    returning: true,
  });

  await TutorReview.bulkCreate(tutorReviewData, {
    returning: true,
  })

  process.exit(0);
};

seedDatabase();
