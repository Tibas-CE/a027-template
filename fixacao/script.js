// 1 
const conteudo = document.getElementById("texto");
const frase = document.getElementById("paragrafo");

// 2
function imprimeTexto() {
    console.log(conteudo.value);
};

//3
function addTexto() {
    frase.innerHTML = conteudo.value;
    conteudo.value = "";
};