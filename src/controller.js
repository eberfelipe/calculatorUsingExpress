// Função de soma
const sum = (req, res) => {
    const resultado = req.a + req.b;
    res.send(resultado.toString());
  };
  
  // Função de subtração
  const sub = (req, res) => {
    const resultado = req.a - req.b;
    res.send(resultado.toString());
  };
  
  // Função de multiplicação
  const mul = (req, res) => {
    const resultado = req.a * req.b;
    res.send(resultado.toString());
  };
  
  // Função de divisão
  const div = (req, res) => {
    if (req.b === 0) {
      res.status(400).send('Erro: divisão por zero');
    } else {
      const resultado = req.a / req.b;
      res.send(resultado.toString());
    }
  };
  
  module.exports = { sum, sub, mul, div };
  