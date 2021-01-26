// Require the depandencies
const mongoose = require("mongoose")

const skillsSchema = new mongoose.Schema({
    artificialName: {
        type: String,
        required: true
    },
    skillsData: [
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

module.exports = mongoose.model("skillspage", skillsSchema)