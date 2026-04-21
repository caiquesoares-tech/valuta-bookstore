/* ============================================================
   PRODUTO.JS - VALUTA LIVRARIA (VERSÃO INTEGRAL)
   ============================================================ */

// 1. BANCO DE DADOS INTEGRADO
const livros = [
    { id: 1, titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", preco: "59,90", imagem: "crime-e-castigo.webp", bio: "Fiódor Dostoiévski é um dos maiores nomes da literatura russa, explorando a psicologia humana em situações extremas.", foto: "autor-dostoievski.jpg" },
    { id: 2, titulo: "Os Irmãos Karamazov", autor: "Fiódor Dostoiévski", preco: "72,00", imagem: "os-irmaos-karamazov.jpg", bio: "Dostoiévski explorou profundamente a fé, a dúvida e a razão nesta que é sua obra-prima final.", foto: "autor-dostoievski.jpg" },
    { id: 3, titulo: "Memórias do Subsolo", autor: "Fiódor Dostoiévski", preco: "45,00", imagem: "memorias-do-subsolo.jpg", bio: "Obra visceral que antecipa muitos dos temas do existencialismo moderno.", foto: "autor-dostoievski.jpg" },
    { id: 7, titulo: "Noites Brancas", autor: "Fiódor Dostoiévski", preco: "38,00", imagem: "noites-brancas.jpg", bio: "Um mestre do romance psicológico russo.", foto: "autor-dostoievski.jpg" },
    { id: 4, titulo: "Assim Falou Zaratustra", autor: "Friedrich Nietzsche", preco: "54,90", imagem: "assim-falou-zaratustra.jpg", bio: "Filósofo alemão cujas ideias sobre o além-homem mudaram o pensamento ocidental.", foto: "autor-nietzsche.jpg" },
    { id: 5, titulo: "O Anticristo", autor: "Friedrich Nietzsche", preco: "39,90", imagem: "o-anticristo.jpg", bio: "Crítico feroz da moralidade tradicional, desafia os pilares da civilização.", foto: "autor-nietzsche.jpg" },
    { id: 6, titulo: "Crepúsculo dos Ídolos", autor: "Friedrich Nietzsche", preco: "42,00", imagem: "crepusculo-dos-idolos.jpg", bio: "A filosofia de Nietzsche condensada em aforismos provocativos.", foto: "autor-nietzsche.jpg" },
    { id: 8, titulo: "Odisseia", autor: "Homero", preco: "68,00", imagem: "odisseia.jpg", bio: "Lendário poeta grego a quem se atribui a fundação da literatura ocidental.", foto: "autor-homero.jpg" },
    { id: 9, titulo: "A Ilíada", autor: "Homero", preco: "70,00", imagem: "a-iliada.jpg", bio: "Homero narra a épica Guerra de Troia através dos séculos.", foto: "autor-homero.jpg" },
    { id: 10, titulo: "A Metamorfose", autor: "Franz Kafka", preco: "39,90", imagem: "a-metamorfose.jpg", bio: "Kafka retratou a alienação e o absurdo da condição humana moderna.", foto: "autor-kafka.jpg" }
];

/* ============================================================
   2. FUNÇÕES DE RENDERIZAÇÃO
   ============================================================ */

function inicializarPagina() {
    atualizarContadorMenu();
    
    // Se estiver na página de PRODUTO (detalhes)
    if (document.getElementById('detalhe-titulo')) {
        carregarDadosDoProduto();
    }
    
    // Se estiver na página de CARRINHO (lista)
    if (document.getElementById('lista-itens-carrinho')) {
        renderizarCarrinho();
    }
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
        document.getElementById('detalhe-sinopse').innerText = 
            `Uma das obras mais impactantes de ${livro.autor}, agora disponível no acervo da Valuta. Este exemplar traz reflexões imortais sobre a condição humana.`;

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

/* ============================================================
   3. SISTEMA DE CARRINHO (ADICIONAR, REMOVER, RENDERIZAR)
   ============================================================ */

function adicionarAoCarrinho(id) {
    const livroSelecionado = livros.find(l => l.id === id);
    if (livroSelecionado) {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(livroSelecionado);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarContadorMenu();
        alert(`"${livroSelecionado.titulo}" foi adicionado!`);
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
                </div>
            `;
            // Converte "59,90" para 59.90 para somar
            somaTotal += parseFloat(item.preco.replace(',', '.'));
        });

        if (totalElemento) {
            totalElemento.innerText = `R$ ${somaTotal.toFixed(2).replace('.', ',')}`;
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
    const linkCarrinho = document.getElementById('link-carrinho');
    const contagemSpan = document.getElementById('contagem-carrinho');
    
    if (linkCarrinho) {
        linkCarrinho.innerHTML = `CARRINHO (<span id="contagem-carrinho">${carrinho.length}</span>)`;
    }
}

/* ============================================================
   4. INICIALIZAÇÃO
   ============================================================ */
document.addEventListener('DOMContentLoaded', inicializarPagina);