const mongoose=require('mongoose')

const clientSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String

})

const ClientModel = mongoose.model("client",clientSchema)
module.exports = ClientModel