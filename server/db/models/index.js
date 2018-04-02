const db = require('../index')

// Require all of your models and set their associations here!
// Example:
//
// const Puppy = require('./puppy')
// const Owner = require('./owner')
//
// Puppy.belongTo(Owner)
//
// module.exports = {
//   Puppy,
//   Owner
// }
//
// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
// Exporting all models from here seems like a good idea!

module.exports = db
