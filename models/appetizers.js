const mongoose = require('mongoose')

const appetizerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: String,
    servings:  Number,
    steps: String,
    image:  String
})

const Appetizer = mongoose.model('Appetizer', appetizerSchema);

module.exports = Appetizer
