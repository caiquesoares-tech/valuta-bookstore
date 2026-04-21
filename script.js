/* ============================================================
   SCRIPT PRINCIPAL - VALUTA LIVRARIA (VERSÃO INTEGRADA)
   ============================================================ */

// 1. BANCO DE DADOS (DATABASE)
const livros = [
    { id: 1, titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", preco: "59,90", imagem: "crime-e-castigo.webp", bio: "Fiódor Dostoiévski é um dos maiores nomes da literatura russa, mestre do romance psicológico.", foto: "autor-dostoievski.jpg" },
    { id: 2, titulo: "Os Irmãos Karamazov", autor: "Fiódor Dostoiévski", preco: "72,00", imagem: "os-irmaos-karamazov.jpg", bio: "Crime e Castigo", de Fiódor Dostoiévski, narra a história de Rodion Raskólnikov, um ex-estudante pobre em São Petersburgo que assassina uma agiota, acreditando estar acima da moral comum. Atormentado pela culpa e pelo isolamento, ele enfrenta um profundo conflito psicológico antes de encontrar redenção através do amor de Sônia Marmeládova e da confissão.", foto: "autor-dostoievski.jpg" },
    { id: 3, titulo: "Memórias do Subsolo", autor: "Fiódor Dostoiévski", preco: "45,00", imagem: "memorias-do-subsolo.jpg", bio: "Obra visceral que antecipa o existencialismo moderno.", foto: "autor-dostoievski.jpg" },
    { id: 7, titulo: "Noites Brancas", autor: "Fiódor Dostoiévski", preco: "38,00", imagem: "noites-brancas.jpg", bio: "Um clássico do romance psicológico sobre o encontro de sonhadores.", foto: "autor-dostoievski.jpg" },
    { id: 4, titulo: "Assim Falou Zaratustra", autor: "Friedrich Nietzsche", preco: "54,90", imagem: "assim-falou-zaratustra.jpg", bio: "Filósofo alemão cujas ideias moldaram o pensamento ocidental contemporâneo.", foto: "autor-nietzsche.jpg" },
    { id: 5, titulo: "O Anticristo", autor: "Friedrich Nietzsche", preco: "39,90", imagem: "o-anticristo.jpg", bio: "Crítica provocativa à moralidade e aos valores tradicionais.", foto: "autor-nietzsche.jpg" },
    { id: 6, titulo: "Crepúsculo dos Ídolos", autor: "Friedrich Nietzsche", preco: "42,00", imagem: "crepusculo-dos-idolos.jpg", bio: "A filosofia de Nietzsche condensada em aforismos poderosos.", foto: "autor-nietzsche.jpg" },
    { id: 8, titulo: "Odisseia", autor: "Homero", preco: "68,00", imagem: "odisseia.jpg", bio: "Lendário poeta grego, considerado o pai da literatura ocidental.", foto: "autor-homero.jpg" },
    { id: 9, titulo: "A Ilíada", autor: "Homero", preco: "70,00", imagem: "a-iliada.jpg", bio: "Poema épico que narra a Guerra de Troia e a ira de Aquiles.", foto: "autor-homero.jpg" },
    { id: 10, titulo: "A Metamorfose", autor: "Franz Kafka", preco: "39,90", imagem: "a-metamorfose.jpg", bio: "Kafka retratou a alienação humana e o absurdo da existência.", foto: "autor-kafka.jpg" }
];

const vitrine = document.getElementById('vitrine-livros');
const inputBusca = document.getElementById('search-input');
const containerDetalhe = document.getElementById('detalhe-livro');

/* ============================================================
   2. FUNÇÕES DE SUPORTE
   ============================================================ */

function atualizarContadorLocal() {
    try {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        // Tenta encontrar o contador pelo ID 'contagem-carrinho' (que está no seu HTML)
        const contadorElemento = document.getElementById('contagem-carrinho');
        if (contadorElemento) {
            contadorElemento.innerText = carrinho.length;
        }
    } catch (e) {
        console.error("Erro ao atualizar contador:", e);
    }
}

function irParaDetalhes(id) { 
    window.location.href = `produto.html?id=${id}`; 
}

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
   4. PÁGINA DE PRODUTO (DINÂMICA)
   ============================================================ */
function carregarDetalhesProduto() {
    // Se não estiver na página de produto, encerra a função
    const params = new URLSearchParams(window.location.search);
    const idUrl = params.get('id');
    if (!idUrl) return;

    const livro = livros.find(l => Number(l.id) === Number(idUrl));

    if (livro) {
        // 1. Preenche a área principal do produto (HTML que você enviou)
        // Se houver os elementos individuais no HTML:
        if (document.getElementById('detalhe-titulo')) {
            document.getElementById('detalhe-titulo').innerText = livro.titulo;
            document.getElementById('detalhe-autor').innerText = livro.autor;
            document.getElementById('detalhe-imagem').src = livro.imagem;
            document.getElementById('detalhe-preco').innerText = `R$ ${livro.preco}`;
            document.getElementById('detalhe-sinopse').innerText = `Uma das obras mais impactantes de ${livro.autor}, agora disponível no acervo da Valuta. Este exemplar traz reflexões imortais sobre a condição humana.`;
            
            // Configura o botão de adicionar ao carrinho da página de produto
            const btnComprar = document.querySelector('.btn-comprar-grande');
            if (btnComprar) btnComprar.onclick = () => adicionarAoCarrinho(livro.id);
        }

        // 2. Preenche a área do Autor (que está no seu HTML de produto)
        if (document.getElementById('autor-nome-info')) {
            document.getElementById('autor-nome-info').innerText = livro.autor;
            document.getElementById('autor-bio').innerText = livro.bio;
            document.getElementById('autor-foto').src = livro.foto;
        }
    }
}

/* ============================================================
   5. SISTEMA DE CARRINHO
   ============================================================ */
function adicionarAoCarrinho(id) {
    const livroSelecionado = livros.find(l => l.id === id);

    if (livroSelecionado) {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        carrinho.push({
            id: livroSelecionado.id,
            titulo: livroSelecionado.titulo,
            preco: livroSelecionado.preco,
            imagem: livroSelecionado.imagem
        });

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarContadorLocal();
        alert(`${livroSelecionado.titulo} foi adicionado ao carrinho!`);
    }
}

/* ============================================================
   6. FILTRO E BUSCA
   ============================================================ */
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
   7. INICIALIZAÇÃO
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderizarLivros(livros);
    carregarDetalhesProduto();
    atualizarContadorLocal();
});