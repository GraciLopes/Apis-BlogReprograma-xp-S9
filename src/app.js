const express = require();
const app = express();

const conteudoBlog1 = require('./routes/conteudo-routes');

app.use('/', conteudoBlog1);

app.use(express.json());

module.exports = app;