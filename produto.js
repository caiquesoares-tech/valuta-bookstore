/* ============================================================
   PRODUTO.JS - VALUTA LIVRARIA (VERSÃO INTEGRAL ATUALIZADA)
   ============================================================ */

// 1. BANCO DE DADOS INTEGRADO (DADOS ORIGINAIS PRESERVADOS)
const livros = [
    { id: 1, titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", preco: "59,90", imagem: "crime-e-castigo.webp", bio: "Fiódor Dostoiévski (1821-1881) foi um dos maiores romancistas da Rússia czarista, mestre do realismo psicológico. Sua obra explora profundamente a alma humana, culpa, redenção e fé. Após sucesso inicial, foi preso e exilado na Sibéria (1849-1854), experiência que moldou sua literatura sombria e existencial. Obras-primas: Crime e Castigo, Os Irmãos Karamázov.", foto: "autor-dostoievski.webp", sinopse: "Publicado em 1866, Crime e Castigo é a obra-prima de Fiódor Dostoiévski e um dos marcos da literatura mundial por sua profunda exploração da psicologia humana e da moralidade." },
    { id: 2, titulo: "Os Irmãos Karamazov", autor: "Fiódor Dostoiévski", preco: "72,00", imagem: "os-irmaos-karamazov.jpg", bio: "Fiódor Dostoiévski (1821-1881) foi um dos maiores romancistas da Rússia czarista, mestre do realismo psicológico. Sua obra explora profundamente a alma humana, culpa, redenção e fé. Após sucesso inicial, foi preso e exilado na Sibéria (1849-1854), experiência que moldou sua literatura sombria e existencial. Obras-primas: Crime e Castigo, Os Irmãos Karamázov.", foto: "autor-dostoievski.webp", sinopse: "Os Irmãos Karamázov (1880) é a última e mais complexa obra de Fiódor Dostoiévski, frequentemente citada como um dos maiores marcos da literatura mundial. A trama combina um drama familiar intenso com investigações profundas sobre moralidade, fé e o livre-arbítrio." },
    { id: 3, titulo: "Memórias do Subsolo", autor: "Fiódor Dostoiévski", preco: "45,00", imagem: "memorias-do-subsolo.jpg", bio: "Fiódor Dostoiévski (1821-1881) foi um dos maiores romancistas da Rússia czarista, mestre do realismo psicológico. Sua obra explora profundamente a alma humana, culpa, redenção e fé. Após sucesso inicial, foi preso e exilado na Sibéria (1849-1854), experiência que moldou sua literatura sombria e existencial. Obras-primas: Crime e Castigo, Os Irmãos Karamázov.", foto: "autor-dostoievski.webp", sinopse: `Memórias do Subsolo (1864), de Fiódor Dostoiévski, é considerada uma das obras fundadoras do existencialismo e da literatura moderna. O livro é narrado por um ex-funcionário público aposentado, sem nome, que vive isolado em São Petersburgo e se autodenomina um "homem doente" e "malvado"` },
    { id: 7, titulo: "Noites Brancas", autor: "Fiódor Dostoiévski", preco: "38,00", imagem: "noites-brancas.jpg", bio: "Fiódor Dostoiévski (1821-1881) foi um dos maiores romancistas da Rússia czarista, mestre do realismo psicológico. Sua obra explora profundamente a alma humana, culpa, redenção e fé. Após sucesso inicial, foi preso e exilado na Sibéria (1849-1854), experiência que moldou sua literatura sombria e existencial. Obras-primas: Crime e Castigo, Os Irmãos Karamázov.", foto: "autor-dostoievski.webp", sinopse: `Noites Brancas (1848) é uma das obras mais líricas e românticas de Fiódor Dostoiévski, escrita antes de sua prisão e exílio na Sibéria. O livro, subtitulado como um "romance sentimental", afasta-se do tom sombrio de suas obras posteriores para explorar a solidão e a idealização amorosa em uma São Petersburgo onírica` },
    { id: 4, titulo: "Assim Falou Zaratustra", autor: "Friedrich Nietzsche", preco: "54,90", imagem: "assim-falou-zaratustra.jpg", bio: "Friedrich Nietzsche (1844–1900) foi um influente filósofo, filólogo e poeta alemão, conhecido por criticar a moral cristã, o racionalismo ocidental e o niilismo. Com estilo aforístico e irônico, defendeu a afirmação da vida, a 'vontade de poder' e o conceito de 'super-homem' (Übermensch). Suas obras incluem Assim Falou Zaratustra e Genealogia da Moral.", foto: "frederick-nietschzie.jpg", sinopse: `Assim Falou Zaratustra (1883-1885), de Friedrich Nietzsche, é um "romance filosófico" e uma das obras mais influentes da história do pensamento ocidental. Escrito em tom poético e profético, o livro narra as andanças de Zaratustra, um sábio que, após dez anos de isolamento nas montanhas, desce ao mundo para anunciar um novo caminho para a humanidade.` },
    { id: 5, titulo: "O Anticristo", autor: "Friedrich Nietzsche", preco: "39,90", imagem: "o-anticristo.jpg", bio: "Friedrich Nietzsche (1844–1900) foi um influente filósofo, filólogo e poeta alemão, conhecido por criticar a moral cristã, o racionalismo ocidental e o niilismo. Com estilo aforístico e irônico, defendeu a afirmação da vida, a 'vontade de poder' e o conceito de 'super-homem' (Übermensch). Suas obras incluem Assim Falou Zaratustra e Genealogia da Moral.", foto: "frederick-nietschzie.jpg", sinopse: `O Anticristo (1888), escrito por Friedrich Nietzsche em seu último ano de lucidez, é uma crítica feroz e direta ao cristianismo e à moral ocidental. Diferente de outras obras onde usa metáforas, aqui o autor adota um tom de "filosofia com o martelo" para atacar o que considera a base da decadência humana.` },
    { id: 6, titulo: "Crepúsculo dos Ídolos", autor: "Friedrich Nietzsche", preco: "42,00", imagem: "crepusculo-dos-idolos.jpg", bio: "Friedrich Nietzsche (1844–1900) foi um influente filósofo, filólogo e poeta alemão, conhecido por criticar a moral cristã, o racionalismo ocidental e o niilismo. Com estilo aforístico e irônico, defendeu a afirmação da vida, a 'vontade de poder' e o conceito de 'super-homem' (Übermensch). Suas obras incluem Assim Falou Zaratustra e Genealogia da Moral.", foto: "frederick-nietschzie.jpg", sinopse: `Crepúsculo dos Ídolos (1889), subtitulado como "ou como se filosofa com o martelo", é uma das últimas obras de Friedrich Nietzsche e serve como uma síntese agressiva e clara de todo o seu pensamento filosófico. O livro foi escrito em poucos dias e funciona como uma "declaração de guerra" contra os valores estabelecidos.` },
    { id: 8, titulo: "Odisseia", autor: "Homero", preco: "68,00", imagem: "odisseia.jpg", bio: "Homero foi um poeta épico da Grécia Antiga, tradicionalmente reconhecido como o autor das duas obras fundadoras da literatura ocidental: a Ilíada e a Odisseia. Sua biografia é cercada de mistérios e lendas, a ponto de historiadores debaterem se ele realmente existiu ou se seu nome representa uma tradição oral coletiva.", foto: "homero-autor.jpg", sinopse: "A Odisseia, atribuída a Homero (séc. VIII a.C.), é um dos pilares da literatura ocidental. Enquanto a Ilíada foca na guerra, a Odisseia é o grande épico do retorno e da astúcia." },
    { id: 9, titulo: "A Ilíada", autor: "Homero", preco: "70,00", imagem: "a-iliada.jpg", bio: "Homero foi um poeta épico da Grécia Antiga, tradicionalmente reconhecido como o autor das duas obras fundadoras da literatura ocidental: a Ilíada e a Odisseia. Sua biografia é cercada de mistérios e lendas, a ponto de historiadores debaterem se ele realmente existiu ou se seu nome representa uma tradição oral coletiva.", foto: "homero-autor.jpg", sinopse: "A Ilíada de Homero, é o mais antigo documento literário do Ocidente. Diferente do que muitos pensam, ela não narra toda a Guerra de Troia, mas foca em um período de aproximadamente 50 dias do décimo e último ano do conflito." },
    { id: 10, titulo: "A Metamorfose", autor: "Franz Kafka", preco: "39,90", imagem: "a-metamorfose.jpg", bio: "Franz Kafka (1883–1924) foi um escritor tcheco de língua alemã, amplamente considerado um dos nomes mais influentes da literatura moderna do século XX. Sua obra é famosa por retratar indivíduos isolados enfrentando situações absurdas, burocracias opressivas e sentimentos de culpa e ansiedade.", foto: "franz-kafka.jpg", sinopse: `A Metamorfose (1915), de Franz Kafka. Um caixeiro-viajante acorda transformado em um inseto monstruoso. Incapaz de trabalhar, ele é isolado e desprezado pela própria família, que o deixa definhar até a morte ao perceber que ele não tem mais utilidade financeira. É o retrato brutal da desumanização no mundo moderno.` }
];

/* ============================================================
   2. FUNÇÕES DE INICIALIZAÇÃO E RENDERIZAÇÃO
   ============================================================ */

function inicializarPagina() {
    atualizarContadorMenu();
    
    // Verifica se estamos na página de detalhes
    if (document.getElementById('detalhe-titulo')) {
        carregarDadosDoProduto();
    }
    
    // Verifica se estamos na página do carrinho
    if (document.getElementById('lista-itens-carrinho')) {
        renderizarCarrinho();
    }
    
    // Verifica se estamos na index (vitrine)
    if (document.getElementById('vitrine-livros')) {
        renderizarVitrine();
        configurarPesquisa();
    }
}

function carregarDadosDoProduto() {
    const params = new URLSearchParams(window.location.search);
    const idUrl = params.get('id');
    const livro = livros.find(l => Number(l.id) === Number(idUrl));

    if (livro) {
        const elementos = {
            'detalhe-titulo': livro.titulo,
            'detalhe-autor': livro.autor,
            'detalhe-preco': `R$ ${livro.preco}`,
            'detalhe-sinopse': livro.sinopse,
            'autor-nome-info': livro.autor,
            'autor-bio': livro.bio
        };

        for (let id in elementos) {
            const el = document.getElementById(id);
            if (el) el.innerText = elementos[id];
        }

        // AJUSTE: O ID correto para exibir a capa na página de compra é 'detalhe-imagem'
        const imgProduto = document.getElementById('detalhe-imagem'); 
        if (imgProduto) {
            imgProduto.src = livro.imagem;
            imgProduto.alt = livro.titulo;
        }

        const fotoAutor = document.getElementById('autor-foto');
        if (fotoAutor) {
            fotoAutor.src = livro.foto;
            fotoAutor.alt = `Foto de ${livro.autor}`;
        }

        const btnCompra = document.querySelector('.btn-comprar-grande');
        if (btnCompra) {
            btnCompra.onclick = () => adicionarAoCarrinho(livro.id);
        }
    }
}

function renderizarVitrine(listaParaExibir = livros) {
    const vitrine = document.getElementById('vitrine-livros');
    if (!vitrine) return;

    vitrine.innerHTML = "";
    listaParaExibir.forEach(l => {
        vitrine.innerHTML += `
            <article class="card-livro">
                <img src="${l.imagem}" alt="${l.titulo}">
                <h3>${l.titulo}</h3>
                <p class="preco">R$ ${l.preco}</p>
                <div class="botoes-container">
                    <a href="produto.html?id=${l.id}" class="btn-comprar">COMPRAR</a>
                    <button class="btn-add-carrinho" onclick="adicionarAoCarrinho(${l.id})" aria-label="Adicionar ao carrinho">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </article>`;
    });
}

/* ============================================================
   3. SISTEMA DE PESQUISA
   ============================================================ */

function configurarPesquisa() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();
            const filtrados = livros.filter(l => 
                l.titulo.toLowerCase().includes(termo) || 
                l.autor.toLowerCase().includes(termo)
            );
            renderizarVitrine(filtrados);
        });
    }
}

