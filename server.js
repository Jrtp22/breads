const express = require('express');
const breads = require('./controllers/breads_controllers');

require('dotenv').config();
const PORT = process.env.PORT;
console.log("My port is :", PORT);

const app =express();
//middleware
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.get("/", (req,res) => {
    res.send("Welcome to my awesome app about bread");
});
//bread route
const breadsControllers = require("./controllers/breads_controllers.js");
app.use("/breads", breadsControllers);
// listen
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
  });