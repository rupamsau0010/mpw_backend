// require depandencies
require("dotenv").config()

const express = require("express")
// const cors = require("cors")
const app = express()

// Import local depandencies
const mongoConnect = require("./configs/mongoDB")
const mainRoutes = require("./routes/mainRoutes")
// const saveIndexPage = require("./temp/indexPageInput")
// const saveServicesPage = require("./temp/servicesPageInput") 
// const saveSkillsPage = require("./temp/skillsPageInput")
// const saveCoursesPage = require("./temp/coursesPageInput")
// const saveOthersPage = require("./temp/othersPageInput")

// Connect to mongoDB Cluster
mongoConnect()

// Middlewares for express
app.use(express.json())
// app.use(cors())
app.use(express.urlencoded({extended: true}))

// temp page calling
// saveIndexPage()
// saveServicesPage()
// saveSkillsPage()
// saveCoursesPage()
// saveOthersPage()

// Router Calling
app.use(mainRoutes)

// Running the server on port 5000
const port = process.env.PORT
app.listen(port || 5000, () => {
    console.log(`Server is running on port ${port} or 5000`)
})