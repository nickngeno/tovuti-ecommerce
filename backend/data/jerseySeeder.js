require("dotenv").config()
const mongoose = require("mongoose")
const { Error } = require("mongoose")
const jerseyData= require('../data.json')
const Jersey = require('../models/jerseyModel')

// connect to db
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true})
mongoose.connection.on("connected", (err,response) =>{
  if(err) console.error(err)
  console.log("MongoDB connected!")
})
const importData = async() =>{
    try{

       await Jersey.deleteMany({})
       await Jersey.insertMany(jerseyData)
       console.log("data inserted")
       process.exit()

    }catch(error){
        console.log(error)
        process.exit()

    }
}
importData()

