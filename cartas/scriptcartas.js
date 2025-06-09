// aparecer o MENU
function toggleMenu() {
    const menu = document.querySelector('.nav-principal ul');
    menu.classList.toggle('show');
}

const botaoHamburguer = document.getElementById('hamburguer');
const menu = document.querySelector('.nav-principal ul');

function toggleMenu() {
    menu.classList.toggle('show');
}

// Fechar o menu se clicar fora
document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnButton = botaoHamburguer.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
        menu.classList.remove('show');
    }
});

// Impede que o clique no botão propague para o document
botaoHamburguer.addEventListener('click', function(event) {
    event.stopPropagation();
});


// Colocar tag p automaticamente nas histórias
document.addEventListener('DOMContentLoaded', () => {
  const conteudo = document.getElementById("conteudo-cru");
  if (conteudo) {
    const textoCru = conteudo.textContent.trim();

    const linhas = textoCru.split(/\r?\n/);

    const resultado = linhas.map(linha => {
      const texto = linha.trim();

      if (!texto) return '';

      if (texto.startsWith('<') && texto.endsWith('>')) {
        return texto;
      }

      // Referência (fonte menor)
      if (texto.startsWith('-#')) {
        const conteudoReferencia = texto.slice(2).trim();
        return `<p class="referencia">${conteudoReferencia}</p>`;
      }

      // Cena fim
      if (texto === '[...]') {
        return `<p class="cenafim">[...]</p>`;
      }

      // Itálico (##)
      if (texto.startsWith('##')) {
        const conteudoItalico = texto.slice(2).trim();
        return `<p><em>${conteudoItalico}</em></p>`;
      }

      return `<p>${texto}</p>`;
    });

    conteudo.innerHTML = resultado.join('');
  }
});



