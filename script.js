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
    const paragrafos = textoCru.split(/\r?\n/);
    conteudo.innerHTML = paragrafos
      .map(linha => `<p>${linha.trim()}</p>`)
      .join('');
  }
});