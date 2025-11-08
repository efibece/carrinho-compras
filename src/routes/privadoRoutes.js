const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const carrinhoController = require('../controllers/carrinhoController');
const compraController = require('../controllers/compraController');
const autenticacaoController = require('../controllers/autenticacaoController');
const verificarAutenticacao = require('../middlewares/autenticacao');
const verificarPermissaoComprador = require('../middlewares/permissao');

router.use(verificarAutenticacao);

router.get('/produtos', produtoController.listarProdutos);
router.get('/carrinho', verificarPermissaoComprador, carrinhoController.visualizarCarrinho);
router.get('/compras-realizadas', compraController.listarComprasRealizadas);
router.get('/logout', autenticacaoController.realizarLogout);

router.post('/carrinho/adicionar', verificarPermissaoComprador, carrinhoController.adicionarProduto);
router.post('/carrinho/remover', verificarPermissaoComprador, carrinhoController.removerProduto);
router.post('/carrinho/atualizar', verificarPermissaoComprador, carrinhoController.atualizarQuantidade);
router.post('/carrinho/finalizar', verificarPermissaoComprador, carrinhoController.finalizarCompra);

module.exports = router;
