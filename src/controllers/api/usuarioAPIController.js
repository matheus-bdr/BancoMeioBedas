const Usuario = require('../../models/usuario')


function cadastrarUsuario(req, res){
    let usuario = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        altura: req.body.altura,
        peso: req.body.peso
    }
    
    Usuario.create(usuario).then((result)=>{
        res.json({result});
    }).catch((err) => {
        console.log(err)
        res.json({err});
    })
}

module.exports =  {
    cadastrarUsuario,
};