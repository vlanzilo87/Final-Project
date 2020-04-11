const express = require('express')
const recipes = express.Router()
const Recipe = require('../models/recipes.js')

const myRecipes = [
  {
    name: 'chicken parm',
    steps: 'dsfjdsfsdfjsd',
    img:  'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/mpx/5458752_16x9.jpg',
    servings:  4
  },
  {
    name: 'chicken parm',
    steps: 'dsfjdsfsdfjsd',
    img:  'url',
    servings:  4
  },
  {
    name: 'chicken parm',
    steps: 'dsfjdsfsdfjsd',
    img:  'url',
    servings:  4
  },
  {
    name: 'chicken parm',
    steps: 'dsfjdsfsdfjsd',
    img:  'url',
    servings:  4
  },
  {
    name: 'chicken parm',
    steps: 'dsfjdsfsdfjsd',
    img:  'url',
    servings:  4
  },
  {
    name: 'chicken parm',
    steps: 'dsfjdsfsdfjsd',
    img:  'url',
    servings:  4
  },
  {
    name: 'chicken parm',
    steps: 'dsfjdsfsdfjsd',
    img:  'url',
    servings:  4
  },
  {
    name: 'chicken parm',
    steps: 'dsfjdsfsdfjsd',
    img:  'url',
    servings:  4
  },
  {
    name: 'chicken parm',
    steps: 'dsfjdsfsdfjsd',
    img:  'url',
    servings:  4
  },
  {
    name: 'chicken parm',
    steps: 'dsfjdsfsdfjsd',
    img:  'url',
    servings:  4
  },
  {
    name: 'chicken parm',
    steps: 'dsfjdsfsdfjsd',
    img:  'url',
    servings:  4
  },
  {
    name: 'chicken parm',
    steps: 'dsfjdsfsdfjsd',
    img:  'url',
    servings:  4
  }
]

//Routes

//Seed (if needed)
recipes.get('/recipes/seed', (req, res) => {
  Recipe.create(myRecipes, (err, createdRecipes) => {
    res.redirect('/recipes')
  })
})

//New (must be above show)
recipes.get('/recipes/new', (req, res) => {
  res.render('new.ejs')
})

//Index
recipes.get('/recipes', (req, res) => {
  Recipe.find({}, (err, allRecipes) => {
    res.render('index.ejs', {
      allRecipes: allRecipes
    })
  })
})

//Create
recipes.post('/recipes', (req, res) => {
  Recipe.create(req.body, (err, createdRecipe) => {
    res.redirect('/recipes')
  })
})

//Edit
recipes.get('/recipes/:id/edit', (req, res) => {
  Recipe.findById(req.params.id, (err, foundRecipe) => {
    res.render('edit.ejs', {recipe: foundRecipe})
  })
})

//Update
recipes.put('/recipes/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRecipe) => {
    res.redirect('/recipes')
  })
})

//Delete
recipes.delete('/recipes/:id', (req, res) => {
  Recipe.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
    res.redirect('/recipes')
  })
})

//Requested parts
recipes.get('/recipes/request', (req, res) => {
  res.render('request.ejs')
})

//Show
recipes.get('/recipes/:id', (req, res) => {
  Recipe.findById(req.params.id, (err, foundRecipe) => {
    res.render('show.ejs', {recipe: foundRecipe})
  })
})

module.exports = recipes
