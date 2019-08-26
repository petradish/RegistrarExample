const router = require('express').Router();
const Student = require('../db/students')
const Campus = require('../db/campuses')

router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.json(students)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id, {
            include: {model: Campus}
        })
        res.json(student)
    } catch (err) {
        next(err)
    }
})

module.exports = router;