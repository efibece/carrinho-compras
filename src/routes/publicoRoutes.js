const express = require('express');
const router = express.Router();
const autenticacaoController = require('../controllers/autenticacaoController');

router.get('/', (req, res) => {
  if (req.session && req.session.usuario) {
    const destino = req.session.usuario.tipo === 'comprador' ? '/produtos' : '/compras-realizadas';
    return res.redirect(destino);
  }
  res.redirect('/login');
});

router.get('/login', autenticacaoController.exibirLogin);
router.post('/login', autenticacaoController.realizarLogin);
router.get('/registro', autenticacaoController.exibirRegistro);
router.post('/registro', autenticacaoController.realizarRegistro);

module.exports = router;
