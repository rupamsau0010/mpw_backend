// Require depandencies
const express = require("express")
const router = express.Router()

// Import local depandencies
const mainControllers = require("../controllers/mainControllers")

// indexPage_get
router.get("/indexpage", mainControllers.indexPage_get)

// servicesPage_get
router.get("/servicespage", mainControllers.servicesPage_get)

// skillsPage_get 
router.get("/skillspage", mainControllers.skillsPage_get)

// coursesPage_get
router.get("/coursespage", mainControllers.coursesPage_get)

// othersPage_get
router.get("/otherspage", mainControllers.othersPage_get)

// export the module
module.exports = router