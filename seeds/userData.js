const { User } = require('../models');

const userData = 
[
  {
    "firstName": "Pete",
    "lastName": "Smith",
    "email": "peter.appliedanalyticalsciences@gmail.com",
    "password": "wordpass123",
    "zipcode": "34695",
    "userRole": "SuperUser"
  },
  {
    "firstName": "Instructor-1",
    "lastName": "INS-1-LN",
    "email": "instructor-1@gmail.com",
    "password": "password12345",
    "zipcode": "34695",
    "userRole": "Instructor"
  },
  {
    "firstName": "Student-1",
    "lastName": "Stdnt-1-ln",
    "email": "student-1@aol.com",
    "password": "password12345",
    "zipcode": "34695",
    "userRole": "Student"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
