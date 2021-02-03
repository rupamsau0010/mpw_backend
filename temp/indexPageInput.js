// Import depandencies

// Import local depandencies
const IndexPage = require("../models/indexPage");

const saveIndexPage = () => {
  const indexPage = new IndexPage({
    artificialName: "indexPage",
    name: "Rupam Sau",
    profileImg:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    aboutMe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit deserunt nobis ex repellendus nihil odio quidem optio molestias laboriosam quasi soluta in velit eligendi, vel aliquam quos. Quidem, doloremque ut maxime dolorem consequatur itaque asperiores delectus numquam omnis natus voluptatibus assumenda rerum necessitatibus deleniti sed ex. Esse corrupti suscipit accusamus quos, rem nostrum asperiores deserunt beatae! Quidem iure delectus sed, maxime nemo consequuntur quam, veritatis deleniti magnam dolorem numquam excepturi eaque laborum, repudiandae quas.",
    services: [
      {
        class: "fas fa-paint-brush",
        name: "Web design",
        tagLine:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus labore illo assumenda nulla veniam quibusdam illum natus excepturi quisquam!",
      },
      {
        class: "fas fa-paint-brush",
        name: "Web design",
        tagLine:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus labore illo assumenda nulla veniam quibusdam illum natus excepturi quisquam!",
      },
      {
        class: "fas fa-paint-brush",
        name: "Web design",
        tagLine:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus labore illo assumenda nulla veniam quibusdam illum natus excepturi quisquam!",
      },
    ],
    skillsMain:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eveniet rerum labore animi! Necessitatibus eveniet nisi dolore suscipit labore maxime delectus quod voluptas amet sunt, magni est, eum nemo, obcaecati corrupti et? Optio doloribus consequuntur aut modi. Eos fugiat, mollitia consectetur magni adipisci quo natus! Minima hic quibusdam aliquid, mollitia sed voluptate nobis corporis commodi ipsam rerum, ex ratione soluta!",
    contact: {
      tagLine:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus vero incidunt nihil itaque et, doloremque vel? Sint adipisci sunt nemo eius recusandae aut? Ratione.",
      name: "Rupam Sau",
      address: "Kolktata, 700063",
      email: "rupamsau721401@gmail.com",
    },
  });

  indexPage.save((err, res) => {
      if(err) {
          console.log(err);
      } else {
          console.log(res);
      }
  })
};

module.exports = saveIndexPage
