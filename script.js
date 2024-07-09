var entradaTexto = document.querySelector(".entrada-texto");
var salidaTexto = document.querySelector(".salida-texto");
var seccionTexto1 = document.querySelector(".texto1");
var seccionTexto2 = document.querySelector(".texto2");
var btnCopiar = document.querySelector(".copiar");

function validar(textoValidar){

    const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","É","Í","Ó","Ú","á","é","í","ó","ú"];
    var conteo = 0;

    for(var posicion = 0; posicion < textoValidar.length; posicion++){
        for(var letra = 0; letra < letras.length;letra++){
            if(textoValidar.charAt(posicion) == letras[letra]){
                conteo++;
            }
        }
    }

    if(conteo == 0){
        return true;
    }
    return false;
}

function ocultar(){

    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "";
}

function mostrar(){

    salidaTexto.style.background = "#FFF no-repeat center url(./assets/Muñeco.png)";
    seccionTexto1.style.display = "";
    seccionTexto2.style.display = "";
    btnCopiar.style.display = "none";
}

function copiar(){

    var copia =salidaTexto.value;
    var anuncio = document.querySelector(".anuncio");

    navigator.clipboard.writeText(copia);
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";

    setTimeout(() => {
        anuncio.style.display = "none";
    }, 950);
    salidaTexto.value = "";
    mostrar();
}

function encriptar() {
    
    if(!validar(document.querySelector(".entrada-texto").value)){
        alert("Texto invalido, verifique su texto.");
        salidaTexto.value = "";
        mostrar();
        return;
    }

    frase =document.querySelector(".entrada-texto").value.toLowerCase();
    var textoEncriptado = frase.replace(/e/img, "enter"); 
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober"); 
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes"); 
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai"); 
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat"); 
    entradaTexto.value = "";
    salidaTexto.value = textoEncriptado;
    ocultar();
    document.querySelector(".copiar").style.display = "show";
    document.querySelector(".copiar").style.display = "inherit";
}

function desencriptar() {

    if(!validar(document.querySelector(".entrada-texto").value)){
        alert("Texto invalido, verifique su texto.");
        return;
    }

    var frase = document.querySelector(".entrada-texto").value.toLowerCase();
    var textoEncriptado = frase.replace(/enter/img, "e"); 
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o"); 
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i"); 
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a"); 
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u"); 
    entradaTexto.value = "";
    salidaTexto.value = textoEncriptado;
    ocultar();
}