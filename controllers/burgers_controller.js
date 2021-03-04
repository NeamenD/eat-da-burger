var express = require("express");
const burger = require("../models/burgers.js");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
// Get the burgers DB and display it
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Add new burger to the db
router.post("/api/burgers", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function () {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

// Changes devoured status to true
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    function (data) {
      res.redirect("/");
    }
  );
});

// Delete burger from the db
router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  // console.log("condition", condition)

  burger.deleteOne(condition, function() {
  res.redirect("/");
  });  
});

// Export routes for server.js to use.
module.exports = router;