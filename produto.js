/* ============================================================
   PRODUTO.JS - VALUTA LIVRARIA (VERSÃO INTEGRAL ATUALIZADA)
   ============================================================ */

// 1. BANCO DE DADOS INTEGRADO
const livros = [
    { id: 1, titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", preco: "59,90", imagem: "crime-e-castigo.webp", bio: "Fiódor Dostoiévski é um dos maiores nomes da literatura russa, explorando a psicologia humana em situações extremas.", foto: "autor-dostoievski.webp", sinopse: "Uma das obras mais impactantes da literatura russa, focada na culpa e redenção." },
    { id: 2, titulo: "Os Irmãos Karamazov", autor: "Fiódor Dostoiévski", preco: "72,00", imagem: "os-irmaos-karamazov.jpg", bio: "Dostoiévski explorou profundamente a fé, a dúvida e a razão nesta que é sua obra-prima final.", foto: "autor-dostoievski.webp", sinopse: "O testamento literário de Dostoiévski sobre família e fé." },
    { id: 3, titulo: "Memórias do Subsolo", autor: "Fiódor Dostoiévski", preco: "45,00", imagem: "memorias-do-subsolo.jpg", bio: "Obra visceral que antecipa muitos dos temas do existencialismo moderno.", foto: "autor-dostoievski.webp", sinopse: "Um mergulho na consciência perturbada de um homem isolado." },
    { id: 7, titulo: "Noites Brancas", autor: "Fiódor Dostoiévski", preco: "38,00", imagem: "noites-brancas.jpg", bio: "Um mestre do romance psicológico russo.", foto: "autor-dostoievski.jpg", sinopse: "Uma doce e triste história sobre a solidão e o sonhar." },
    { id: 4, titulo: "Assim Falou Zaratustra", autor: "Friedrich Nietzsche", preco: "54,90", imagem: "assim-falou-zaratustra.jpg", bio: "Filósofo alemão cujas ideias sobre o além-homem mudaram o pensamento ocidental.", foto: "frederick-nietschzie.jpg", sinopse: "A jornada filosófica sobre o além-homem." },
    { id: 5, titulo: "O Anticristo", autor: "Friedrich Nietzsche", preco: "39,90", imagem: "o-anticristo.jpg", bio: "Crítico feroz da moralidade tradicional, desafia os pilares da civilização.", foto: "frederick-nietschzie.jpg", sinopse: "Uma crítica contundente às instituições religiosas." },
    { id: 6, titulo: "Crepúsculo dos Ídolos", autor: "Friedrich Nietzsche", preco: "42,00", imagem: "crepusculo-dos-idolos.jpg", bio: "A filosofia de Nietzsche condensada em aforismos provocativos.", foto: "frederick-nietschzie.jpg", sinopse: "Como filosofar com o martelo e derrubar ídolos antigos." },
    { id: 8, titulo: "Odisseia", autor: "Homero", preco: "68,00", imagem: "odisseia.jpg", bio: "Lendário poeta grego a quem se atribui a fundação da literatura ocidental.", foto: "homero-autor.jpg", sinopse: "O retorno épico de Odisseu para seu lar em Ítaca." },
    { id: 9, titulo: "A Ilíada", autor: "Homero", preco: "70,00", imagem: "a-iliada.jpg", bio: "Homero narra a épica Guerra de Troia através dos séculos.", foto: "homero-autor.jpg", sinopse: "A cólera de Aquiles e os grandes combates da Guerra de Troia." },
    { id: 10, titulo: "A Metamorfose", autor: "Franz Kafka", preco: "39,90", imagem: "a-metamorfose.jpg", bio: "Kafka retratou a alienação e o absurdo da condição humana moderna.", foto: "homero-autor.jpg", sinopse: "Gregor Samsa acorda transformado em um inseto monstruoso." }
];

/* ============================================================
   2. FUNÇÕES DE RENDERIZAÇÃO
   ============================================================ */

function inicializarPagina() {
    atualizarContadorMenu();
    if (document.getElementById('detalhe-titulo')) carregarDadosDoProduto();
    if (document.getElementById('lista-itens-carrinho')) renderizarCarrinho();
    if (document.getElementById('vitrine-livros')) renderizarVitrine();
}

function carregarDadosDoProduto() {
    const params = new URLSearchParams(window.location.search);
    const idUrl = params.get('id');
    const livro = livros.find(l => Number(l.id) === Number(idUrl));

    if (livro) {
        document.getElementById('detalhe-titulo').innerText = livro.titulo;
        document.getElementById('detalhe-autor').innerText = livro.autor;
        document.getElementById('detalhe-imagem').src = livro.imagem;
        document.getElementById('detalhe-preco').innerText = `R$ ${livro.preco}`;
        document.getElementById('detalhe-sinopse').innerText = livro.sinopse;

        document.getElementById('autor-nome-info').innerText = livro.autor;
        document.getElementById('autor-bio').innerText = livro.bio;
        
        const fotoAutor = document.getElementById('autor-foto');
        if (fotoAutor) { fotoAutor.src = livro.foto; }

        const btnCompra = document.querySelector('.btn-comprar-grande');
        if (btnCompra) {
            btnCompra.onclick = () => adicionarAoCarrinho(livro.id);
        }
    }
}

function renderizarVitrine() {
    const vitrine = document.getElementById('vitrine-livros');
    if (vitrine) {
        vitrine.innerHTML = "";
        livros.forEach(l => {
            vitrine.innerHTML += `
                <div class="card-livro">
                    <img src="${l.imagem}" alt="${l.titulo}">
                    <div class="card-acoes">
                        <a href="produto.html?id=${l.id}" class="btn-detalhes">Detalhes</a>
                        <button class="btn-carrinho-circular" onclick="adicionarAoCarrinho(${l.id})">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>`;
        });
    }
}

/* ============================================================
   3. SISTEMA DE CARRINHO (SEM ALERT E COM CONTADOR CORRETO)
   ============================================================ */

function adicionarAoCarrinho(id) {
    const livroSelecionado = livros.find(l => l.id === id);
    if (livroSelecionado) {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(livroSelecionado);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        
        // Atualiza o contador imediatamente no menu
        atualizarContadorMenu();
        
        // O aviso 'alert' foi removido para uma navegação mais fluida
    }
}

function renderizarCarrinho() {
    const lista = document.getElementById('lista-itens-carrinho');
    const totalElemento = document.getElementById('preco-total-carrinho');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    if (lista) {
        lista.innerHTML = "";
        let somaTotal = 0;
        carrinho.forEach((item, index) => {
            lista.innerHTML += `
                <div class="item-carrinho">
                    <img src="${item.imagem}" alt="${item.titulo}" style="width: 50px;">
                    <div class="item-info">
                        <h4>${item.titulo}</h4>
                        <p>R$ ${item.preco}</p>
                        <button onclick="removerDoCarrinho(${index})" class="btn-remover">Remover</button>
                    </div>
                </div>`;
            somaTotal += parseFloat(item.preco.replace(',', '.'));
        });
        if (totalElemento) totalElemento.innerText = `R$ ${somaTotal.toFixed(2).replace('.', ',')}`;
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
    const contagemSpan = document.getElementById('contagem-carrinho');
    const linkCarrinho = document.getElementById('link-carrinho');

    // Se existir o span específico, atualiza só ele
    if (contagemSpan) {
        contagemSpan.innerText = carrinho.length;
    } 
    // Caso contrário, atualiza o texto do link inteiro (fallback)
    else if (linkCarrinho) {
        linkCarrinho.innerText = `CARRINHO (${carrinho.length})`;
    }
}

document.addEventListener('DOMContentLoaded', inicializarPagina);