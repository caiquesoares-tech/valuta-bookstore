function renderizarLivros(lista) {
    if (!vitrine) return;
    vitrine.innerHTML = ""; 
    
    lista.forEach(livro => {
        vitrine.innerHTML += `
            <article class="card-livro">
                <img src="${livro.imagem}" alt="${livro.titulo}">
                <h3>${livro.titulo}</h3>
                <p>R$ ${livro.preco}</p>
                
                <div class="botoes-container">
                    <!-- Botão que antes era detalhes, agora é COMPRAR -->
                    <button class="btn-comprar" onclick="window.location.href='produto.html?id=${livro.id}'">
                        COMPRAR
                    </button>
                    
                    <button class="btn-add-carrinho" onclick="adicionarAoCarrinho(${livro.id})">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </article>`;
    });
}