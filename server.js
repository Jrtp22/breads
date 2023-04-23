const express = require('express');

require('dotenv').config();
const PORT = process.env.PORT;
console.log("My port is :", PORT);

const app =express();

app.get("/", (req,res) => {
    res.send("Welcome to my awesome app about bread");
});

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
  });