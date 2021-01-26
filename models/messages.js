// Require the depandencies
const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    viewed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("message", messageSchema)