
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const autenticacaoController = require('../controllers/autenticacaoController');
const loggerMiddleware = require('../middlewares/logger');

router.use(loggerMiddleware);

router.get('/', homeController.exibirHome);
router.get('/sobre', homeController.exibirSobre);
router.get('/contato', homeController.exibirContato);

router.get('/login', autenticacaoController.exibirLogin);
router.post('/login', autenticacaoController.realizarLogin);
router.get('/logout', autenticacaoController.realizarLogout);

module.exports = router;
