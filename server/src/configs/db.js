const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(rocess.env.DB);
};
