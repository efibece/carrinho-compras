const compras = require('../data/compras');

class CompraRepository {
  salvar(compra) {
    const novoId = compras.length > 0 ? Math.max(...compras.map(c => c.id)) + 1 : 1;
    const novaCompra = {
      id: novoId,
      ...compra,
      data: new Date()
    };
    compras.push(novaCompra);
    return novaCompra;
  }

  listarTodas() {
    return compras.sort((a, b) => b.data - a.data);
  }

  buscarPorId(id) {
    return compras.find(c => c.id === id);
  }

  buscarPorUsuario(usuarioId) {
    return compras.filter(c => c.usuarioId === usuarioId).sort((a, b) => b.data - a.data);
  }
}

module.exports = new CompraRepository();
