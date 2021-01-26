// require depandencies

// Import local depandencies
const IndexPage = require("../models/indexPage")
const ServicesPage = require("../models/servicesPage")

// Get the indexPage data
module.exports.indexPage_get = async(req, res) => {
    // Find the indexPage data and send to frontend
    IndexPage.findOne({ artificialName: "indexPage" }, function(err1, data1){
        if(data1 && !err1) {
            res.json({
                status: "success",
                payload: data1
            })
        } else {
            res.json({
                status: "failure",
                payload: null
            })
        }
    })
}

// Get the servicesPage data
module.exports.servicesPage_get = async(req, res) => {
    // Find the servicesPage data and show in the frontend
    ServicesPage.findOne({ artificialName: "servicesPage" }, function(err1, data1){
        if(data1 && !err1) {
            res.json({
                status: "success",
                payload: data1
            })
        } else {
            res.json({
                status: "failure",
                payload: null
            })
        }
    })
}