const produtos = require('../data/produtos');

class ProdutoRepository {
  listarTodos() {
    return produtos;
  }

  buscarPorId(id) {
    return produtos.find(p => p.id === parseInt(id));
  }

  buscarPorCategoria(categoria) {
    return produtos.filter(p => p.categoria === categoria);
  }
}

module.exports = new ProdutoRepository();
