/* ============================================================
   LÓGICA DO CARRINHO - VALUTA BOOKSTORE (LISTA VERTICAL PURA)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const listaHtml = document.getElementById('lista-itens-carrinho');
    const totalHtml = document.getElementById('valor-total');
    const contadorMenu = document.getElementById('contagem-carrinho');
    
    // Recupera os dados do LocalStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    function renderizarCarrinho() {
        // 1. Atualiza o contador do menu superior se ele existir
        if (contadorMenu) {
            contadorMenu.innerText = carrinho.length;
        }

        if (!listaHtml) return;

        // 2. Limpa a lista para renderização do zero
        listaHtml.innerHTML = ''; 

        // 3. Caso o carrinho esteja vazio
        if (carrinho.length === 0) {
            listaHtml.innerHTML = `
                <div style="text-align: center; padding: 60px 0; color: #999; border: 1px dashed #eee; width: 100%;">
                    <p style="font-family: 'Cinzel', serif; font-size: 1.1rem;">Sua biblioteca pessoal está vazia.</p>
                    <a href="index.html" style="color: #b8977e; font-size: 0.8rem; text-decoration: none;">Retornar ao Acervo</a>
                </div>
            `;
            if (totalHtml) totalHtml.innerText = "R$ 0,00";
            return;
        }

        let somaTotal = 0;

        // 4. Renderização Vertical (Uma box por livro)
        carrinho.forEach((item, index) => {
            const divItem = document.createElement('div');
            divItem.className = 'item-carrinho-box'; // Garanta que esta classe esteja no seu CSS

            divItem.innerHTML = `
                <img src="${item.imagem}" alt="${item.titulo}" style="width: 70px; height: 100px; object-fit: cover; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                
                <div style="flex: 1; padding-left: 20px;">
                    <h4 style="font-family: 'Cinzel', serif; margin: 0; font-size: 1.1rem; color: #1a1a1a;">${item.titulo}</h4>
                    <p style="margin: 5px 0; color: #888; font-size: 0.8rem;">Valor unitário: R$ ${item.preco}</p>
                    <button onclick="removerDoCarrinho(${index})" style="background: none; border: none; color: #cc0000; cursor: pointer; font-size: 0.75rem; text-decoration: underline; padding: 0;">[ Remover Obra ]</button>
                </div>

                <div style="font-family: 'Cinzel', serif; font-weight: bold; font-size: 1.2rem; color: #1a1a1a; min-width: 100px; text-align: right;">
                    R$ ${item.preco}
                </div>
            `;
            
            listaHtml.appendChild(divItem);

            // 5. LÓGICA DE SOMA (Tratamento rigoroso de String para Número)
            if (item.preco) {
                // Remove R$, pontos de milhar e troca vírgula por ponto decimal
                let precoLimpo = String(item.preco)
                    .replace('R$', '')
                    .replace(/\./g, '')
                    .replace(',', '.')
                    .trim();
                
                somaTotal += parseFloat(precoLimpo) || 0;
            }
        });

        // 6. Atualiza o valor final no rodapé com formatação brasileira
        if (totalHtml) {
            totalHtml.innerText = "R$ " + somaTotal.toFixed(2).replace('.', ',');
        }
    }

    // Função de remoção (Global para o onclick funcionar)
    window.removerDoCarrinho = (index) => {
        carrinho.splice(index, 1);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        renderizarCarrinho();
        
        // Sincroniza o contador da index se houver
        const contadorIndex = document.getElementById('contagem-carrinho');
        if(contadorIndex) contadorIndex.innerText = carrinho.length;
    };

    // Lógica do botão finalizar
    const btnFinalizar = document.getElementById('btn-finalizar');
    if (btnFinalizar) {
        btnFinalizar.onclick = () => {
            if (carrinho.length > 0) {
                alert('Aquisição processada! As obras foram enviadas para seu registro.');
                localStorage.removeItem('carrinho');
                window.location.href = 'index.html';
            } else {
                alert('Adicione obras para finalizar a compra.');
            }
        };
    }

    // Inicializa a página
    renderizarCarrinho();
});