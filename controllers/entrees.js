const express = require('express')
const entrees = express.Router()
const Entree = require('../models/entrees.js')

const myEntrees = [
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

module.exports = entrees
