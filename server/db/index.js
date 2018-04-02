// This file contains our Sequelize instance. You probably don't need to modify it!
// All of your models should be defined as their own modules in the `/db/models` folder,
// and they should be exported via /db/models/index.js

const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

console.log(chalk.yellow('Opening database connection'))

// Create the database instance that can be used in other database files
module.exports = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  logging: false // so we don't see all the SQL queries getting made
})
