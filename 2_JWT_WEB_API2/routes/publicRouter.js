const express = require('express')
const router = express.Router()
const PublicController = require('../controllers/PublicController')
const LoginController = require('../controllers/LoginController')
const PrivateController = require('../controllers/PrivateController')

// rota publica
router.get('/', PublicController.routePublic)

//rota login
router.get('/login', LoginController.login)

//rota privada
router.get('/private', PrivateController.routePrivate)



module.exports = router