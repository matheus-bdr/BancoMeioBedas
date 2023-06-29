const express = require('express');
const router = express.Router();

const contaController = require('../controllers/contaController');
const autenticacaoController = require('../controllers/autenticacaoController');

router.get('/conta/criar', autenticacaoController.verificarAutenticacao, contaController.criarContaView);
router.post('/conta/criar', autenticacaoController.verificarAutenticacao, contaController.criarConta);

router.get('/conta/listar', autenticacaoController.verificarAutenticacao, contaController.listarContaView);

router.get('/conta/editar/:idUnico', autenticacaoController.verificarAutenticacao, contaController.editarContaView);
router.post('/conta/editar', autenticacaoController.verificarAutenticacao, contaController.editarConta);

router.get('/conta/movimentacoes/:idUnico', autenticacaoController.verificarAutenticacao,  contaController.movimentaContaView, contaController.movimentaConta);
router.post('/conta/movimentacoes', autenticacaoController.verificarAutenticacao, contaController.movimentaConta);

router.post('/conta/excluir', autenticacaoController.verificarAutenticacao, contaController.excluirConta);
module.exports = router;