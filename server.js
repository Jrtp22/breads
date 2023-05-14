//dependencies
const express = require('express');
const breads = require('./controllers/breads_controllers');
const methodOverride = require('method-override')
const mongoose = require('mongoose');

require('dotenv').config();
const PORT = process.env.PORT;
console.log("My port is :", PORT);

const app = express();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('connected to mongoDB: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my awesome app about bread");
});
//bread route
const breadsControllers = require("./controllers/breads_controllers.js");
app.use("/breads", breadsControllers);

//baker route
const bakersControllers = require("./controllers/bakers_controller.js");
app.use("/bakers", bakersControllers);

//404 page
app.get("*", (req, res) => {
    res.send('404')
})

// listen
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});

module.exports = app;