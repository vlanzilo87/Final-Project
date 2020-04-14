//Dependencies
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const session = require('express-session')

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/final-project'
const db = mongoose.connection

//Configuration
const app = express()
const PORT = process.env.PORT || 3000
require('dotenv').config()

//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

const recipesController = require('./controllers/recipes.js')
app.use(recipesController)

const appetizersController = require('./controllers/appetizers.js')
app.use(appetizersController)

const entreesController = require('./controllers/entrees.js')
app.use(entreesController)

const dessertsController = require('./controllers/desserts.js')
app.use(dessertsController)

const userController = require('./controllers/users.js')
app.use('/users', userController)

const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController)

//Routes
//Welcome
app.get('/', (req, res) => {
  res.render('welcome.ejs')
})

//Index
app.get('/index', (req, res) => {
  res.render('index.ejs')
})

//About
app.get('/about', (req, res) => {
  res.render('about.ejs')
})

//Listener
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})

//Mongoose
mongoose.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology:true}, () => {
  console.log('the connection with mongod is established')
})
