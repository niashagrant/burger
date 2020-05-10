var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burger: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function (req, res) {
  burger.createAll(
    ["name", "completed"],
    [req.body.name, req.body, completed],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateAll({ completed: req.body.completed }, condition, function (
    result
  ) {
    if (result.changedRow == 0) {
      return res.status(404).end();
    } else {
      res.status(404).end();
    }
  });
});

module.exports = router;
