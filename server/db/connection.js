const mongoose = require("mongoose");

const DB = process.env.MONGO_URI;

mongoose.connect(DB, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log("No connection");
});
