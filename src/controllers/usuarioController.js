const User = require('../models/usuario')

function cadastrarView(req, res){
    res.render("../views/usuario/cadastrar.html", {});
}

function cadastrarUsuario(req, res){
    let usuario = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        pais: req.body.pais,
        cidade: req.body.cidade,
        bairro: req.body.bairro,
        complemento: req.body.complemento,
        numero: req.body.numero
    }
    console.log(usuario)
    User.create(usuario).then((result)=>{
        res.render("../views/usuario/cadastrar.html", {usuario});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("../views/usuario/cadastrar.html", {erro});
    })
}

function listarView(req, res){
    User.findAll().then((usuarios)=>{
        res.render("../views/usuario/ver.html", {usuarios});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("../views/usuario/ver.html", {erro});
    })
}

function editarView(req, res){
    let id = req.params.id
    let usuario;
    User.findByPk(id).then(function(usuario){
        res.render("../views/usuario/editar.html", {usuario});
    })
}

function editarUsuario(req, res) {
    let usuario = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        pais: req.body.pais,
        cidade: req.body.cidade,
        bairro: req.body.bairro,
        complemento: req.body.complemento,
        numero: req.body.numero
    }
    User.update(
        usuario,
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.render("../views/usuario/editar.html", {usuario, sucesso});
    })
    .catch(function (erro) {
        res.render("../views/usuario/editar.html", {usuario, erro})
    });

}

function excluirUsuario(req, res) {
   
    User.destroy(
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.redirect("/usuario/listar?sucesso_excluir=1");
    })
    .catch(function (erro) {
        res.redirect("/usuario/listar?erro_excluir=1")
    });

}

module.exports =  {
    cadastrarView,
    cadastrarUsuario,
    listarView,
    editarView,
    editarUsuario,
    excluirUsuario,
};