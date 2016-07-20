// var promise = require('bluebird');
//
// var options = {
//   // Initialization Options
//   promiseLib: promise
// };

var pgp = require('pg-promise');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/comics_blog';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllPuppies: getAllPuppies,
  getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy,
  updatePuppy: updatePuppy,
  removePuppy: removePuppy
};
