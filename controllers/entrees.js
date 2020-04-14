const express = require('express')
const entrees = express.Router()
const Entree = require('../models/entrees.js')

const myEntrees = [
  {
    name: 'Eggplant Parmesan',
    servings: 6,
    steps: 'https://www.browneyedbaker.com/eggplant-parmesan/',
    image: 'https://www.browneyedbaker.com/wp-content/uploads/2018/02/eggplant-parmesan-39-754.jpg'
  },
  {
    name: 'Steak & Mashed Potatoes',
    servings: 4,
    steps: 'https://albertamilk.com/recipes/peppered-steak-with-potatoes/',
    image: 'https://www.rachaelraymag.com/.image/t_share/MTQ4ODcyMjE5NzY0NzI5NTIz/strip-steaks-with-rosemary-garlic-butter-102272708.jpg'
  },
  {
    name: 'Lemon Shrimp & Rice',
    servings: 4,
    steps: 'https://www.tasteofhome.com/recipes/lemon-shrimp-with-parmesan-rice/',
    image: 'https://i2.wp.com/wellplated.com/wp-content/uploads/2019/05/Garlic-Butter-Shrimp-600x756.jpg'
  },
  {
    name: 'Chicken Quesadillas',
    servings: 4,
    steps: 'https://lilluna.com/chicken-quesadillas/',
    image: 'https://www.onceuponachef.com/images/2014/02/Chipotle-Chicken-Quesadillas-1-760x474.jpg'
  },
  {
    name: 'Pesto Pasta',
    servings: 4,
    steps: 'https://www.foodiecrush.com/pesto-pasta-recipe/',
    image: 'https://www.nospoonnecessary.com/wp-content/uploads/2016/04/Arugula-Pesto-Pasta-671.jpg'
  }
]

//Routes

//Seed (if needed)
entrees.get('/entrees/seed', (req, res) => {
  Entree.create(myEntrees, (err, createdEntrees) => {
    res.redirect('/entrees')
  })
})

//Index
entrees.get('/entrees', (req, res) => {
  Entree.find({}, (err, allEntrees) => {
    res.render('entrees.ejs', {
      allEntrees: allEntrees
    })
  })
})

//Show
entrees.get('/entrees/:id', (req, res) => {
  Entree.findById(req.params.id, (err, foundEntree) => {
    res.render('showentree.ejs', {entree: foundEntree})
  })
})

//Delete
entrees.delete('/entrees/:id', (req, res) => {
  Entree.findByIdAndRemove(req.params.id, (err, deletedEntree) => {
    res.redirect('/entrees')
  })
})

module.exports = entrees
