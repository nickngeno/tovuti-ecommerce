const mongoose = require("mongoose")

const jerseySchema = new mongoose.Schema({
    name: String,
    type:String,
    year: String,
    imageUrl: String,
    description: String,
    price: Number
})

const Jersey = mongoose.model("Jersey", jerseySchema)
module.exports = Jersey