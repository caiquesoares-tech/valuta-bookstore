/* ============================================================
   SCRIPT.JS - VERSÃO COMPLETA E INTEGRADA
   ============================================================ */

let currentSlide = 0;
let slideInterval;

// -- LÓGICA DO SLIDER (HOME) --
function configurarSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const btnNext = document.querySelector('.next-slide');
    const btnPrev = document.querySelector('.prev-slide');

    if (slides.length === 0) return;

    function updateSlider(index) {
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function startAutoCycle() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => { updateSlider(currentSlide + 1); }, 15000); 
    }

    if (btnNext) btnNext.onclick = () => { updateSlider(currentSlide + 1); startAutoCycle(); };
    if (btnPrev) btnPrev.onclick = () => { updateSlider(currentSlide - 1); startAutoCycle(); };

    dots.forEach((dot, idx) => {
        dot.onclick = () => { updateSlider(idx); startAutoCycle(); };
    });

    updateSlider(0);
    startAutoCycle();
}

// -- LÓGICA DO CARROSSEL DE RECOMENDAÇÕES (PRODUTO) --
function scrollManual(direcao) {
    const vitrine = document.getElementById('vitrine-recomendacoes');
    if (!vitrine) return;
    const scrollAmount = 200; 
    vitrine.scrollBy({
        left: direcao * scrollAmount,
        behavior: 'smooth'
    });
}

function renderizarRecomendacoes() {
    const vitrine = document.getElementById('vitrine-recomendacoes');
    if (!vitrine || typeof livros === 'undefined') return;

    vitrine.innerHTML = livros.map(l => `
        <article class="card-livro">
            <a href="produto.html?id=${l.id}">
                <img src="${l.imagem}" alt="${l.titulo}">
                <h3>${l.titulo}</h3>
                <p class="preco">R$ ${l.preco}</p>
            </a>
        </article>
    `).join('');
}

// -- LÓGICA DA VITRINE PRINCIPAL --
function renderizarVitrine(listaParaExibir = livros) {
    const vitrine = document.getElementById('vitrine-livros');
    if (!vitrine) return;
    
    vitrine.innerHTML = listaParaExibir.map(l => `
        <article class="card-livro">
            <img src="${l.imagem}" alt="${l.titulo}">
            <h3>${l.titulo}</h3>
            <p class="preco">R$ ${l.preco}</p>
            <div class="botoes-container">
                <a href="produto.html?id=${l.id}" class="btn-comprar">COMPRAR</a>
                <button class="btn-add-carrinho" onclick="adicionarAoCarrinho(${l.id})">
                    <i class="fas fa-shopping-bag"></i>
                </button>
            </div>
        </article>
    `).join('');
}

// -- LÓGICA DA BUSCA (ATUALIZADA: OCULTA O CONTAINER PRINCIPAL) --
function configurarPesquisa() {
    const inputBusca = document.getElementById('search-input');
    const conteudoPrincipal = document.getElementById('conteudo-principal'); 

    if (!inputBusca) return;

    inputBusca.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase();
        
        // Esconde o conteúdo principal ao pesquisar, mostra ao limpar
        if (conteudoPrincipal) {
            if (termo.length > 0) {
                conteudoPrincipal.classList.add('modo-busca-ativo');
            } else {
                conteudoPrincipal.classList.remove('modo-busca-ativo');
            }
        }

        if (typeof livros === 'undefined') return;
        
        const livrosFiltrados = livros.filter(livro => 
            livro.titulo.toLowerCase().includes(termo) || 
            (livro.autor && livro.autor.toLowerCase().includes(termo))
        );
        renderizarVitrine(livrosFiltrados);
    });
}

// -- LÓGICA DO CARRINHO --
function adicionarAoCarrinho(id) {
    const livro = livros.find(l => l.id === id);
    if (livro) {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(livro);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarContadorMenu();
        alert(`"${livro.titulo}" adicionado ao carrinho!`);
    }
}

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
    atualizarContadorMenu();
}

function atualizarContadorMenu() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const badge = document.getElementById('contagem-carrinho');
    if (badge) badge.innerText = carrinho.length;
}

function renderizarCarrinho() {
    const lista = document.getElementById('lista-itens-carrinho');
    const totalElemento = document.getElementById('preco-total-carrinho');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    if (lista) {
        if (carrinho.length === 0) {
            lista.innerHTML = "<p style='padding:20px;'>Seu carrinho está vazio.</p>";
            if (totalElemento) totalElemento.innerText = "R$ 0,00";
            return;
        }

        lista.innerHTML = "";
        let soma = 0;
        carrinho.forEach((item, idx) => {
            lista.innerHTML += `
                <div class="cart-item-premium">
                    <img src="${item.imagem}" alt="${item.titulo}" class="cart-img-premium">
                    <div class="cart-info-premium">
                        <h4>${item.titulo}</h4>
                        <span class="cart-author">${item.autor}</span>
                        <p class="cart-price">R$ ${item.preco}</p>
                    </div>
                    <button class="btn-remove-premium" onclick="removerDoCarrinho(${idx})">
                        <i class="fas fa-trash-alt"></i> Remover
                    </button>
                </div>`;
            soma += parseFloat(item.preco.toString().replace(',', '.'));
        });
        if (totalElemento) totalElemento.innerText = `R$ ${soma.toFixed(2).replace('.', ',')}`;
    }
}

// -- INICIALIZAÇÃO GERAL --
function inicializarPagina() {
    atualizarContadorMenu();
    
    if (document.querySelector('.hero-slider-section')) configurarSlider();
    // Certifique-se de que carregarDadosDoProduto esteja definida no seu código
    if (document.getElementById('detalhe-titulo') && typeof carregarDadosDoProduto === 'function') carregarDadosDoProduto(); 
    if (document.getElementById('lista-itens-carrinho')) renderizarCarrinho();
    
    if (document.getElementById('vitrine-livros')) {
        renderizarVitrine();
        configurarPesquisa(); 
    }
    
    if (document.getElementById('vitrine-recomendacoes')) {
        renderizarRecomendacoes();
    }
}

document.addEventListener('DOMContentLoaded', inicializarPagina);