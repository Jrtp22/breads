const express = require('express');
const breads = express.Router();

const Bread = require("../models/breads.js");
//index - all
breads.get('/', (req, res) => {
    Bread.find().then(foundBreads => {
        res.render('index', {
            breads: foundBreads,
            title: "Breads",
        })

    });
})

breads.get("/new", (req, res) => {
    res.render("new");
    {title: "New Bread"};
});

// EDIT
breads.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('edit', {
                bread: foundBread
            })
        })
})



//read 1 - show
breads.get("/:id", (req, res)=> {
    const id = req.params.id;
    Bread.findById(id).then((foundBread) => {
        if (foundBread === null) {
            res.send("404 - Bread not found");
        } else {
        res.render("show", {
            bread: foundBread,
            index: id,
        });
        }
    })
    .catch((err) => {
        res.send("500 - Server Error");
    })
});



/*     const arrayIndex = req.params.arrayIndex;
    if (Bread[arrayIndex]){
        res.render("show", {
        bread: Bread[arrayIndex],
        index: arrayIndex,
    })
    }
    else {
    res.send("404") */


//create
breads.post("/", (req, res) => {
    let newBread = { ...req.body };
    if (newBread.image === "") {
        newBread.image = undefined;
            }
    if (newBread.hasGluten ==="on"){
        newBread.hasGluten = true;
    } else if (newBread.hasGluten === "off"){
        newBread.hasGluten = false;
    }
    else {
        console.error("Error: hasGluten value is:", newBread.hasGluten);
    }
    Bread.create(newBread);
    res.redirect("/breads");
})

//update



breads.put('/:id', (req, res) => {
    const id = req.params.id;
    let updateBread = { ...req.body };
    if (updateBread.image === "") {
        updateBread.image = "https://images.unsplash.com/photo-15176864"
    }
    if (updateBread.hasGluten ==="on"){
        updateBread.hasGluten = true;
    } else {
        updateBread.hasGluten = false;}

    Bread.findByIdAndUpdate(id, updateBread, { new: true })
        .then(updatedBread => {
            console.log(updatedBread)
            res.redirect(`/breads/${id}`)
        })

});
//delete
breads.delete('/:id', (req, res) => {
    const id = req.params.id;
    Bread.findByIdAndDelete(id).then(deletedBread => {
        res.redirect("/breads");
    })
});

//export
module.exports = breads;