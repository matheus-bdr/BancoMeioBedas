function indexView(req, res){
    usuario = req.session.usuario
    res.render("index.html", {usuario});
}



module.exports =  {
    indexView,
};