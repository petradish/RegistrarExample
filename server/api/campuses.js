const router = require('express').Router();
const Campus = require('../db/campuses')
const Student = require('../db/students')

router.get('/', async (req, res, next) => {
    try {
        const campuses = await Campus.findAll();
        res.json(campuses)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const campus = await Campus.findById(req.params.id, {
            include: {model: Student}
        })
        res.json(campus)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const campus = await Campus.create(req.body)
        res.status(201)
        res.json(campus)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const campus = await Campus.findById(req.params.id)
        if (!campus) res.sendStatus(404)
        await campus.destroy()
        res.sendStatus(204)
    } catch (err) {
        next(err)
    }
})
module.exports = router;