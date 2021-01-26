// Require Depandencies

// Import Local Depandebncies
const Coursespage = require("../models/coursesPage")

const saveCoursesPage = () => {
    const coursesPage = new Coursespage({
        artificialName: "coursesPage",
        coursesData: [
            {
                title: "Full Stack developer",
                tagLine: "For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favourable mrs can projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered jennings perceive laughing six did far.",
                image: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
            },
            {
                title: "Full Stack developer",
                tagLine: "For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favourable mrs can projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered jennings perceive laughing six did far.",
                image: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
            },
            {
                title: "Full Stack developer",
                tagLine: "For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favourable mrs can projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered jennings perceive laughing six did far.",
                image: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
            }
        ]
    })

    coursesPage.save((err, result) => {
        if(!err && result) {
            console.log(result);
        } else {
            console.log(err);
        }
    }) 
}

module.exports = saveCoursesPage