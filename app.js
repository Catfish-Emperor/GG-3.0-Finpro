require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const router = require("./routes/routes")

const app = express()
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

mongoose.connect('mongodb://0.0.0.0:27017/tokpedPlayClone',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to Database')
  })
  .catch((error) => {
    console.error('Error to connect Database')
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})