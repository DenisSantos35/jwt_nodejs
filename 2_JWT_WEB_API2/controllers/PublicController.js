

module.exports = class PublicController{
    static routePublic(req, res){
        res.json({message: "this is a public router"})
    }
}