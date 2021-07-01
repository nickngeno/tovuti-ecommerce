const express = require("express")
const router = express.Router()
const {getJerseys, getJersey} = require("../controllers/jerseyControllers")
const Jersey = require("../models/jerseyModel");

// routes
// get all jerseys 
router.get("/", getJerseys )

router.get("/list", getJerseys)

router.get('/items/:id',(req, res) => {
    let myId = req.params.id;
    // res.send(myId)
    Jersey.findById(myId, (err, response) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(response);
    });
  });
module.exports = router