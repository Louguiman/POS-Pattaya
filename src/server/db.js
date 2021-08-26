const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/db.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

knex.schema
  // Make sure no "items" table exists
  // before trying to create new
  .hasTable('item')
    .then((exists) => {
      if (!exists) {
        // If no "items" table exists
        // create new, with "id", "name", "menu",
        // "price" and "Qty" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record (book)
        return knex.schema.createTable('item', (table)  => {
          table.increments('id').primary()
          table.string('name')
          table.string('menu')
          table.integer('price')  
          table.integer('quantity')
        })
        .then(() => {
          // Log success message
          console.log('Table \'items\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

//OrderItems
knex.schema
  // Make sure no "OrderItems" table exists
  // before trying to create new
  .hasTable('OrderItem')
    .then((exists) => {
      if (!exists) {
        // If no "OrderItem" table exists
        // create new, with "id", "item" as a foreignKey, "purQty",
        // "total" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record (book)
        return knex.schema.createTable('OrderItem', (table)  => {
          table.increments('id').primary()
          table.foreign('item')
          table.integer('price')  
          table.integer('purQty')
        })
        .then(() => {
          // Log success message
          console.log('Table \'OrderItem\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

//Order
knex.schema
  // Make sure no "Orders" table exists
  // before trying to create new
  .hasTable('Order')
    .then((exists) => {
      if (!exists) {
        // If no "Orders" table exists
        // create new, with "id", "tableNo", "OrderItems",
        // "transactionId" and "dateOrdered" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record (book)
        return knex.schema.createTable('Order', (table)  => {
          table.increments('id').primary()
          table.string('transactionId')
          table.integer('tableNo')
          table.date('dateOrdered')  
          table.foreign('OrderItem')
        })
        .then(() => {
          // Log success message
          console.log('Table \'items\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })


    // Just for debugging purposes:
// Log all data in "items" table
knex.select('*').from('items')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the database
module.exports = knex