const express = require('express');
const breads = express.Router();

const Bread = require("../models/breads.js");
const Baker = require("../models/baker.js");
//index - all
breads.get('/', async (req, res) => {
    const foundBreads = await Bread.find().limit(10).lean();
    const foundBakers = await Baker.find().lean(); //lean removes all the data from the database so  .id wont work you have to use ._id
    res.render('index', {
        bakers: foundBakers,
        breads: foundBreads,
        title: "Breads",
/*         pagination: {
            page: 1,
            pages: 10,
            next page: 2,
        } */
    }) 

/*     Baker.find().then(foundBakers => {
    Bread.find().then(foundBreads => {
        res.render('index', {
            bakers: foundBakers,
            breads: foundBreads,
            title: "Breads",
        })
    })
    }); */
})

breads.get("/new", (req, res) => {
    Baker.find().then(foundBakers => {
    res.render("new", { title: "New Bread", bakers: foundBakers});
    
    });
});

// EDIT
breads.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    Baker.find()
        .then(foundBakers => {
            Bread.findById(id)
                .then(foundBread => {
                    res.render('edit', {
                        bread: foundBread,
                        bakers: foundBakers
                    })
                })
        })

})



//read 1 - show
breads.get("/:id", (req, res) => {
    const id = req.params.id;
    Bread.findById(id)
        .populate("baker")
        .then((foundBread) => {
            if (foundBread === null) {
                res.send("404 - Bread not found");
            } else {
                console.log(foundBread.getBakedBy());
                res.render("show", {
                    bread: foundBread,
                });
            }
        });
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