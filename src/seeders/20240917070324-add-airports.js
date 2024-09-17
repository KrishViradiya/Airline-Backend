"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    // why we use seeders, because to statically insert bulk data and also we can erase it in bulk

    await queryInterface.bulkInsert("Airports", [
      {
        name: "Sardar Patel International Airport",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shree Motabhai Airport",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sardar Vallabhbhai Patel International Airport",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sardar Always Patel International Airport",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
