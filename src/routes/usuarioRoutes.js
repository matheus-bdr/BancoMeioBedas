const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');
const autenticacaoController = require('../controllers/autenticacaoController');

router.get('/usuario/cadastrar', usuarioController.cadastrarView);
router.post('/usuario/cadastrar', usuarioController.cadastrarUsuario);

router.get('/usuario/listar', autenticacaoController.verificarAutenticacao, usuarioController.listarView);

router.get('/usuario/editar/:id', autenticacaoController.verificarAutenticacao, usuarioController.editarView);
router.post('/usuario/editar', autenticacaoController.verificarAutenticacao, usuarioController.editarUsuario);

router.post('/usuario/excluir', autenticacaoController.verificarAutenticacao, usuarioController.excluirUsuario);

module.exports = router;