const Sequelize = require('sequelize')
const db = require('./database')

const Campus = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i7EynUjtlM0U/v1/1000x-1.jpg'
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Campus