const express = require('express');
const Baker = require('../models/baker.js');
const bakerSeedData = require('../models/baker_seed.js');

const bakers = express.Router();

//one time baker seed data
bakers.get("/data/seed", (req, res) => {
    //Baker.insertMany(bakerSeedData).then(
        res.redirect('/breads')
})




module.exports = bakers;