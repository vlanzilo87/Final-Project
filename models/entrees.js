const mongoose = require('mongoose')

const entreeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: String,
    servings:  Number,
    steps: String,
    image:  String
})

const Entree = mongoose.model('Entree', entreeSchema);

module.exports = Entree
