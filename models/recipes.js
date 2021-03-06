const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: String,
    servings:  Number,
    steps: String,
    image:  String
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe
