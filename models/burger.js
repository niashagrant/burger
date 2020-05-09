var orm = require("../config/orm.js");

// code that calls the ORM fucntions using specific input for the ORM.

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  createAll: function (cols, vals, cb) {
    orm.createAll("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateAll: function (objColsVals, condition, cb) {
    orm.updateOne("burgers", objColsVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
