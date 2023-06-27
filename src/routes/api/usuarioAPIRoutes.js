const express = require('express');
const router = express.Router();

const usuarioAPIController = require('../../controllers/api/usuarioAPIController');

router.post('/api/usuario/cadastrar', usuarioAPIController.cadastrarUsuario);


module.exports = router;