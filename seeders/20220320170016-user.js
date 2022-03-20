'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'admin',
      email: 'admin@gmail.com',
      password: '$2b$10$aYLqZxAHHPXEX3W0Ygk4LuZjQiPEAT9mSRC.yac/OLX0Cn.Hu.Yz6',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
