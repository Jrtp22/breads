const express = require('express');
const breads = express.Router();

const Bread = require("../models/breads.js");
//index - all
breads.get('/', (req,res) =>{
    //res.send(Bread);
    res.render('index', {
        breads: Bread
    });
});
//read 1
breads.get("/:arrayIndex", (req, res)=> {
    const arrayIndex = req.params.arrayIndex;
    if (Bread[arrayIndex]){
         res.render("show", {
        bread: Bread[arrayIndex],
    })
    }
   else {
    res.send("404")
   }
})
//export
module.exports = breads;