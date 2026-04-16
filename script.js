// ============================================================
// 1. BANCO DE DADOS (ARRAY DE OBJETOS) - 7 LIVROS
// ============================================================
const livros = [
    // Dostoiévski
    { 
        id: 1, 
        titulo: "Crime e Castigo", 
        autor: "Fiódor Dostoiévski", 
        preco: "59,90", 
        imagem: "crime-e-castigo.webp" 
    },
    { 
        id: 2, 
        titulo: "Os Irmãos Karamazov", 
        autor: "Fiódor Dostoiévski", 
        preco: "72,00", 
        imagem: "os-irmaos-karamazov.jpg" 
    },
    { 
        id: 3, 
        titulo: "Memórias do Subsolo", 
        autor: "Fiódor Dostoiévski", 
        preco: "45,00", 
        imagem: "memorias-do-subsolo.jpg" 
    },
    { 
        id: 7, 
        titulo: "Noites Brancas", 
        autor: "Fiódor Dostoiévski", 
        preco: "38,00", 
        imagem: "noites-brancas.jpg" 
    },
    // Nietzsche
    { 
        id: 4, 
        titulo: "Assim Falou Zaratustra", 
        autor: "Friedrich Nietzsche", 
        preco: "54,90", 
        imagem: "assim-falou-zaratustra.jpg" 
    },
    { 
        id: 5, 
        titulo: "O Anticristo", 
        autor: "Friedrich Nietzsche", 
        preco: "39,90", 
        imagem: "o-anticristo.jpg" 
    },
    { 
        id: 6, 
        titulo: "Crepúsculo dos Ídolos", 
        autor: "Friedrich Nietzsche", 
        preco: "42,00", 
        imagem: "crepusculo-dos-idolos.jpg" 
    }
];

// ============================================================
// 2. SELEÇÃO DE ELEMENTOS DO DOM
// ============================================================
const vitrine = document.getElementById('vitrine-livros');
const inputBusca = document.getElementById('search-input');
const linkCarrinho = document.getElementById('link-carrinho');

let totalItensCarrinho = 0;

// ============================================================
// 3. FUNÇÃO PARA RENDERIZAR OS LIVROS NA TELA
// ============================================================
function renderizarLivros(listaParaExibir) {
    // Limpa a vitrine antes de desenhar (evita duplicados)
    vitrine.innerHTML = ""; 

    // Se a busca não retornar nada
    if (listaParaExibir.length === 0) {
        vitrine.innerHTML = `<p class="aviso-vazio">Obra não encontrada em nosso acervo.</p>`;
        return;
    }

    // Cria o HTML para cada livro
    listaParaExibir.forEach(livro => {
        const cardHTML = `
            <article class="card-livro">
                <div class="capa-container">
                    <img src="${livro.imagem}" alt="${livro.titulo}">
                </div>
                <h3>${livro.titulo}</h3>
                <p class="autor-livro">${livro.autor}</p>
                <p class="preco">R$ ${livro.preco}</p>
                
                <div class="card-acoes">
                    <button class="btn-detalhes" onclick="abrirDetalhes('${livro.titulo}')">Ver Detalhes</button>
                    <button class="btn-add-carrinho" onclick="adicionarAoCarrinho()">🛒</button>
                </div>
            </article>
        `;
        vitrine.innerHTML += cardHTML;
    });
}

// ============================================================
// 4. LÓGICA DE FILTRO / BUSCA EM TEMPO REAL
// ============================================================
inputBusca.addEventListener('input', () => {
    const termoBusca = inputBusca.value.toLowerCase();
    
    const livrosFiltrados = livros.filter(livro => {
        return livro.titulo.toLowerCase().includes(termoBusca) || 
               livro.autor.toLowerCase().includes(termoBusca);
    });
    
    renderizarLivros(livrosFiltrados);
});

// ============================================================
// 5. FUNÇÕES DE INTERAÇÃO
// ============================================================
function adicionarAoCarrinho() {
    totalItensCarrinho++;
    linkCarrinho.innerText = `Carrinho (${totalItensCarrinho})`;
}

function abrirDetalhes(nomeLivro) {
    alert("Explorando a obra: " + nomeLivro);
}

// ============================================================
// 6. INICIALIZAÇÃO
// ============================================================
// Executa a função pela primeira vez ao carregar a página
renderizarLivros(livros);