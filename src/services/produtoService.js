const produtoRepository = require('../repositories/produtoRepository');

class ProdutoService {
  listarProdutos() {
    return produtoRepository.listarTodos();
  }

  buscarProduto(id) {
    const produto = produtoRepository.buscarPorId(id);
    if (!produto) {
      throw new Error('Produto não encontrado');
    }
    return produto;
  }

  listarCategorias() {
    const produtos = produtoRepository.listarTodos();
    const categorias = [...new Set(produtos.map(p => p.categoria))];
    return categorias;
  }
}

module.exports = new ProdutoService();
