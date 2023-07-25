const express = require('express')
const asyncValue = require('../middlewares/async')
const auth = require('../middlewares/auth')
const UserController = require('../controllers/user')
const userController = new UserController();

const router = express.Router()

router.post('/register', asyncValue(userController.register))
router.post('/login', asyncValue(userController.logIn))
router.get('/logout', auth, asyncValue(userController.logOut))
router.post('/forgotpassword', auth, asyncValue(userController.forgotPassword))
router.post('/resetpassword', asyncValue(userController.resetPassword))


module.exports = router