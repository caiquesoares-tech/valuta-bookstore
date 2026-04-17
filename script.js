/* ============================================================
   SCRIPT PRINCIPAL - VALUTA LIVRARIA
   ============================================================ */

// 1. BANCO DE DADOS (DATABASE)
const livros = [
    { id: 1, titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", preco: "59,90", imagem: "crime-e-castigo.webp" },
    { id: 2, titulo: "Os Irmãos Karamazov", autor: "Fiódor Dostoiévski", preco: "72,00", imagem: "os-irmaos-karamazov.jpg" },
    { id: 3, titulo: "Memórias do Subsolo", autor: "Fiódor Dostoiévski", preco: "45,00", imagem: "memorias-do-subsolo.jpg" },
    { id: 7, titulo: "Noites Brancas", autor: "Fiódor Dostoiévski", preco: "38,00", imagem: "noites-brancas.jpg" },
    { id: 4, titulo: "Assim Falou Zaratustra", autor: "Friedrich Nietzsche", preco: "54,90", imagem: "assim-falou-zaratustra.jpg" },
    { id: 5, titulo: "O Anticristo", autor: "Friedrich Nietzsche", preco: "39,90", imagem: "o-anticristo.jpg" },
    { id: 6, titulo: "Crepúsculo dos Ídolos", autor: "Friedrich Nietzsche", preco: "42,00", imagem: "crepusculo-dos-idolos.jpg" },
    { id: 8, titulo: "Odisseia", autor: "Homero", preco: "68,00", imagem: "odisseia.jpg" },
    { id: 9, titulo: "A Ilíada", autor: "Homero", preco: "70,00", imagem: "a-iliada.jpg" },
    { id: 10, titulo: "A Metamorfose", autor: "Franz Kafka", preco: "39,90", imagem: "a-metamorfose.jpg" }
];

// 2. SELEÇÃO DE ELEMENTOS DOM
const vitrine = document.getElementById('vitrine-livros');
const inputBusca = document.getElementById('search-input');
const linkCarrinho = document.getElementById('link-carrinho');
const containerDetalhe = document.getElementById('detalhe-livro');

// Estado da aplicação
let totalItensCarrinho = 0;

/* ============================================================
   3. RENDERIZAÇÃO DA VITRINE (PÁGINA INICIAL)
   ============================================================ */
function renderizarLivros(lista) {
    if (!vitrine) return; // Só executa se estiver na Home
    
    vitrine.innerHTML = ""; 
    
    lista.forEach(livro => {
        vitrine.innerHTML += `
            <article class="card-livro">
                <img src="${livro.imagem}" alt="${livro.titulo}">
                <h3>${livro.titulo}</h3>
                <p class="preco">R$ ${livro.preco}</p>
                
                <div class="card-acoes">
                    <button class="btn-detalhes" onclick="irParaDetalhes(${livro.id})">Detalhes</button>
                    
                    <button class="btn-carrinho-circular" onclick="adicionarAoCarrinho()" title="Adicionar ao Carrinho">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </article>`;
    });
}

/* ============================================================
   4. CARREGAMENTO DA PÁGINA DE PRODUTO (DETALHES)
   ============================================================ */
function carregarDetalhesProduto() {
    if (!containerDetalhe) return; // Só executa se estiver em produto.html
    
    // Pega o ID da URL (ex: produto.html?id=1)
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const livro = livros.find(l => l.id == id);

    if (livro) {
        containerDetalhe.innerHTML = `
            <div class="produto-imagem">
                <img src="${livro.imagem}" alt="${livro.titulo}">
            </div>
            <div class="produto-info">
                <h1>${livro.titulo}</h1>
                <p class="produto-autor">${livro.autor}</p>
                <p class="produto-sinopse">
                    Uma das obras mais impactantes de ${livro.autor}, agora disponível no acervo da Valuta. 
                    Este exemplar traz reflexões imortais sobre a condição humana em uma edição impecável, 
                    pensada para leitores que buscam a profundidade do conhecimento clássico.
                </p>
                <div class="compra-area">
                    <button class="btn-comprar-grande" onclick="adicionarAoCarrinho()">
                        Comprar Agora - R$ ${livro.preco}
                    </button>
                </div>
            </div>`;
    } else {
        containerDetalhe.innerHTML = "<h2>Livro não encontrado no acervo.</h2>";
    }
}

/* ============================================================
   5. SISTEMA DE BUSCA E NAVEGAÇÃO
   ============================================================ */

// Redirecionamento para a página de detalhes
function irParaDetalhes(id) { 
    window.location.href = `produto.html?id=${id}`; 
}

// Contador de Carrinho
function adicionarAoCarrinho() {
    totalItensCarrinho++;
    if (linkCarrinho) {
        // Atualiza o texto do menu para CARRINHO (2)
        linkCarrinho.innerText = `CARRINHO (${totalItensCarrinho})`;
    }
}

// Filtro de Busca (Título ou Autor)
if (inputBusca) {
    inputBusca.addEventListener('input', () => {
        const termo = inputBusca.value.toLowerCase();
        const filtrados = livros.filter(l => 
            l.titulo.toLowerCase().includes(termo) || 
            l.autor.toLowerCase().includes(termo)
        );
        renderizarLivros(filtrados);
    });
}

/* ============================================================
   6. INICIALIZAÇÃO
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderizarLivros(livros);
    carregarDetalhesProduto();
});