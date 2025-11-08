const carrinhoRepository = require('../repositories/carrinhoRepository');
const produtoService = require('./produtoService');
const compraService = require('./compraService');

class CarrinhoService {
  obterCarrinho(usuarioId) {
    return carrinhoRepository.obterCarrinho(usuarioId);
  }

  adicionarProduto(usuarioId, produtoId, quantidade = 1) {
    const produto = produtoService.buscarProduto(produtoId);
    
    if (quantidade <= 0) {
      throw new Error('Quantidade deve ser maior que zero');
    }

    return carrinhoRepository.adicionarItem(usuarioId, produto, quantidade);
  }

  removerProduto(usuarioId, produtoId) {
    return carrinhoRepository.removerItem(usuarioId, produtoId);
  }

  atualizarQuantidade(usuarioId, produtoId, quantidade) {
    if (quantidade < 0) {
      throw new Error('Quantidade não pode ser negativa');
    }

    return carrinhoRepository.atualizarQuantidade(usuarioId, produtoId, quantidade);
  }

  finalizarCompra(usuarioId, usuarioNome) {
    const carrinho = carrinhoRepository.obterCarrinho(usuarioId);
    
    if (carrinho.itens.length === 0) {
      throw new Error('Carrinho vazio');
    }

    const compraSalva = compraService.salvar(usuarioId, usuarioNome, carrinho.itens, carrinho.total);

    const resumo = {
      itens: [...carrinho.itens],
      total: carrinho.total,
      data: compraSalva.data.toLocaleString('pt-BR')
    };

    carrinhoRepository.limparCarrinho(usuarioId);
    
    return resumo;
  }
}

module.exports = new CarrinhoService();
