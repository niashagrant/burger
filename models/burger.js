var orm = require("../config/orm.js");

// code that calls the ORM fucntions using specific input for the ORM.

var burger = {
  all: function (cb) {
    orm.selectAll("burger", function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.createAll("burger", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColsVals, condition, cb) {
    orm.updateOne("burger", objColsVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
