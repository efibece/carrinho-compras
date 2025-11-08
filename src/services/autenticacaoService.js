const usuarioRepository = require('../repositories/usuarioRepository');

class AutenticacaoService {
  autenticar(email, senha) {
    const usuario = usuarioRepository.buscarPorEmail(email);

    if (!usuario) {
      return { sucesso: false, mensagem: 'Usuário não encontrado' };
    }

    if (usuario.senha !== senha) {
      return { sucesso: false, mensagem: 'Senha incorreta' };
    }

    return { 
      sucesso: true, 
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        tipo: usuario.tipo
      }
    };
  }

  registrar(nome, email, senha, tipo) {
    const usuarioExistente = usuarioRepository.buscarPorEmail(email);

    if (usuarioExistente) {
      return { sucesso: false, mensagem: 'E-mail já cadastrado' };
    }

    if (!nome || !email || !senha || !tipo) {
      return { sucesso: false, mensagem: 'Todos os campos são obrigatórios' };
    }

    if (!['comprador', 'visualizador'].includes(tipo)) {
      return { sucesso: false, mensagem: 'Tipo de usuário inválido' };
    }

    const novoUsuario = usuarioRepository.criar(nome, email, senha, tipo);

    return {
      sucesso: true,
      usuario: {
        id: novoUsuario.id,
        nome: novoUsuario.nome,
        email: novoUsuario.email,
        tipo: novoUsuario.tipo
      }
    };
  }

  verificarPermissao(usuario, tipoNecessario) {
    return usuario && usuario.tipo === tipoNecessario;
  }
}

module.exports = new AutenticacaoService();
