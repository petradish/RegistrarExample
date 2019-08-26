const {db} = require('./server/db')
const {green, red} = require('chalk')

const Campus = require('./server/db/campuses')
const Student = require('./server/db/students')

const campuses = [{
  name: 'Hogwarts',
  imageUrl: 'https://cdn.gbposters.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/p/fp4759-harry-potter-hogwarts-day_1.jpg',
  address: `Get on at Platform 9 and 3/4`,
  description: 'School for wizards and witches',
}, {
  name: 'Grace Hopper',
  imageUrl: 'https://www.gracehopper.com/images/gracehopper-computer.jpg',
  address: '5 Hanover Sq.',
  description: 'School for nerdy women'
}, {
  name: 'CUNY Hunter',
  imageUrl: 'https://collegetransfer.azureedge.net/Photo/190594_3182011115810AM_pic.jpg?cdv=129',
  address: 'Park Ave., Manhattan',
  description: 'Urban college campus setting'
}];

const students = [{
  firstName: 'Kimberly',
  lastName: 'Zawacki',
  email: 'zimfarts@poop.com',
  imageUrl: 'https://vignette.wikia.nocookie.net/thering/images/3/31/Ring_samara_slider.jpg/revision/latest?cb=20170124222520',
  gpa: 3.9,
  campusId: 2
}, {
  firstName: 'Hermione',
  lastName: 'Granger',
  email: 'hgranger@hogwarts.edu',
  imageUrl: 'https://timedotcom.files.wordpress.com/2014/07/hermione.jpeg',
  gpa: 3.92,
  campusId: 1
}, {
  firstName: 'Jonathan',
  lastName: 'Greaser',
  email: 'greaser64@gmail.com',
  imageUrl: 'http://s3.amazonaws.com/improvcoaches/users/avatars/799/medium/16_06_02_UCBW_Cocky_Nobodies_V_Curfew_036-L.jpg?1470865304',
  gpa: 3.85,
  campusId: 3
}]
const seed = async () => {
  await db.sync({force: true})

  // seed your database here!

  await Promise.all(campuses.map(campus => {
    return Campus.create(campus)
  }))

  await Promise.all(students.map(student => {
    return Student.create(student)
  }))

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
