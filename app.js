// Array para armazenar os nomes
let amigos = [];

//Função para adicionar os nomes no array
function adicionarAmigo() {

    let nomeDigitado = document.querySelector("input").value
    if (nomeDigitado == "") {
        alert("Por favor, insira um nome.");
    } else
        amigos.push(nomeDigitado);
    listaAmigoSecreto(); //chama função 
    limparCampo(); //chama a função
}

// Função que limpa o campo depois que clica no botão
function limparCampo() {
    nomeDigitado = document.querySelector("input");
    nomeDigitado.value = '';
}

//Armazenar nomes no array e fazer a lista na tela
function listaAmigoSecreto() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = " " //evita duplicar nomes na exibição do HTML

    for (let i = 0; i < amigos.length; i++) {
        let lista = document.createElement("li");
        lista.textContent = amigos[i];
        listaAmigos.appendChild(lista);
    }
}

function sortearAmigo() {
    
    let random = amigos[Math.floor(Math.random() * amigos.length)];
    if (amigos == "") {
        alert("Por favor digite o nome dos Amigos");
    } else

    nome = document.getElementById("resultado").innerText =`O seu amigo secreto é: ${random}`;
    
}