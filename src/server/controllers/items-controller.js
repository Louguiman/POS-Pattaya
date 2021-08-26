// Import database
const knex = require('./../db');

// Retrieve all items
exports.itemsAll = async (req, res) => {
  // Get all items from database
  knex
    .select('*') // select all records
    .from('items') // from 'items table
    .then(userData => {
      // Send items extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving items: ${err}` })
    })
}

// Create new book
exports.itemCreate = async (req, res) => {
  // Add new item to database
  knex('items')
    .insert({ // insert new record, a item
      'name': req.body.name,
      'menu': req.body.menu,
      'price': req.body.price,
      'quantity': req.body.quantity
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Item\'${req.body.name}\' by ${req.body.price} created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.name} item: ${err}` })
    })
}

// Remove specific item
exports.itemDelete = async (req, res) => {
  // Find specific item in the database and remove it
  knex('items')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Item ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} item: ${err}` })
    })
}

// Remove all items on the list
exports.itemsReset = async (req, res) => {
  // Remove all books from database
  knex
    .select('*') // select all records
    .from('items') // from 'items' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Item list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting item list: ${err}.` })
    })
}