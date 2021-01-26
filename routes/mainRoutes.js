// Require depandencies
const express = require("express")
const router = express.Router()

// Import local depandencies
const mainControllers = require("../controllers/mainControllers")

// indexPage_get
router.get("/indexpage", mainControllers.indexPage_get)

// export the module
module.exports = router