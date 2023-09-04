const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://yourUsername:yourPassword@cluster0.s4kpw82.mongodb.net/AS2"
);
mongoose.connection.on("connected", function () {
  console.log("Application is connected to Databse");
});
