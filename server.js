// require depandencies
require("dotenv").config()

const express = require("express")
const app = express()

// Import local depandencies
const mongoConnect = require("./configs/mongoDB")

// Connect to mongoDB Cluster
mongoConnect()

// Running the server on port 5000
const port = process.env.PORT
app.listen(port || 5000, () => {
    console.log(`Server is running on port ${port} or 5000`)
})