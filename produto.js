/* ============================================================
   PRODUTO.JS - VERSÃO INTEGRAL E INTEGRADA
   ============================================================ */

const livros = [
    { id: 1, titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", preco: "59,90", imagem: "crime-e-castigo.webp", bio: "Fiódor Dostoiévski é um dos maiores nomes da literatura russa.", foto: "autor-dostoievski.webp" },
    { id: 2, titulo: "Os Irmãos Karamazov", autor: "Fiódor Dostoiévski", preco: "72,00", imagem: "os-irmaos-karamazov.jpg", bio: "Dostoiévski explorou profundamente a fé e a dúvida.", foto: "autor-dostoievski.webp" },
    { id: 3, titulo: "Memórias do Subsolo", autor: "Fiódor Dostoiévski", preco: "45,00", imagem: "memorias-do-subsolo.jpg", bio: "Obra visceral que antecipa o existencialismo.", foto: "autor-dostoievski.jpg" },
    { id: 7, titulo: "Noites Brancas", autor: "Fiódor Dostoiévski", preco: "38,00", imagem: "noites-brancas.jpg", bio: "Um mestre do romance psicológico russo.", foto: "autor-dostoievski.webp" },
    { id: 4, titulo: "Assim Falou Zaratustra", autor: "Friedrich Nietzsche", preco: "54,90", imagem: "assim-falou-zaratustra.jpg", bio: "Filósofo alemão cujas ideias mudaram o pensamento ocidental.", foto: "nietzsche.jpg" },
    { id: 5, titulo: "O Anticristo", autor: "Friedrich Nietzsche", preco: "39,90", imagem: "o-anticristo.jpg", bio: "Crítico feroz da moralidade tradicional.", foto: "autor-nietzsche.jpg" },
    { id: 6, titulo: "Crepúsculo dos Ídolos", autor: "Friedrich Nietzsche", preco: "42,00", imagem: "crepusculo-dos-idolos.jpg", bio: "A filosofia de Nietzsche em aforismos.", foto: "nietzsche.jpg" },
    { id: 8, titulo: "Odisseia", autor: "Homero", preco: "68,00", imagem: "odisseia.jpg", bio: "Fundação da literatura ocidental.", foto: "homero-autor.jpg" },
    { id: 9, titulo: "A Ilíada", autor: "Homero", preco: "70,00", imagem: "a-iliada.jpg", bio: "Narra a épica Guerra de Troia.", foto: "homero-autor.jpg" },
    { id: 10, titulo: "A Metamorfose", autor: "Franz Kafka", preco: "39,90", imagem: "a-metamorfose.jpg", bio: "Kafka retratou a alienação moderna.", foto: "franz-kafka.jpg" }
];

/* FUNÇÕES GERAIS */
function inicializarPagina() {
    atualizarContadorMenu();
    if (document.getElementById('detalhe-titulo')) carregarDadosDoProduto();
    if (document.getElementById('lista-itens-carrinho')) renderizarCarrinho();
}

/* FUNÇÕES DE DETALHE DO PRODUTO */
function carregarDadosDoProduto() {
    const params = new URLSearchParams(window.location.search);
    const idUrl = params.get('id');
    const livro = livros.find(l => Number(l.id) === Number(idUrl));

    if (livro) {
        // Atualiza textos do livro
        document.getElementById('detalhe-titulo').innerText = livro.titulo;
        document.getElementById('detalhe-autor').innerText = livro.autor;
        document.getElementById('detalhe-imagem').src = livro.imagem;
        document.getElementById('detalhe-preco').innerText = `R$ ${livro.preco}`;
        
        // Atualiza dados do autor com verificação de segurança
        if(document.getElementById('autor-nome-info')) document.getElementById('autor-nome-info').innerText = livro.autor;
        if(document.getElementById('autor-bio')) document.getElementById('autor-bio').innerText = livro.bio;
        if(document.getElementById('autor-foto')) document.getElementById('autor-foto').src = livro.foto;

        // Integração do botão de compra: força o clique a adicionar este livro específico
        const btnCompra = document.querySelector('.btn-comprar-grande');
        if(btnCompra) {
            btnCompra.onclick = function() {
                adicionarAoCarrinho(livro.id);
            };
        }
    }
}

/* SISTEMA DE CARRINHO (INTEGRADO AO NOVO DESIGN) */
function adicionarAoCarrinho(id) {
    const livro = livros.find(l => l.id === id);
    if (livro) {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(livro);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarContadorMenu();
        alert(`"${livro.titulo}" adicionado!`);
    }
}

function renderizarCarrinho() {
    const lista = document.getElementById('lista-itens-carrinho');
    const totalElemento = document.getElementById('preco-total-carrinho');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    if (lista) {
        if (carrinho.length === 0) {
            lista.innerHTML = "<p style='padding:20px; font-family:Inter;'>Seu carrinho está vazio.</p>";
            if (totalElemento) totalElemento.innerText = "R$ 0,00";
            return;
        }

        lista.innerHTML = "";
        let soma = 0;
        
        carrinho.forEach((item, index) => {
            lista.innerHTML += `
                <div class="cart-item-premium">
                    <img src="${item.imagem}" alt="${item.titulo}" class="cart-img-premium">
                    <div class="cart-info-premium">
                        <h4>${item.titulo}</h4>
                        <span class="cart-author">${item.autor}</span>
                        <p class="cart-price">R$ ${item.preco}</p>
                        <button class="btn-remove-premium" onclick="removerDoCarrinho(${index})">
                            Remover
                        </button>
                    </div>
                </div>`;
            soma += parseFloat(item.preco.replace(',', '.'));
        });
        
        if (totalElemento) {
            totalElemento.innerText = `R$ ${soma.toFixed(2).replace('.', ',')}`;
        }
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
    const contagem = document.getElementById('contagem-carrinho');
    if (contagem) contagem.innerText = carrinho.length;
}

document.addEventListener('DOMContentLoaded', inicializarPagina);