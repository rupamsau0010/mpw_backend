// Require Depandencies

// Import Local Depandebncies
const OthersPage = require("../models/othersPage")

const saveOthersPage = () => {
    const othersPage = new OthersPage({
        artificialName: "othersPage",
        educations: [
            {
                class: "10th",
                from: "Contai Model",
                gread: "10th"
            },
            {
                class: "10th",
                from: "Contai Model",
                gread: "10th"
            },
            {
                class: "10th",
                from: "Contai Model",
                gread: "10th"
            }
        ],
        achievements: [
            {
                name: "Directrix",
                info: "Intra College project competition",
                leader: "project Lerder"
            },
            {
                name: "Directrix",
                info: "Intra College project competition",
                leader: "project Lerder"
            },{
                name: "Directrix",
                info: "Intra College project competition",
                leader: "project Lerder"
            }
        ],
        projects: [
            {
                name: "Directrix",
                info: "Intra College project competition",
                leader: "project Lerder"
            },
            {
                name: "Directrix",
                info: "Intra College project competition",
                leader: "project Lerder"
            },{
                name: "Directrix",
                info: "Intra College project competition",
                leader: "project Lerder"
            }
        ],
        hobbies: [
            {
                typeOf: "Regular",
                names: "Cricket, Football"
            },
            {
                typeOf: "Regular",
                names: "Cricket, Football"
            },
            {
                typeOf: "Regular",
                names: "Cricket, Football"
            }
        ]
    })

    othersPage.save((err, result) => {
        if(result && !err) {
            console.log(result);
        } else {
            console.log(err);
        }
    })
}

module.exports = saveOthersPage