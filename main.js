// This is the main entry point for your server code

const chalk = require('chalk')
const db = require('./server/db/models')
const app = require('./server')
const PORT = 8080

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log(chalk.green(`
      Db synced!
    `))
    app.listen(PORT, () => console.log(chalk.green(`
      Studiously serving silly sounds on port ${PORT}

      http://localhost:8080/
    `)))
  })
