const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ClientModel = require('./models/clientmo')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/client");

app.post("/login", (req, res) => {
   const { email, password } = req.body;
   ClientModel.findOne({ email: email })
      .then(user => {
         if (user) {
            if (user.password === password) {
               res.json("success")
            }
            else {
               res.json("password is incorrect")
            }

         } else {
            res.json('record nt found')
         }
      })

})

app.post('/Signup', (req, res) => {
   ClientModel.create(req.body)
      .then(clients => res.json(clients))
      .catch(err => res.json(err))
})

app.listen(3001, () => {
   console.log("server is running")
})