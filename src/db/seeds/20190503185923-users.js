'use strict';
let users = [
  {
    email: "user1@example.com",
    password: "1234567",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    email: "user2@example.com",
    password: "1234567",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    email: "user3@example.com",
    password: "1234567",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Users", null, {});
  }
};
