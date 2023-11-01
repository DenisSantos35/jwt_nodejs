const express = require('express')
const jwt = require('jsonwebtoken')
const port = 3000
const routePublic = require('./routes/publicRouter')
const tokenValited = require('./midlwares/tokenValited')
const Validators = require('./midlwares/tokenValited')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', routePublic)
app.use('*', Validators.tokenValited)




app.listen(port, ()=> console.log(`Servidor conectado na porta ${port}`))