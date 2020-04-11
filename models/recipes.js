const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    steps: String,
    img:  String,
    servings:  Number
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe
