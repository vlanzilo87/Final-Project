const express = require('express')
const desserts = express.Router()
const Dessert = require('../models/desserts.js')

const myDesserts = [
  {
    name: 'Double Chocolate Cupcakes',
    servings: 8,
    steps: 'https://sallysbakingaddiction.com/super-moist-chocolate-cupcakes/',
    image: 'https://chocolatechocolateandmore.com/wp-content/uploads/2015/12/Double-Chocolate-Cupcakes-with-Chocolate-Buttercream.jpg'
  },
  {
    name: 'Strawberry Cheesecake',
    servings: 8,
    steps: 'https://www.delish.com/cooking/recipe-ideas/recipes/a52465/strawberry-cheesecake-recipe/',
    image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/19/1494632126-delish-strawberry-cheesecake-1.jpg'
  },
  {
    name: 'Vanilla Ice Cream',
    servings: 4,
    steps: 'https://www.tasteofhome.com/recipes/homemade-vanilla-ice-cream/',
    image: 'https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/4163-3-large.jpg?itok=ztpZXNRg'
  },
  {
    name: 'Chocolate Chip Cookies',
    servings: 4,
    steps: 'https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/',
    image: 'https://www.handletheheat.com/wp-content/uploads/2018/02/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9.jpg'
  },
  {
    name: 'Lemon Meringue Pie',
    servings: 4,
    steps: 'https://whatscookingamerica.net/LemonMeringuePie.htm',
    image: 'https://whatscookingamerica.net/wp-content/uploads/2015/10/lemon-meringue-pie-SQ.jpg'
  }
]

//Routes

//Seed (if needed)
desserts.get('/desserts/seed', (req, res) => {
  Dessert.create(myDesserts, (err, createdDesserts) => {
    res.redirect('/desserts')
  })
})

//Index
desserts.get('/desserts', (req, res) => {
  Dessert.find({}, (err, allDesserts) => {
    res.render('desserts.ejs', {
      allDesserts: allDesserts
    })
  })
})

//Show
desserts.get('/desserts/:id', (req, res) => {
  Dessert.findById(req.params.id, (err, foundDessert) => {
    res.render('showdessert.ejs', {dessert: foundDessert})
  })
})

//Delete
desserts.delete('/desserts/:id', (req, res) => {
  Dessert.findByIdAndRemove(req.params.id, (err, deletedDessert) => {
    res.redirect('/desserts')
  })
})

module.exports = desserts
