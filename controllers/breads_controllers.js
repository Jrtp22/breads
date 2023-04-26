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

breads.get("/new", (req, res) => {
    res.render("new");
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

//create
breads.post("/", (req, res) => {
    let newBread = { ...req.body };
    if (newBread.image === "") {
        newBread.image =
            "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}
    if (newBread.hasGluten ==="on"){
        newBread.hasGluten = true;
    } else if (newBread.hasGluten === "off"){
        newBread.hasGluten = false;
    }
    else {
        console.error("Error: hasGluten value is:", newBread.hasGluten);
    }
    Bread.push(newBread)
    res.redirect("/breads")
})

//export
module.exports = breads;