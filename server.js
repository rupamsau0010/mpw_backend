// require depandencies
require("dotenv").config()

const express = require("express")
const app = express()

// Import local depandencies
const mongoConnect = require("./configs/mongoDB")
const mainRoutes = require("./routes/mainRoutes")
// const saveIndexPage = require("./temp/indexPageInput")

// Connect to mongoDB Cluster
mongoConnect()

// Middlewares for express
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Router Calling
// saveIndexPage()
app.use(mainRoutes)

// Running the server on port 5000
const port = process.env.PORT
app.listen(port || 5000, () => {
    console.log(`Server is running on port ${port} or 5000`)
})