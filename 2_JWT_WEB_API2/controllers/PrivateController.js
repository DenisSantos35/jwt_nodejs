

module.exports = class PrivateController{
    static routePrivate(req, res){
        const {user} = JSON.parse(user)
        const currentUser = JSON.parse(user);
        return res.status(200).json({message: 'this is a private router', data: {userLogged: currentUser}})
    }
}