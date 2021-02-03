// Require the depandencies
const mongoose = require("mongoose")

const indexPageSchema = new mongoose.Schema({
    artificialName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    },
    aboutMe: {
        type: String,
        required: true
    },
    services: [
        {
            class: {type: String, required: true},
            name: {type: String, required: true},
            tagLine: {type: String, required: true}
        }
    ],
    skillsMain: {
        type: String,
        required: true
    },
    contact: {
        tagLine: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model("indexpage", indexPageSchema)