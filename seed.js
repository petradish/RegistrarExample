// Hey! We've scaffolded a seed file for you!
// You'll want to run this frequently when you're making updates
// to your database models.
const db = require('./server/db')

const seed = async () => {
  console.log('Seeding the database!')
  await db.sync({force: true})

  db.close()
  console.log('Database connection closed, seeding successful!')
}

seed().catch((err) => {
  console.error(err)
  db.close()
})
