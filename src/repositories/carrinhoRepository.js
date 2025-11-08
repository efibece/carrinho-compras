const carrinhos = require('../data/carrinhos');

class CarrinhoRepository {
  obterCarrinho(usuarioId) {
    if (!carrinhos[usuarioId]) {
      carrinhos[usuarioId] = { itens: [], total: 0 };
    }
    return carrinhos[usuarioId];
  }

  adicionarItem(usuarioId, produto, quantidade) {
    const carrinho = this.obterCarrinho(usuarioId);
    const itemExistente = carrinho.itens.find(item => item.produto.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      carrinho.itens.push({ produto, quantidade });
    }

    this.calcularTotal(usuarioId);
    return carrinho;
  }

  removerItem(usuarioId, produtoId) {
    const carrinho = this.obterCarrinho(usuarioId);
    carrinho.itens = carrinho.itens.filter(item => item.produto.id !== parseInt(produtoId));
    this.calcularTotal(usuarioId);
    return carrinho;
  }

  atualizarQuantidade(usuarioId, produtoId, quantidade) {
    const carrinho = this.obterCarrinho(usuarioId);
    const item = carrinho.itens.find(item => item.produto.id === parseInt(produtoId));

    if (item) {
      item.quantidade = quantidade;
      if (item.quantidade <= 0) {
        return this.removerItem(usuarioId, produtoId);
      }
    }

    this.calcularTotal(usuarioId);
    return carrinho;
  }

  calcularTotal(usuarioId) {
    const carrinho = this.obterCarrinho(usuarioId);
    carrinho.total = carrinho.itens.reduce((total, item) => {
      return total + (item.produto.preco * item.quantidade);
    }, 0);
    return carrinho.total;
  }

  limparCarrinho(usuarioId) {
    carrinhos[usuarioId] = { itens: [], total: 0 };
    return carrinhos[usuarioId];
  }
}

module.exports = new CarrinhoRepository();
