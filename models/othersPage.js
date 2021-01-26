// Require the depandencies
const mongoose = require("mongoose")

const otherSchema = new mongoose.Schema({
    artificialName: {
        type: String,
        required: true
    },
    educations: [
        {
            class: {
                type: String,
                required: true
            },
            from: {
                type: String,
                required: true
            },
            gread: {
                type: String,
                required: true
            }
        }
    ],
    achievements: [
        {
            name: {
                type: String,
                required: true
            },
            info: {
                type: String,
                required: true
            },
            leader: {
                type: String,
                required: true
            }
        }
    ],
    projects: [
        {
            name: {
                type: String,
                required: true
            },
            info: {
                type: String,
                required: true
            },
            leader: {
                type: String,
                required: true
            }
        }
    ],
    hobbies: [
        {
            typeOf: {
                type: String,
                required: true
            },
            names: {
                type: String,
                required: true
            }
        }
    ]
})

module.exports = mongoose.model("otherspage", otherSchema)