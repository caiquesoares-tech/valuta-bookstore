/* ============================================================
   SCRIPT PRINCIPAL - VALUTA LIVRARIA (VERSÃO CORRIGIDA)
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

const vitrine = document.getElementById('vitrine-livros');
const inputBusca = document.getElementById('search-input');
const containerDetalhe = document.getElementById('detalhe-livro');

/* ============================================================
   3. RENDERIZAÇÃO DA VITRINE (PÁGINA INICIAL)
   ============================================================ */
function renderizarLivros(lista) {
    if (!vitrine) return;
    
    vitrine.innerHTML = ""; 
    
    lista.forEach(livro => {
        vitrine.innerHTML += `
            <article class="card-livro">
                <img src="${livro.imagem}" alt="${livro.titulo}">
                <h3>${livro.titulo}</h3>
                <p class="preco">R$ ${livro.preco}</p>
                
                <div class="card-acoes">
                    <button class="btn-detalhes" onclick="irParaDetalhes(${livro.id})">Detalhes</button>
                    
                    <button class="btn-carrinho-circular" onclick="adicionarAoCarrinho(${livro.id})" title="Adicionar ao Carrinho">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </article>`;
    });
}

/* ============================================================
   4. PÁGINA DE PRODUTO
   ============================================================ */
function carregarDetalhesProduto() {
    if (!containerDetalhe) return;
    
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
                    Este exemplar traz reflexões imortais sobre a condição humana.
                </p>
                <div class="compra-area">
                    <button class="btn-comprar-grande" onclick="adicionarAoCarrinho(${livro.id})">
                        Comprar Agora - R$ ${livro.preco}
                    </button>
                </div>
            </div>`;
    }
}

/* ============================================================
   5. SISTEMA DE CARRINHO (A GRANDE CORREÇÃO)
   ============================================================ */

function adicionarAoCarrinho(id) {
    // 1. Achar o livro no nosso "banco de dados" pelo ID
    const livroSelecionado = livros.find(l => l.id === id);

    if (livroSelecionado) {
        // 2. Pegar o carrinho atual do LocalStorage (ou criar um vazio)
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        // 3. Adicionar o novo livro à lista
        carrinho.push({
            titulo: livroSelecionado.titulo,
            preco: livroSelecionado.preco,
            imagem: livroSelecionado.imagem
        });

        // 4. Salvar de volta no LocalStorage (O "BILHETE" QUE O CARRINHO.JS VAI LER)
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        // 5. Atualizar o contador visual na hora
        atualizarContador();
        
        // AVISO REMOVIDO PARA MELHORAR A EXPERIÊNCIA DO USUÁRIO
    }
}

function irParaDetalhes(id) { 
    window.location.href = `produto.html?id=${id}`; 
}

// Filtro de Busca
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
    // Garante que o contador comece certo ao abrir a página
    if(typeof atualizarContador === 'function') atualizarContador();
});