// Import express
const express = require('express')

// Import items-controller
const itemmsRoutes = require('../controllers/items-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all items
// In server.js, books route is specified as '/items'
// this means that '/all' translates to '/items/all'
router.get('/all', itemsRoutes.itemsAll)

// Add route for POST request to create new item
// In server.js, items route is specified as '/items'
// this means that '/create' translates to '/items/create'
router.post('/create', itemsRoutes.itemCreate)

// Add route for PUT request to delete specific book
// In server.js, items route is specified as '/items'
// this means that '/delete' translates to '/items/delete'
router.put('/delete', itemsRoutes.bookDelete)

// Add route for PUT request to reset bookshelf list
// In server.js, items route is specified as '/items'
// this means that '/reset' translates to '/items/reset'
router.put('/reset', itemsRoutesitemsReset)

// Export router
module.exports = router