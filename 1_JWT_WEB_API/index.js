const http = require('http');
const express = require('express');
const app = express();

const jwt = require('jsonwebtoken')
const SECRET = 'denisSantos'

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({message:"Tudo ok por aqui"})
})

function verifyJWT(req, res, next){
    const token = req.headers['x-access-token']
    const index = blackList.findIndex(item => item === token)
    console.log(blackList)
    if(index !== -1) return res.status(401).end()
    jwt.verify(token, SECRET, (err, decoded)=>{
        if(err) return res.status(401).end();
        req.userId = decoded.userId
        next()
    } )
}

app.get('/clientes', verifyJWT, (req, res)=>{
    console.log(req.userId + ' fez esta chamada')
    res.json([{id:1, nome: 'luiz'}])
})
app.post('/login', (req,res)=>{
    if(req.body.user === 'luiz' && req.body.password === '123'){
        const token = jwt.sign({userId: 1},SECRET,{expiresIn: 300})
        return res.json({auth: true, token});
    }
    res.status(401).end()
})

const blackList = []
app.post('/logout', (req, res)=>{
    blackList.push(req.headers['x-access-token'])
    console.log(blackList)
    res.end();
})

app.listen(3000)