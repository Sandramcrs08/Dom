// script.js
window.onload = function() {
    // Capturando os elementos
    var titulo = document.getElementById('titulo');
    var link = document.querySelector('a');
    var ul = document.querySelector('ul');
    var ol = document.getElementById('lista-ordenada');

    // Adicionando conteúdo textual aos elementos 'h1' e 'a'
    titulo.innerText = 'Titulo do Projeto';
    link.innerText = 'Proz Educacao';

    // Adicionando três itens simples na lista não ordenada
    ul.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';

    // Adicionando três itens com links para outros sites na lista ordenada
    ol.innerHTML = '<li><a href="https://www.google.com">Google</a></li><li><a href="https://www.bing.com">Bing</a></li><li><a href="https://www.yahoo.com">Yahoo</a></li>';
}
