// Import depandencies
const mongoose = require("mongoose");

// Get the MONGO_URI
const MONGO_URI = process.env.MONGO_URI;

const mongoConnect = () => {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => {
      console.log("Connected to mongoDB cluster");
  })
  .catch((err) => {
      console.log(err);
  })
};

// Export the module
module.exports = mongoConnect
