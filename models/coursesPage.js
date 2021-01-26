// Require the depandencies
const mongoose = require("mongoose")

const coursesSchema = new mongoose.Schema({
    artificialName: {
        type: String,
        required: true
    },
    coursesData: [
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

module.exports = mongoose.model("coursespage", coursesSchema)