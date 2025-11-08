async function adicionarAoCarrinho(produtoId, quantidade = 1) {
  try {
    const response = await fetch('/carrinho/adicionar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ produtoId, quantidade })
    });

    const resultado = await response.json();

    if (resultado.sucesso) {
      mostrarNotificacao('Produto adicionado ao carrinho!', 'sucesso');
    } else {
      mostrarNotificacao(resultado.mensagem || 'Erro ao adicionar produto', 'erro');
    }
  } catch (erro) {
    mostrarNotificacao('Erro ao adicionar produto', 'erro');
  }
}

async function removerDoCarrinho(produtoId) {
  try {
    const response = await fetch('/carrinho/remover', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ produtoId })
    });

    const resultado = await response.json();

    if (resultado.sucesso) {
      location.reload();
    } else {
      mostrarNotificacao(resultado.mensagem || 'Erro ao remover produto', 'erro');
    }
  } catch (erro) {
    mostrarNotificacao('Erro ao remover produto', 'erro');
  }
}

async function atualizarQuantidade(produtoId, quantidade) {
  try {
    const response = await fetch('/carrinho/atualizar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ produtoId, quantidade })
    });

    const resultado = await response.json();

    if (resultado.sucesso) {
      location.reload();
    } else {
      mostrarNotificacao(resultado.mensagem || 'Erro ao atualizar quantidade', 'erro');
    }
  } catch (erro) {
    mostrarNotificacao('Erro ao atualizar quantidade', 'erro');
  }
}

function mostrarNotificacao(mensagem, tipo) {
  const notificacao = document.createElement('div');
  notificacao.className = tipo === 'sucesso' ? 'sucesso' : 'erro';
  notificacao.textContent = mensagem;
  notificacao.style.position = 'fixed';
  notificacao.style.top = '20px';
  notificacao.style.right = '20px';
  notificacao.style.zIndex = '9999';
  notificacao.style.minWidth = '250px';
  notificacao.style.animation = 'slideIn 0.3s ease-out';

  document.body.appendChild(notificacao);

  setTimeout(() => {
    notificacao.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(notificacao);
    }, 300);
  }, 3000);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
