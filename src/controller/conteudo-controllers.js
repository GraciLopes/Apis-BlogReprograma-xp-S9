const { request } = require('express');
const blogRepro = require('../model/conteudo-models');

const getConteudo = (request, response) => {
    response.status(200).json(blogRepro);
}

const getByIdConteudo = (request, response) => {
    const { id } = request.params;
    const conteudoBlog1 = blogRepro.find(conteudoBlog1 => conteudoBlog1 == id);
    response.status(200).json(conteudoBlog1);
}

const getByTitle = (request, response) => {
    const { titulo } = request.query;
    const conteudoBlog1 = blogRepro.find(conteudoBlog1 => conteudoBlog1.titulo == titulo)
    response.status(200).json(conteudoBlog1);
}

module.exports = {
    getConteudo,
    getByIdConteudo,
    getByTitle
}