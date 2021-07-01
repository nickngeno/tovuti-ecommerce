const Jersey = require("../models/jerseyModel");

// controller functions
module.exports.getJerseys = (req, res) => {
  Jersey.find({}, (err, response) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(response);
  });
};

module.exports.getJersey = (req, res) => {
  const id = req.params;
  Jersey.findOne({_id:req.params.id}, (err, response) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(response);
  });
};
