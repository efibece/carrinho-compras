
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const carrinhoController = require('../controllers/carrinhoController');

router.get('/produtos', produtoController.listarProdutos);
router.get('/produtos/:id', produtoController.detalheProduto);

router.get('/carrinho', carrinhoController.visualizarCarrinho);
router.post('/carrinho/adicionar', carrinhoController.adicionarProduto);
router.post('/carrinho/remover', carrinhoController.removerProduto);
router.post('/carrinho/atualizar', carrinhoController.atualizarQuantidade);
router.post('/carrinho/finalizar', carrinhoController.finalizarCompra);

module.exports = router;
