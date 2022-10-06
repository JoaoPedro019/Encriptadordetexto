var textInput = document.querySelector("#input-text");
var outInput = document.querySelector("#output");

function encriptar(){
    var texto = textInput.value;

    var resulencri = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "oter").replace(/u/g, "utaf");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resulencri + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function desencriptar(){
    var texto = textInput.value

    var resultdesen = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/utaf/g, "u");
    
    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resuldesencri + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textocop = document.getElementById('input-texto');

    textocop.Select();

    document.execCommand('copy');

    alert("texto copiado");

}

    