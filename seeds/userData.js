const { User } = require('../models');

const userData = 
[
  {
    firstName: "Pete",
    lastName: "Smith",
    email: "peter.appliedanalyticalsciences@gmail.com",
    password: "wordpass123",
    zipcode: "34695",
    userRole: "SuperUser"
  },
  {
    firstName: "Instructor1",
    lastName: "Ins-1-ln",
    email: "instructor-1@gmail.com",
    password: "password12345",
    zipcode: "34695",
    userRole: "Instructor"
  },
  {
    firstName: "Student1",
    lastName: "St-1-ln",
    email: "student-1@aol.com",
    password: "password12345",
    zipcode: "34695",
    userRole: "Student"
  },
];

const seedUsers= () => User.bulkCreate(userData);

module.exports = seedUsers;
