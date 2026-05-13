/* ============================================================
   SCRIPT.JS - LÓGICA DE FUNCIONAMENTO (SLIDER, VITRINE, CARRINHO)
   ============================================================ */

let currentSlide = 0;
let slideInterval;

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
        slideInterval = setInterval(() => {
            updateSlider(currentSlide + 1);
        }, 20000); // 20 Segundos
    }

    if (btnNext) btnNext.onclick = () => { updateSlider(currentSlide + 1); startAutoCycle(); };
    if (btnPrev) btnPrev.onclick = () => { updateSlider(currentSlide - 1); startAutoCycle(); };

    dots.forEach((dot, idx) => {
        dot.onclick = () => { updateSlider(idx); startAutoCycle(); };
    });

    updateSlider(0);
    startAutoCycle();
}

function inicializarPagina() {
    atualizarContadorMenu();
    if (document.querySelector('.hero-slider-section')) configurarSlider();
    if (document.getElementById('detalhe-titulo')) carregarDadosDoProduto();
    if (document.getElementById('lista-itens-carrinho')) renderizarCarrinho();
    if (document.getElementById('vitrine-livros')) {
        renderizarVitrine();
        configurarPesquisa();
    }
}

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

function carregarDadosDoProduto() {
    const params = new URLSearchParams(window.location.search);
    const idUrl = params.get('id');
    const livro = livros.find(l => Number(l.id) === Number(idUrl));

    if (livro) {
        document.getElementById('detalhe-titulo').innerText = livro.titulo;
        document.getElementById('detalhe-autor').innerText = livro.autor;
        document.getElementById('detalhe-preco').innerText = `R$ ${livro.preco}`;
        document.getElementById('detalhe-sinopse').innerText = livro.sinopse;
        document.getElementById('autor-nome-info').innerText = livro.autor;
        document.getElementById('autor-bio').innerText = livro.bio;
        const img = document.getElementById('detalhe-imagem');
        if (img) img.src = livro.imagem;
        const fotoAutor = document.getElementById('autor-foto');
        if (fotoAutor) fotoAutor.src = livro.foto;

        // --- MUDANÇA PARA O BOTÃO FUNCIONAR ---
        const btnCompraGrande = document.querySelector('.btn-comprar-grande');
        if (btnCompraGrande) {
            btnCompraGrande.onclick = () => adicionarAoCarrinho(livro.id);
        }
    }
}

function configurarPesquisa() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();
            const filtrados = livros.filter(l => 
                l.titulo.toLowerCase().includes(termo) || l.autor.toLowerCase().includes(termo)
            );
            renderizarVitrine(filtrados);
        });
    }
}

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
        lista.innerHTML = carrinho.length === 0 ? "<p>Carrinho vazio.</p>" : "";
        let soma = 0;
        carrinho.forEach((item, idx) => {
            lista.innerHTML += `<div class="item-carrinho"><h4>${item.titulo}</h4><p>R$ ${item.preco}</p></div>`;
            soma += parseFloat(item.preco.replace(',', '.'));
        });
        if (totalElemento) totalElemento.innerText = `R$ ${soma.toFixed(2).replace('.', ',')}`;
    }
}

document.addEventListener('DOMContentLoaded', inicializarPagina);