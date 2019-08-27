const Sequelize = require('sequelize')
const db = require('./database')

const Student = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://images.pexels.com/photos/2513993/pexels-photo-2513993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    gpa: {
        type: Sequelize.DECIMAL,
        validate: {
            min: 0,
            max: 4
        }
    }
})

module.exports = Student