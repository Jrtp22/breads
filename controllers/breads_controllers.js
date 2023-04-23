const express = require('express');
const breads = express.Router();
const Bread = require("../models/breads.js");
//index - all
breads.get('/', (req,res) =>{
    res.send(Bread)
});
//read 1
breads.get("/:arrayIndex", (req, res)=> {
    const arrayIndex = req.params.arrayIndex;
    res.send(Bread[arrayIndex]);
})
//export
module.exports = breads;