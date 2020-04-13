const express = require('express')
const appetizers = express.Router()
const Appetizer = require('../models/appetizers.js')

const myAppetizers = [
  {
    name: 'chocolate pie',
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

module.exports = appetizers
