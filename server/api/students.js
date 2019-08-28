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

router.post('/', async (req, res, next) => {
    try {
        const student = await Student.create(req.body)
        res.status(201)
        res.json(student)
    } catch (err) {
        next(err)
    }
})
router.delete('/:id', async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id)
        if (!student) return res.sendStatus(404)
        await student.destroy()
        res.sendStatus(204)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id)
        if (!student) return res.sendStatus(404);
        const updatedStudent = await student.update(req.body)
        res.json(updatedStudent)
    } catch (err) {
        next(err)
    }
})
module.exports = router;