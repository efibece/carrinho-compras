let categoriaAtual = 'todas';

function filtrarPorCategoria(categoria) {
  categoriaAtual = categoria;
  
  const produtos = document.querySelectorAll('.produto-card');
  const botoes = document.querySelectorAll('.filtro-btn');

  botoes.forEach(btn => btn.classList.remove('ativo'));
  event.target.classList.add('ativo');

  produtos.forEach(produto => {
    const produtoCategoria = produto.dataset.categoria;
    
    if (categoria === 'todas' || produtoCategoria === categoria) {
      produto.style.display = 'block';
      produto.style.animation = 'fadeIn 0.5s';
    } else {
      produto.style.display = 'none';
    }
  });
}

const styleAnimacao = document.createElement('style');
styleAnimacao.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
document.head.appendChild(styleAnimacao);
