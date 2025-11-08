const carrinhoService = require('../services/carrinhoService');

class CarrinhoController {
  visualizarCarrinho(req, res) {
    const carrinho = carrinhoService.obterCarrinho(req.session.usuario.id);
    
    res.render('carrinho', { 
      carrinho, 
      usuario: req.session.usuario,
      erro: null
    });
  }

  adicionarProduto(req, res) {
    try {
      const { produtoId, quantidade } = req.body;
      carrinhoService.adicionarProduto(
        req.session.usuario.id, 
        parseInt(produtoId), 
        parseInt(quantidade) || 1
      );
      res.json({ sucesso: true });
    } catch (erro) {
      res.status(400).json({ sucesso: false, mensagem: erro.message });
    }
  }

  removerProduto(req, res) {
    try {
      const { produtoId } = req.body;
      carrinhoService.removerProduto(req.session.usuario.id, produtoId);
      res.json({ sucesso: true });
    } catch (erro) {
      res.status(400).json({ sucesso: false, mensagem: erro.message });
    }
  }

  atualizarQuantidade(req, res) {
    try {
      const { produtoId, quantidade } = req.body;
      carrinhoService.atualizarQuantidade(
        req.session.usuario.id, 
        produtoId, 
        parseInt(quantidade)
      );
      res.json({ sucesso: true });
    } catch (erro) {
      res.status(400).json({ sucesso: false, mensagem: erro.message });
    }
  }

  finalizarCompra(req, res) {
    try {
      const resumo = carrinhoService.finalizarCompra(req.session.usuario.id, req.session.usuario.nome);
      res.render('confirmacao', { 
        resumo, 
        usuario: req.session.usuario 
      });
    } catch (erro) {
      const carrinho = carrinhoService.obterCarrinho(req.session.usuario.id);
      res.render('carrinho', { 
        carrinho, 
        usuario: req.session.usuario,
        erro: erro.message 
      });
    }
  }
}

module.exports = new CarrinhoController();
