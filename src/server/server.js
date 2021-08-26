// Import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

// Import routes
const itemsRouter = require('./routes/items-route')

// Set default port for express app
const PORT = process.env.PORT || 5001

// Create express app
const app = express()

// Apply middleware
// Note: Keep this at the top, above routes
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Implement items route
app.use('/items', itemsRouter)

// Implement 500 error route
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Communication incorrrecte')
})

// Implement 404 error route
app.use(function (req, res, next) {
  res.status(404).send('Désolé ce fichier est introuvable.')
})

// Start express app
app.listen(PORT, function() {
  console.log(`Server is running on: ${PORT}`)
})
