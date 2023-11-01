const jwt = require('jsonwebtoken');


module.exports = class Validators {
    static PRIVATE_KEY(){
        return '1010FF'
    }

    static tokenValited(req, res, next){
        const [, token] = req.headers.authotization?.split('') || [' ', ' ']

        if(!token) return res.status(401).send('Accses denied. No token provider.');

        try{
            const payload = jwt.verify(token, this.PRIVATE_KEY);
            const userIdFromToken = typeof payload !== 'string' && payload.user;

            if(!user && !userIdFromToken){
                return res.send(401).json({message: 'Invalid token'})
            }
            req.headers['user'] = payload.user;
            return next()
        }catch(err){
            console.log(err)
            return res.status(401).json({message: 'Invalid token'})

        }
    }
}