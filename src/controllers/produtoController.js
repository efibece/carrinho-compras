const produtoService = require('../services/produtoService');

class ProdutoController {
  listarProdutos(req, res) {
    const produtos = produtoService.listarProdutos();
    const categorias = produtoService.listarCategorias();
    
    res.render('produtos', { 
      produtos, 
      categorias,
      usuario: req.session.usuario 
    });
  }
}

module.exports = new ProdutoController();
