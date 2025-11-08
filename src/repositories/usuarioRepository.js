const usuarios = require('../data/usuarios');

class UsuarioRepository {
  buscarPorEmail(email) {
    return usuarios.find(u => u.email === email);
  }

  buscarPorId(id) {
    return usuarios.find(u => u.id === id);
  }

  listarTodos() {
    return usuarios;
  }

  criar(nome, email, senha, tipo) {
    const novoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
    const novoUsuario = {
      id: novoId,
      nome,
      email,
      senha,
      tipo
    };
    usuarios.push(novoUsuario);
    return novoUsuario;
  }
}

module.exports = new UsuarioRepository();
