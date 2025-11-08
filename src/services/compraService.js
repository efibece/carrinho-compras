const compraRepository = require('../repositories/compraRepository');

class CompraService {
  salvar(usuarioId, usuarioNome, itens, total) {
    const compra = {
      usuarioId,
      usuarioNome,
      itens: itens.map(item => ({
        produtoId: item.produto.id,
        produtoNome: item.produto.nome,
        quantidade: item.quantidade,
        preco: item.produto.preco,
        subtotal: item.produto.preco * item.quantidade
      })),
      total
    };

    return compraRepository.salvar(compra);
  }

  listarTodas() {
    return compraRepository.listarTodas();
  }

  buscarPorUsuario(usuarioId) {
    return compraRepository.buscarPorUsuario(usuarioId);
  }
}

module.exports = new CompraService();
