const compraService = require('../services/compraService');

class CompraController {
  listarComprasRealizadas(req, res) {
    const compras = compraService.listarTodas();
    res.render('compras-realizadas', {
      compras,
      usuario: req.session.usuario
    });
  }
}

module.exports = new CompraController();
