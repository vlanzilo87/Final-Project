const mongoose = require('mongoose')

const dessertSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: String,
    servings:  Number,
    steps: String,
    image:  String
})

const Dessert = mongoose.model('Dessert', dessertSchema);

module.exports = Dessert
