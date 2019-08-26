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
        defaultValue: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj3sNCMnqHkAhWMm-AKHYH0CC4QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.breitbart.com%2Ftech%2F2016%2F09%2F26%2Fstudent-complains-harry-potter-mural-perpetuates-white-cis-man-power%2F&psig=AOvVaw1-lqftj35nXmCI2UvlrD7k&ust=1566932895223971'
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