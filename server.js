//Dependencies
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/final-project'
const db = mongoose.connection

//Configuration
const app = express()
const PORT = process.env.PORT || 3000

//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

const recipesController = require('./controllers/recipes.js')
app.use(recipesController)

const appetizersController = require('./controllers/appetizers.js')
app.use(appetizersController)

const entreesController = require('./controllers/entrees.js')
app.use(entreesController)

const dessertsController = require('./controllers/desserts.js')
app.use(dessertsController)

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
