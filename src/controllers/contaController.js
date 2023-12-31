const { where } = require('sequelize');
const Conta = require('../models/conta');


function criarContaView(req, res) {
    res.render("../views/conta/criar.html", {});
}

function criarConta(req, res) {
    let conta = {
        nome: req.body.nome,
        dono: req.body.nomeDonoConta,
        criacao: req.body.dataDeCriacao,
        saldo: req.body.saldo,
        contatype: req.body.tipoDeConta,
        senha: req.body.senha

    }
    saldoTotal = conta.saldo
    console.log(conta);

    Conta.create(conta).then((result) => {
        res.render("../views/conta/criar.html", { conta });

    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("../views/conta/criar.html", { erro });
    })
};

function listarContaView(req, res) {
    Conta.findAll().then((contas) => {
        res.render("../views/conta/ver.html", { contas });

    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("../views/conta/ver.html", { erro });
    })
}

function editarContaView(req, res) {
    let idUnico = req.params.idUnico
    let conta;
    Conta.findByPk(idUnico).then(function (conta) {
        res.render("conta/editar.html", { conta });
    })
}
function editarConta(req, res) {
    let conta = {

        nome: req.body.nome,
        dono: req.body.nomeDonoConta,
        criacao: req.body.dataDeCriacao,
        saldo: req.body.saldo,
        contatype: req.body.tipoDeConta,
        senha: req.body.senha
    }

    Conta.update(
        conta,
        {
            where: {
                idUnico: req.body.idUnico,
            },
        }
    ).then(function (sucesso) {
        res.render("conta/editar.html", { conta, sucesso });
    })
        .catch(function (erro) {
            res.render("conta/editar.html", { conta, erro })
        });

}


function movimentaContaView(req, res) {

    let idUnico = req.params.idUnico
    let conta;
    Conta.findByPk(idUnico).then(function (conta) {
        res.render("../views/conta/movimentacoes.html", { conta });
    })
}

async function movimentaConta(req, res) {
    let contaMovimenta = {
        saldo: req.body.valor,
        operacao: req.body.operacao,
        senha: req.body.senha
    }
    operacao = contaMovimenta.operacao; valor = contaMovimenta.saldo; senha = contaMovimenta.saldo;
    
    let id = req.body.idUnico
    console.log(id)

    const conta = await Conta.findByPk(id)
    saldo = conta.saldo
    senha = conta.senha

    console.log(valor);console.log(saldo);console.log(operacao)
    console.log("__________________________")
    //&& contaMovimenta.senha==senha
    
if (contaMovimenta.operacao == "Transferir" && valor > 0 && valor < saldo) {
        saldo = saldo - valor
        conta.saldo = saldo
       res.redirect('/conta/listar')
   }
    else if (contaMovimenta.operacao == "Investir" && valor > 0 && valor < saldo) {
        saldo = saldo - valor
        conta.saldo = saldo
       res.redirect('/conta/listar')
    }
    else if (contaMovimenta.operacao == "Depositar" && valor > 0) {
        saldo = Number(saldo) + Number(valor)
        conta.saldo = saldo
        res.redirect('/conta/listar')
    } 
    console.log(valor);console.log(saldo);console.log(operacao);console.log(conta)
    
    await conta.update(saldo)
    await conta.save()
    Conta.update(
        conta,
        {
            where: {
                idUnico: req.body.id,
            },
        }
    ).then(function (sucesso) {
        res.render("../views/conta/movimentacoes.html", { conta, sucesso });
    })
        .catch(function (erro) {
            res.render("../views/conta/movimentacoes.html", { conta, erro })
        });

}
function excluirConta(req, res) {

    Conta.destroy(
        {
            where: {
                idUnico: req.body.idUnico,
            },
        }
    ).then(function (sucesso) {
        res.redirect("/conta/listar?sucesso_excluir=1");
    })
        .catch(function (erro) {
            res.redirect("/conta/listar?erro_excluir=1")
        });

}



module.exports = {
    criarContaView,
    movimentaContaView,
    movimentaConta,
    criarConta,
    listarContaView,
    editarContaView,
    editarConta,
    excluirConta,

};
