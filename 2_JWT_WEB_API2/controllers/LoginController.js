const { response } = require("express");
const jwt = require("jsonwebtoken");
const PRIVATE_KEY = require('../midlwares/tokenValited')


module.exports = class LoginController{
    static login(req, res){
        const [,hash] = req.headers.authorization?.split(' ') || [' ', ' '];
        const [email, password] = Buffer.from(hash, 'base64').toString().split(':');
        console.log(email, password)

        try{
            const correctPassword = email === 'denisdiogo18@hotmail.com' && password === '123456';

            if(!correctPassword) return response.status(401).send('Password or email incorrect!');

            const token = jwt.sign(
                {user: JSON.stringify(user)}, //info contain our token
                PRIVATE_KEY.PRIVATE_KEY, // secret key
                { expiresIn: '60m' } // time expired token
            );

            return res.status(200).json({data: {user, token}})
        }catch(err){
            console.log(err)
            return res.status(500).send("Erro ao criar token")           
        }
    }
}