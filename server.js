// import modules
import express from 'express'
import { campaigns } from './data/campaigns-data.js'
// create Express app
const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// Mount routes
app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/campaigns', function(req, res) {
  res.render('campaigns/index', {
    campaigns: campaigns
  })
})

// tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000')
})
