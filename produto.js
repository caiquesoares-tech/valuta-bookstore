// ============================================================
// 1. BANCO DE DADOS COMPLETO
// ============================================================
const livros = [
    { id: 1, titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", preco: "59,90", imagem: "crime-e-castigo.webp", sinopse: "Clássico de Dostoiévski e romance fundamental da literatura ocidental, CRIME E CASTIGO ressurge em toda sua originalidade e inesgotável caráter moral. Na obra, Raskólnikov, um rapaz retraído e orgulhoso, se sente esmagado pela pobreza. Ao mesmo tempo, acha que está destinado a um grande futuro e, desdenhoso da moralidade comum, julga ter plenos direitos para cometer um crime – o que fará de maneira implacável. Marco da análise psicológica na ficção, CRIME E CASTIGO é um testemunho eloquente da miséria, do alcoolismo e das condições degradantes que empurram para o abismo anônimos nas grandes cidades." },
    { id: 2, titulo: "Os Irmãos Karamazov", autor: "Fiódor Dostoiévski", preco: "72,00", imagem: "os-irmaos-karamazov.jpg", sinopse: "Obra singular da literatura russa e mundial, Os Irmãos Karamázov apresenta a intrincada história dos irmãos Dmitri, Ivan e Aliocha, cada qual em luta constante com seus próprios demônios internos enquanto segue em busca do significado da vida." },
    { id: 3, titulo: "Memórias do Subsolo", autor: "Fiódor Dostoiévski", preco: "45,00", imagem: "memorias-do-subsolo.jpg", sinopse: "Memórias do subsolo é um pequeno romance publicado em 1864. Considerada uma obra precursora do existencialismo e da psicanálise, traz na primeira parte o monólogo de um homem amargurado e amargo, um homem subterrâneo, sem nome ou relações sociais, um empregado aposentado, em cuja própria existência não vê nenhum sentido, e que se dirige diretamente ao leitor.Tenta envolvê-lo, convencê-lo e comovê-lo com hipóteses sobre si mesmo e sua possível redenção." },
    { id: 7, titulo: "Noites Brancas", autor: "Fiódor Dostoiévski", preco: "38,00", imagem: "noites-brancas.jpg", sinopse: "Noites brancas é uma das grandes obras da fase romântica da literatura russa. Foi publicada originalmente em 1848, antes da prisão de seu autor, Fiódor Dostoiévski, e de sua guinada estilística para um texto de maior agudeza e crítica social. A Noite Branca é um fenômeno comum em locais próximos às regiões polares, nos quais o Sol, mesmo se pondo, permanece pouco abaixo da linha do horizonte, resultando em noites iluminadas e oníricas. É nesse cenário que um sonhador tem um encontro casual com Nástienka e se vê atado a uma intrincada história de amor.." },
    { id: 4, titulo: "Assim Falou Zaratustra", autor: "Friedrich Nietzsche", preco: "54,90", imagem: "assim-falou-zaratustra.jpg", sinopse: "Um dos trabalhos filosóficos mais lidos e influentes de todos os tempos, Assim falou Zaratustra talvez deva sua extraordinária fortuna ao seu caráter híbrido: filosofia, religião e literatura nele se juntam de maneira complexa e atraente. Ao publicar Além do bem e do mal, livro imediatamente posterior, Nietzsche revelou ao amigo Jacob Burckhardt que a nova publicação continha “as mesmas coisas que havia dito antes pela boca de Zaratustra, mas de modo diferente, bem diferente”. De fato, o leitor reconhecerá, na linguagem metafórica e alegórica dos discursos e diálogos de Zaratustra, muitas das ideias que seriam desenvolvidas em prosa reflexiva nas obras posteriores ― ou que já haviam sido abordadas em Aurora e A gaia ciência, livros aos quais ele chegou a se referir como “comentários ao Zaratustra antes que ele aparecesse”." },
    { id: 5, titulo: "O Anticristo", autor: "Friedrich Nietzsche", preco: "39,90", imagem: "o-anticristo.jpg", sinopse: "Escrito em 1888, último ano antes de Friedrich Nietzsche perder a lucidez, este ensaio é uma das mais afiadas análises de que o cristianismo já foi objeto. Dando continuidade ao exame sobre a moral praticado na maioria de seus livros, em O anticristo o autor firma sua posição sobre a doutrina religiosa. Ele mostra como o cristianismo – ao qual chama de maldição – é a vitória dos fracos, doentes e rancorosos sobre os fortes, orgulhosos e saudáveis, persuadindo e induzindo a massa por meio de ideias pré-fabricadas. A partir da comparação com outras religiões, Nietzsche critica com veemência a mudança de foco que o cristianismo opera, uma vez que o centro da vida passa a ser o além e não o mundo presente. Até mesmo Jesus Cristo e o apóstolo Paulo são questionados, assim como grande parte de todos os dogmas cristãos, em um grande exercício filosófico.." },
    { id: 6, titulo: "Crepúsculo dos Ídolos", autor: "Friedrich Nietzsche", preco: "42,00", imagem: "crepusculo-dos-idolos.jpg", sinopse: "Este livro, que serve de introdução à forma de pensar nietzschiana, é sobretudo, fruto da seguinte constatação do autor -'Há mais ídolos do que realidades no mundo'. A partir disso, Nietzsche põe-se a aniquilar tudo aquilo que julga serem ídolos falsos, ocos e decadentes." },
    { id: 8, titulo: "Odisseia", autor: "Homero", preco: "68,00", imagem: "odisseia.jpg", sinopse: "A narrativa do regresso de Ulisses a sua terra natal é uma obra de importância sem paralelos na tradição literária ocidental. Sua influência atravessa os séculos e se espalha por todas as formas de arte, dos primórdios do teatro e da ópera até a produção cinematográfica recente. Odisseia se tornou também um substantivo comum, que denomina jornadas marcadas por perigos e eventos inesperados, e Homero um adjetivo usado para relatar feitos grandiosos." },
    { id: 9, titulo: "A Ilíada", autor: "Homero", preco: "70,00", imagem: "a-iliada.jpg", sinopse: "Livro fundador da literatura ocidental que narra a tragédia de Aquiles e a Guerra de Troia em uma nova tradução do helenista português Frederico Lourenço. Primeiro livro da literatura ocidental, a Ilíada parece se tratar, pelo título, apenas de um breve incidente ocorrido no cerco dos gregos à cidade troiana de Ílion, a crônica de aproximadamente cinquenta dias de uma guerra que durou dez anos." },
    { id: 10, titulo: "A Metamorfose", autor: "Franz Kafka", preco: "39,90", imagem: "a-metamorfose.jpg", sinopse: "Para a família, ele era uma ferramenta, jamais um coração. Certa manhã, Gregor Samsa acordou transformado em uma criatura monstruosa para mudar a literatura como a conhecíamos. Escrita por Franz Kafka em 1912, quando tinha 29 anos, A Metamorfose é uma obra singular." }
];

// ============================================================
// 2. LÓGICA DE EXECUÇÃO (Protegida)
// ============================================================

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idBuscado = urlParams.get('id');
    const livro = livros.find(l => l.id == idBuscado);

    if (livro) {
        // Preenchimento Seguro
        const img = document.getElementById('detalhe-imagem');
        const tit = document.getElementById('detalhe-titulo');
        const aut = document.getElementById('detalhe-autor');
        const pre = document.getElementById('detalhe-preco');
        const sin = document.getElementById('detalhe-sinopse');

        if (img) img.src = livro.imagem;
        if (tit) tit.innerText = livro.titulo;
        if (aut) aut.innerText = livro.autor;
        if (pre) pre.innerText = `R$ ${livro.preco}`;
        if (sin) sin.innerText = livro.sinopse;

        document.title = `Valuta - ${livro.titulo}`;
    } else {
        console.error("ID não encontrado ou URL inválida.");
    }
});