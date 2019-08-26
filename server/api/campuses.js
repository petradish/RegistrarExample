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
module.exports = router;