const express = require('express')
const { getAllRisk, addRisk, getRisk } = require('../controllers/controller')
const router = express.Router()



router.get('/', getAllRisk)
router.post('/add', addRisk)
router.get('/:score', getRisk)

module.exports = router