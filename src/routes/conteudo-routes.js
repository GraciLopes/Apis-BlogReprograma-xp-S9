const express = require('express');
const router = express.Router();

const conteudoController = require('../controller/conteudo-controllers');

//@route get conteudo
//@desc retorna todos os conteudos
//@access public
router.get('/conteudo', conteudoController.getConteudo);

//@route get conteudo
//@query titulo
//@desc retorna apenas titulos
//@access public
router.get('conteudo/titulo', conteudoController.getByTitle);

//@route get conteudo
//@params :id
//@desc retornar apenas uma unica tarfea pelo seu id: identificador
//@access public
router.get('conteudo/:id', conteudoController.getByIdConteudo);

module.exports = router;