/* ============================================================
   4. LÓGICA DO CARRINHO (LOCALSTORAGE)
   ============================================================ */

function adicionarAoCarrinho(id) {
    const livroSelecionado = livros.find(l => l.id === id);
    if (livroSelecionado) {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(livroSelecionado);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarContadorMenu();
        alert(`"${livroSelecionado.titulo}" foi adicionado ao seu carrinho!`);
    }
}

function renderizarCarrinho() {
    const lista = document.getElementById('lista-itens-carrinho');
    const totalElemento = document.getElementById('preco-total-carrinho');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    if (lista) {
        lista.innerHTML = "";
        let somaTotal = 0;
        
        if (carrinho.length === 0) {
            lista.innerHTML = "<p style='text-align:center; padding: 20px;'>Seu carrinho está vazio.</p>";
        }

        carrinho.forEach((item, index) => {
            lista.innerHTML += `
                <div class="item-carrinho">
                    <img src="${item.imagem}" alt="${item.titulo}" style="width: 60px; height: 90px; object-fit: cover; border-radius: 4px;">
                    <div class="item-info">
                        <h4>${item.titulo}</h4>
                        <p>R$ ${item.preco}</p>
                        <button onclick="removerDoCarrinho(${index})" class="btn-remover">Remover</button>
                    </div>
                </div>`;
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
    const contagemSpan = document.getElementById('contagem-carrinho');
    
    if (contagemSpan) {
        contagemSpan.innerText = carrinho.length;
    }
}

// Executa ao carregar o DOM
document.addEventListener('DOMContentLoaded', inicializarPagina);