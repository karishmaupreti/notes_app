const mongoose=require("mongoose")
const uri="mongodb+srv://karishma_upreti:qwertys50@cluster0.bkwlojt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
require("dotenv").config()

const connection=mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports={
    connection,
}