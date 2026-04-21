// ============================================================
// 1. BANCO DE DADOS COMPLETO (Suas descrições mantidas)
// ============================================================
const livros = [
    { 
        id: 1, 
        titulo: "Crime e Castigo", 
        autor: "Fiódor Dostoiévski", 
        preco: "59,90", 
        imagem: "crime-e-castigo.webp", 
        sinopse: `"Crime e Castigo", de Fiódor Dostoiévski, narra a história de Rodion Raskólnikov, um ex-estudante pobre em São Petersburgo que assassina uma velha agiota, justificando o ato com uma teoria de superioridade moral. O "castigo" não é apenas a prisão, mas o tormento psicológico, a culpa e a alienação que ele sofre após o crime, buscando redenção."`,
        bioAutor: "Fiódor Dostoiévski (1821-1881) foi um renomado escritor, romancista e jornalista russo, considerado um dos maiores psicólogos da literature mundial. Suas obras, como Crime e Castigo e Os Irmãos Karamázov, exploram profundas questões existenciais, morais e psicológicas. Teve uma vida marcada por tragédias, incluindo uma condenação à morte comutada para trabalhos forçados na Sibéria.",
        fotoAutor: "autor-dostoievski.webp" 
    },
    { 
        id: 2, 
        titulo: "Os Irmãos Karamazov", 
        autor: "Fiódor Dostoiévski", 
        preco: "72,00", 
        imagem: "os-irmaos-karamazov.jpg", 
        sinopse: `"Os Irmãos Karamázov", obra-prima final de Fiódor Dostoiévski (1880), é um romance filosófico e policial que narra a conturbada relação entre o devasso pai Fiódor Karamázov e seus três filhos, representando diferentes facetas da alma humana. A trama gira em torno de tensões familiares, fé, razão e o parricídio do pai, explorando culpa e moralidade."`,
        bioAutor: "Fiódor Dostoiévski (1821-1881) foi um renomado escritor, romancista e jornalista russo, considerado um dos maiores psicólogos da literatura mundial. Suas obras, como Crime e Castigo e Os Irmãos Karamázov, exploram profundas questões existenciais, morais e psicológicas. Teve uma vida marcada por tragédias, incluindo uma condenação à morte comutada para trabalhos forçados na Sibéria.",
        fotoAutor: "autor-dostoievski.webp"
    },
    { 
        id: 3, 
        titulo: "Memórias do Subsolo", 
        autor: "Fiódor Dostoiévski", 
        preco: "45,00", 
        imagem: "memorias-do-subsolo.jpg", 
        sinopse: `"Memórias do Subsolo (1864), de Fiódor Dostoiévski, é uma novela precursora do existencialismo que narra o monólogo de um ex-funcionário público de 40 anos, amargurado e alienado, vivendo isolado em São Petersburgo. O anti-herói faz reflexões profundas sobre a inação, a angústia humana, a vaidade e sua aversão à sociedade, dividindo a obra em um ensaio filosófico e memórias de sua juventude."`,
        bioAutor: "Fiódor Dostoiévski (1821-1881) foi um renomado escritor, romancista e jornalista russo, considerado um dos maiores psicólogos da literatura mundial. Suas obras, como Crime e Castigo e Os Irmãos Karamázov, exploram profundas questões existenciais, morais e psicológicas. Teve uma vida marcada por tragédias, incluindo uma condenação à morte comutada para trabalhos forçados na Sibéria.",
        fotoAutor: "autor-dostoievski.webp"
    },
    { 
        id: 7, 
        titulo: "Noites Brancas", 
        autor: "Fiódor Dostoiévski", 
        preco: "38,00", 
        imagem: "noites-brancas.jpg", 
        sinopse: `"Noites Brancas" (1848), de Fiódor Dostoiévski, é uma novela romântica sobre um "sonhador" solitário em São Petersburgo que, durante quatro noites de verão, conhece e se apaixona por Nástienka, uma jovem melancólica que espera por seu amado. Eles criam um laço intenso, mas ela acaba voltando para o outro homem, deixando ao sonhador apenas a memória de um momento de felicidade."`,
        bioAutor: "Fiódor Dostoiévski (1821-1881) foi um renomado escritor, romancista e jornalista russo, considerado um dos maiores psicólogos da literatura mundial. Suas obras, como Crime e Castigo e Os Irmãos Karamázov, exploram profundas questões existenciais, morais e psicológicas. Teve uma vida marcada por tragédias, incluindo uma condenação à morte comutada para trabalhos forçados na Sibéria.",
        fotoAutor: "autor-dostoievski.webp"
    },
    { 
        id: 4, 
        titulo: "Assim Falou Zaratustra", 
        autor: "Friedrich Nietzsche", 
        preco: "54,90", 
        imagem: "assim-falou-zaratustra.jpg", 
        sinopse: `"Assim Falou Zaratustra" (1883-1885), de Friedrich Nietzsche, é uma obra filosófica em forma de narrativa poética que defende a afirmação da vida, a morte de Deus, o super-homem (Übermensch) e o eterno retorno. O profeta Zaratustra desce da montanha para ensinar a superação dos valores tradicionais e a criação de novos significados."`,
        bioAutor: `Friedrich Nietzsche (1844–1900) foi um influente filósofo, filólogo e poeta prussiano, conhecido como o "filósofo do martelo" por criticar severamente a moralidade cristã, a religião e a filosofia tradicional. Tornou-se professor na Universidade da Basileia aos 24 anos, mas renunciou cedo por problemas de saúde, escrevendo obras fundamentais como Assim Falou Zaratustra e O Anticristo.`,
        fotoAutor: "frederick-nietschzie.jpg"
    },
    { 
        id: 5, 
        titulo: "O Anticristo", 
        autor: "Friedrich Nietzsche", 
        preco: "39,90", 
        imagem: "o-anticristo.jpg", 
        sinopse: `"O Anticristo" (1888), de Friedrich Nietzsche, é uma crítica radical e feroz ao cristianismo, descrito como a maior corrupção e "maldição" da humanidade. Nietzsche argumenta que a moral cristã inverte os valores naturais, glorificando a fraqueza, o ressentimento e a negação da vida terrena em favor de um além-vida ilusório.`,
        bioAutor: `Friedrich Nietzsche (1844–1900) foi um influente filósofo, filólogo e poeta prussiano, conhecido como o "filósofo do martelo" por criticar severamente a moralidade cristã, a religião e a filosofia tradicional. Tornou-se professor na Universidade da Basileia aos 24 anos, mas renunciou cedo por problemas de saúde, escrevendo obras fundamentais como Assim Falou Zaratustra e O Anticristo.`,
        fotoAutor: "frederick-nietschzie.jpg"
    },
    { 
        id: 6, 
        titulo: "Crepúsculo dos Ídolos", 
        autor: "Friedrich Nietzsche", 
        preco: "42,00", 
        imagem: "crepusculo-dos-idolos.jpg", 
        sinopse: `"Crepúsculo dos Ídolos" (1888), de Friedrich Nietzsche, é uma síntese crítica e "declaração de guerra" contra os falsos pilares da civilização ocidental. O autor ataca a metafísica, Sócrates, Platão e a moral cristã, rotulando-os como decadentes. Com o subtítulo "Como Filosofar com o Martelo", a obra busca destruir ilusões e defender a vida, o perspectivismo e a Vontade de Potência.`,
        bioAutor: `Friedrich Nietzsche (1844–1900) foi um influente filósofo, filólogo e poeta prussiano, conhecido como o "filósofo do martelo" por criticar severamente a moralidade cristã, a religião e a filosofia tradicional. Tornou-se professor na Universidade da Basileia aos 24 anos, mas renunciou cedo por problemas de saúde, escrevendo obras fundamentais como Assim Falou Zaratustra e O Anticristo.`,
        fotoAutor: "frederick-nietschzie.jpg"
    },
    { 
        id: 8, 
        titulo: "Odisseia", 
        autor: "Homero", 
        preco: "68,00", 
        imagem: "odisseia.jpg", 
        sinopse: "A narrativa do regresso de Ulisses a sua terra natal...",
        bioAutor: "Homero foi um lendário poeta épico da Grécia Antiga, supostamente vivido entre os séculos VIII e VII a.C.. Autor de Ilíada e Odisseia, obras basilares da literatura ocidental que narram a Guerra de Troia e o retorno de Ulisses.",
        fotoAutor: "homero-autor.jpg"
    },
    { 
        id: 9, 
        titulo: "A Ilíada", 
        autor: "Homero", 
        preco: "70,00", 
        imagem: "a-iliada.jpg", 
        sinopse: "A Ilíada, poema épico atribuído a Homero, narra a fúria de Aquiles durante um curto período do 10º ano da Guerra de Troia. Após ser desonrado por Agamemnon, Aquiles recusa-se a lutar, causando grandes perdas aos gregos. O conflito atinge o auge com a morte de Pátroclo por Heitor, levando Aquiles a retornar por vingança.",
        bioAutor: "Homero foi um lendário poeta épico da Grécia Antiga, supostamente vivido entre os séculos VIII e VII a.C.. Autor de Ilíada e Odisseia, obras basilares da literatura ocidental que narram a Guerra de Troia e o retorno de Ulisses.",
        fotoAutor: "homero-autor.jpg"
    },
    { 
        id: 10, 
        titulo: "A Metamorfose", 
        autor: "Franz Kafka", 
        preco: "39,90", 
        imagem: "a-metamorfose.jpg", 
        sinopse: ` "A Metamorfose" (1915), de Franz Kafka, narra a história de Gregor Samsa, um caixeiro-viajante que acorda transformado em um inseto gigante. Incapaz de trabalhar, ele perde seu valor como provedor da família, sendo isolado e desprezado, enquanto seus pais e irmã se adaptam à nova realidade e à necessidade de trabalhar. A obra é uma alegoria sobre alienação, desumanização e rejeição social.`,
        bioAutor: "Franz Kafka (1883–1924) foi um influente escritor tcheco de língua alemã, reconhecido por suas obras que retratam a alienação, burocracia e angústia existencial, como A Metamorfose e O Processo.",
        fotoAutor: "franz-kafka.jpg"
    }
];

