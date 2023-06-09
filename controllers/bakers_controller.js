const express = require('express');
const Baker = require('../models/baker.js');
const bakerSeedData = require('../models/baker_seed.js');

const bakers = express.Router();

//one time baker seed data
bakers.get("/data/seed", (req, res) => {
    //Baker.insertMany(bakerSeedData).then
        res.redirect('/breads')
})

//index read all bakers
bakers.get("/", (req, res) => {
    Baker.find()
    .populate('breads')
    .then((foundBakers) => {
        res.send(foundBakers);
    })
})
//detail - show page
bakers.get("/:id", (req, res) => {
    Baker.findById(req.params.id)
    .populate({
        path : 'breads',
        options : {limit : 2, skip : 1}
    })
    .then((foundBaker) => {
        res.render('bakerShow', { baker: foundBaker });
    })
})

//delete
bakers.delete("/:id", (req, res) => {
    const id = req.params.id;
    Baker.findByIdAndDelete(id).then((deleteBaker) => {
        res.status(303).redirect('/breads');
    })
})


module.exports = bakers;