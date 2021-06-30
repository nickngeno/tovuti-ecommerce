const express = require("express")
const router = express.Router()
const {getJerseys} = require("../controllers/jerseyControllers")

// routes
// get all jerseys 
router.get("/", getJerseys )

router.get("/list", getJerseys)

module.exports = router