// ============================================================
// 2. LÓGICA DE EXECUÇÃO (Atualizada para conexão com carrinho)
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idBuscado = urlParams.get('id');
    
    // Procura o livro ignorando se o ID é string ou número
    const livro = livros.find(l => l.id == idBuscado);

    if (livro) {
        // Preenchimento dos dados na tela
        const elementos = {
            img: document.getElementById('detalhe-imagem'),
            tit: document.getElementById('detalhe-titulo'),
            aut: document.getElementById('detalhe-autor'),
            pre: document.getElementById('detalhe-preco'),
            sin: document.getElementById('detalhe-sinopse'),
            bio: document.getElementById('autor-bio'),
            foto: document.getElementById('autor-foto'),
            nomeInfo: document.getElementById('autor-nome-info')
        };

        if (elementos.img) elementos.img.src = livro.imagem;
        if (elementos.tit) elementos.tit.innerText = livro.titulo;
        if (elementos.aut) elementos.aut.innerText = livro.autor;
        if (elementos.pre) elementos.pre.innerText = `R$ ${livro.preco}`;
        if (elementos.sin) elementos.sin.innerText = livro.sinopse;
        if (elementos.bio) elementos.bio.innerText = livro.bioAutor;
        if (elementos.foto) elementos.foto.src = livro.fotoAutor;
        if (elementos.nomeInfo) elementos.nomeInfo.innerText =