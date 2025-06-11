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

document.addEventListener('DOMContentLoaded', () => {
  const conteudo = document.getElementById("conteudo-cru");
  if (conteudo) {
    const textoCru = conteudo.innerHTML.trim();
    const linhas = textoCru.split(/\r?\n/);

    const resultado = linhas.map(linha => {
      let texto = linha.trim();

      if (!texto) return '';

      if (texto.startsWith('<') && texto.endsWith('>')) {
        return texto;
      }

      // Citação (-)
      if (texto.startsWith('-') && !texto.startsWith('-#')) {
        const conteudoCitacao = aplicarMarkdown(texto.slice(1).trim());
        return `<p class="citacao">${conteudoCitacao}</p>`;
      }

      // Referência (-#)
      if (texto.startsWith('-#')) {
        const conteudoReferencia = aplicarMarkdown(texto.slice(2).trim());
        return `<p class="referencia">${conteudoReferencia}</p>`;
      }

      // Itálico (##)
      if (texto.startsWith('##')) {
        const conteudoItalico = aplicarMarkdown(texto.slice(2).trim());
        return `<p><em>${conteudoItalico}</em></p>`;
      }

      // Título (#)
      if (texto.startsWith('#')) {
        const conteudoTitulo = aplicarMarkdown(texto.slice(1).trim());
        return `<h3>${conteudoTitulo}</h3>`;
      }

      // Parágrafo comum com markdown
      texto = aplicarMarkdown(texto);
      return `<p>${texto}</p>`;
    });

    conteudo.innerHTML = resultado.join('');
  }

  // Função para aplicar **negrito** e *itálico*
  function aplicarMarkdown(texto) {
        // Links no formato [texto](link)
    texto = texto.replace(/\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g, '<strong><a href="$2" target="_blank">$1</a></strong>');    // Negrito primeiro (para evitar conflito com itálico)
    texto = texto.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Depois itálico
    texto = texto.replace(/\*(.+?)\*/g, '<em>$1</em>');
    return texto;
  }
});



