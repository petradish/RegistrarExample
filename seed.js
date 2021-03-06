const {db} = require('./server/db')
const {green, red} = require('chalk')

const Campus = require('./server/db/campuses')
const Student = require('./server/db/students')

const campuses = [{
  name: 'Hogwarts',
  imageUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/bd/Dhogwarts.jpg/revision/latest?cb=20120128145344',
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
}, {
  name: 'Funtown',
  address: 'Brooklyn',
  description: 'Fun times'
}];

const students = [{
  firstName: 'Kimberly',
  lastName: 'Zawacki',
  email: 'kzawacki@funnyfriend.edu',
  imageUrl: 'https://vignette.wikia.nocookie.net/thering/images/3/31/Ring_samara_slider.jpg/revision/latest?cb=20170124222520',
  gpa: 3.9,
  campusId: 4
}, {
  firstName: 'Hermione',
  lastName: 'Granger',
  email: 'hgranger@hogwarts.edu',
  imageUrl: 'https://timedotcom.files.wordpress.com/2014/07/hermione.jpeg',
  gpa: 3.92,
  campusId: 3
}, {
  firstName: 'Jonathan',
  lastName: 'Greaser',
  email: 'greaser64@gmail.com',
  imageUrl: 'http://s3.amazonaws.com/improvcoaches/users/avatars/799/medium/16_06_02_UCBW_Cocky_Nobodies_V_Curfew_036-L.jpg?1470865304',
  gpa: 3.85,
  campusId: 1
}, {
  firstName: 'Petra',
  lastName: 'Laohakul',
  email: 'petra@gmail.com',
  imageUrl: 'https://polygonnews.org/wp-content/uploads/2017/12/IMG_0265-900x600.jpg',
  gpa: 3.5
}, {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@hotmail.com',
  gpa: 3,
  campusId: 1
}];

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
