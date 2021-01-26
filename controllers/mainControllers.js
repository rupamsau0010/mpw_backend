// require depandencies

// Import local depandencies
const IndexPage = require("../models/indexPage")

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