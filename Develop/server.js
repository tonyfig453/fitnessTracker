const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3002;


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true, 
    userFindAndModify: false 
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoute")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});