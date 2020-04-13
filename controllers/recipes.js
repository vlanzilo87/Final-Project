const express = require('express')
const recipes = express.Router()
const Recipe = require('../models/recipes.js')

const myRecipes = [
  {
    name: 'chicken parm',
    type: 'entree',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://www.foxandbriar.com/wp-content/uploads/2019/03/Baked-Chicken-Parmesan-7-of-8.jpg'
  },
  {
    name: 'chicken parm',
    type: 'entree',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/mpx/5458752_16x9.jpg'
  },
  {
    name: 'chicken parm',
    type: 'entree',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://pinchofyum.com/wp-content/uploads/chicken-parmesan-recipe-1.jpg'
  },
  {
    name: 'chicken parm',
    type: 'entree',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/mpx/5458752_16x9.jpg'
  },
  {
    name: 'chicken parm',
    type: 'entree',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/mpx/5458752_16x9.jpg'
  },
  {
    name: 'chicken parm',
    type: 'entree',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/mpx/5458752_16x9.jpg'
  },
  {
    name: 'chicken parm',
    type: 'entree',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/mpx/5458752_16x9.jpg'
  },
  {
    name: 'chicken parm',
    type: 'entree',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/mpx/5458752_16x9.jpg'
  },
  {
    name: 'chicken parm',
    type: 'entree',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/mpx/5458752_16x9.jpg'
  },
  {
    name: 'chicken parm',
    type: 'entree',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/mpx/5458752_16x9.jpg'
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
    res.render('recipes.ejs', {
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
