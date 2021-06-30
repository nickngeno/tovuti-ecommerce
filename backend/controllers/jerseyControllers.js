const mongoose = require("mongoose");
const Jersey = require("../models/jerseyModel");

// controller functions
module.exports.getJerseys = (req, res) => {
  Jersey.find({}, (err, response) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(response);
  });
};
