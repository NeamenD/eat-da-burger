// Import the ORM to implement functions that will interact with the database
var orm = require('../assests/config/orm');

// Create the burger object
var burger = {
  // Display all burgers
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // Add new burger
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // Change burger's devoured status to true
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },

// Delete burger from the db
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;