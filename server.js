const app = require('./src/app');
const port = 8000;

app.listen(port, () => {
    console.log('O servidor esta rodando na porta' + port)
})