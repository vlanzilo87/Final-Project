const express = require('express')
const appetizers = express.Router()
const Appetizer = require('../models/appetizers.js')

const myAppetizers = [
  {
    name: 'Bruschetta',
    servings: 4,
    steps: 'https://www.delish.com/cooking/recipe-ideas/a27409128/best-bruschetta-tomato-recipe/',
    image: 'https://www.foxandbriar.com/wp-content/uploads/2019/03/Baked-Chicken-Parmesan-7-of-8.jpg'
  },
  {
    name: 'Buffalo Chicken Salad',
    servings: 6,
    steps: 'https://www.delish.com/cooking/recipe-ideas/a27925036/easy-buffalo-chicken-salad-recipe/',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190611-buffalo-chicken-salad-192-portrait-pf-1561390263.png?crop=1.00xw:0.667xh;0,0.158xh&resize=480:*'
  },
  {
    name: 'Deviled Eggs',
    servings: 6,
    steps: 'https://downshiftology.com/recipes/deviled-eggs/',
    image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/10/bacon-deviled-eggs-8.jpg'
  },
  {
    name: 'Crab Cakes',
    servings: 4,
    steps: 'https://www.allrecipes.com/recipe/82347/best-ever-crab-cakes/?internalSource=streams&referringId=1240&referringContentType=Recipe%20Hub&clickId=st_trending_b',
    image: 'https://www.jocooks.com/wp-content/uploads/2011/03/easy-crab-cakes-1.jpg'
  },
  {
    name: 'Chef Salad',
    servings: 4,
    steps: 'https://thecozycook.com/chef-salad/',
    image: 'https://sirpizza-mi.com/wp-content/uploads/2018/07/Chef-Salad-IMG_0003-1183.jpg'
  }
]

//Routes

//Seed (if needed)
appetizers.get('/appetizers/seed', (req, res) => {
  Appetizer.create(myAppetizers, (err, createdAppetizers) => {
    res.redirect('/appetizers')
  })
})

//Index
appetizers.get('/appetizers', (req, res) => {
  Appetizer.find({}, (err, allAppetizers) => {
    res.render('appetizers.ejs', {
      allAppetizers: allAppetizers
    })
  })
})

//Show
appetizers.get('/appetizers/:id', (req, res) => {
  Appetizer.findById(req.params.id, (err, foundAppetizer) => {
    res.render('showapp.ejs', {appetizer: foundAppetizer})
  })
})

//Delete
appetizers.delete('/appetizers/:id', (req, res) => {
  Appetizer.findByIdAndRemove(req.params.id, (err, deletedAppetizer) => {
    res.redirect('/appetizers')
  })
})

module.exports = appetizers
