const express = require('express')
const desserts = express.Router()
const Dessert = require('../models/desserts.js')

const myDesserts = [
  {
    name: 'Double Chocolate Cupcakes',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://www.foxandbriar.com/wp-content/uploads/2019/03/Baked-Chicken-Parmesan-7-of-8.jpg'
  },
  {
    name: 'chicken parm',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/mpx/5458752_16x9.jpg'
  },
  {
    name: 'chicken parm',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://pinchofyum.com/wp-content/uploads/chicken-parmesan-recipe-1.jpg'
  },
  {
    name: 'chicken parm',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/mpx/5458752_16x9.jpg'
  },
  {
    name: 'chicken parm',
    servings: 4,
    steps: 'dsfjdsfsdfjsd',
    image: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/mpx/5458752_16x9.jpg'
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
