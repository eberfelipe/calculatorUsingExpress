const express = require('express');
const app = express();
const port = 3000;

// Importando as rotas e middleware
const { sum, sub, mul, div } = require('./controller');
const { middleware } = require('./middleware');

// Tratamento de erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor');
});

// Rotas
app.get('/sum', middleware, sum);
app.get('/sub', middleware, sub);
app.get('/mul', middleware, mul);
app.get('/div', middleware, div);


// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
