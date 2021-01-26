// Require the depandencies
const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    artificialName: {
        type: String,
        required: true
    },
    Servicesdata: [
        {
            title: {
                type: String,
                required: true
            },
            tagLine: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        }
    ]
})

module.exports = mongoose.model("servicespage", serviceSchema)