const express = require('express')
const asyncValue = require('../middlewares/async')
const auth = require('../middlewares/auth')
const TaskController = require('../controllers/task')
const taskController = new TaskController();

const router = express.Router()

router.post('/create', auth, asyncValue(taskController.create))
router.post('/list', asyncValue(taskController.list))
router.patch('/update', asyncValue(taskController.update))
router.post('/delete', asyncValue(taskController.delete))
// router.delete('/task/delete', asyncValue(taskController.delete))

module.exports = router