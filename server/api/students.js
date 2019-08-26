const router = require('express').Router();
const Student = require('../db/students')
const Campus = require('../db/campuses')

router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll({
            include: {model: Campus}
        });
        res.json(students)
    } catch (err) {
        next(err)
    }
})

module.exports = router;