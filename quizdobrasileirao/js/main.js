
function novoRecord(){
    let pontuacaoAtual = document.getElementById("pontuaçaoquiz").value
    let nome = prompt("Nome do jogador:");
    let agora = Date.now();

    let novoRecord = {
        timestamp : agora,
        nomeDoJogador: nome,
        record: pontuacaoAtual
    }
}
function loadRecord(){
    let campoRecord = document.getElementById("pontuaçaoquiz");
    campoRecord.textContent = 0;
    if( localStorage.getItem("pontuaçaoquiz") != null &&
        localStorage.getItem("pontuaçaoquiz") != undefined ){

        let ranking = JSON.parse(localStorage.getItem("pontuaçaoquiz"))
        campoRecord.textContent = ranking[0].record
    }
}

var pontos = 500

function verificar_resposta1(){
    let alternativa1 = document.getElementById("card-1primeira").checked
    if (alternativa1 == true){
        document.getElementById("respVerificada1").textContent = "Você acertou,mais 500 pontos!"
        document.getElementById("respVerificada1").style.color = "#24ff00";
        document.getElementById("pontuaçaoquiz").textContent = pontos
        pontos = pontos + 500
    }
    else{
        document.getElementById("respVerificada1").textContent = "Voce Errou!"
        document.getElementById("respVerificada1").style.color = "#ff0000";
    }
}


function verificar_resposta2(){
    let alternativa2  = document.getElementById("card-2terceira").checked
    if (alternativa2 == true){
        document.getElementById("respVerificada2").textContent = "Você acertou,mais 500 pontos!"
        document.getElementById("respVerificada2").style.color = "#24ff00";
        document.getElementById("pontuaçaoquiz").textContent = pontos
        pontos = pontos + 500
    }
    else{
        document.getElementById("respVerificada2").textContent = "Voce Errou!"
        document.getElementById("respVerificada2").style.color = "red" 
        
        
    }
}


function verificar_resposta3(){
    let alternativa3 = document.getElementById("card-3primeira").checked
    if (alternativa3 == true){
        document.getElementById("respVerificada3").textContent = "Você acertou,mais 500 pontos!"
        document.getElementById("respVerificada3").style.color = "#24ff00";
        document.getElementById("pontuaçaoquiz").textContent = pontos
        pontos = pontos + 500
    }
    else{
        document.getElementById("respVerificada3").textContent = "Voce Errou!"
        document.getElementById("respVerificada3").style.color = "red" 
    }
}


function verificar_resposta4(){
    let alternativa4 = document.getElementById("card-4segunda").checked
    if (alternativa4== true){
        document.getElementById("respVerificada4").textContent = "Você acertou,mais 500 pontos!"
        document.getElementById("respVerificada4").style.color = "#24ff00";
        document.getElementById("pontuaçaoquiz").textContent = pontos
        pontos = pontos + 500
    }
    else{
        document.getElementById("respVerificada4").textContent = "Voce Errou!"
        document.getElementById("respVerificada4").style.color = "red" 
    }
}

function verificar_resposta5(){
    let alternativa5 = document.getElementById("card-5segunda").checked
    if (alternativa5 == true){
        document.getElementById("respVerificada5").textContent = "Você acertou,mais 500 pontos!"
        document.getElementById("respVerificada5").style.color = "#24ff00";
        document.getElementById("pontuaçaoquiz").textContent = pontos
        pontos = pontos + 500
    }
    else{
        document.getElementById("respVerificada5").textContent = "Voce Errou!"
        document.getElementById("respVerificada5").style.color = "red"
    }
}

function verificar_resposta6(){
    let alternativa6 = document.getElementById("card-6terceira").checked
    if (alternativa6== true){
        document.getElementById("respVerificada6").textContent = "Você acertou,mais 500 pontos!!"
        document.getElementById("respVerificada6").style.color = "#24ff00";
        document.getElementById("pontuaçaoquiz").textContent = pontos
        pontos = pontos + 500
    }
    else{
        document.getElementById("respVerificada6").textContent = "Voce Errou!"
        document.getElementById("respVerificada6").style.color = "red" 
    }
}

function verificar_resposta7(){
    let alternativa7 = document.getElementById("card-7segunda").checked
    if (alternativa7 == true){
        document.getElementById("respVerificada7").textContent = "Você acertou,mais 500 pontos!"
        document.getElementById("respVerificada7").style.color =  "#24ff00";
        document.getElementById("pontuaçaoquiz").textContent = pontos
        pontos = pontos + 500
    }
    else{
        document.getElementById("respVerificada7").textContent = "Voce Errou!"
        document.getElementById("respVerificada7").style.color = "red" 
    }
}

function verificar_resposta8(){
    let alternativa8 = document.getElementById("card-8primeira").checked
    if (alternativa8 == true){
        document.getElementById("respVerificada8").textContent = "Você acertou,mais 500 pontos!"
        document.getElementById("respVerificada8").style.color = "#24ff00";
        document.getElementById("pontuaçaoquiz").textContent = pontos
        pontos = pontos + 500
    }
    else{
        document.getElementById("respVerificada8").textContent = "Voce Errou!"
        document.getElementById("respVerificada8").style.color = "red" 
    }
}

function verificar_resposta9(){
    let alternativa9 = document.getElementById("card-9terceira").checked
    if (alternativa9 == true){
        document.getElementById("respVerificada9").textContent = "Você acertou,mais 500 pontos!"
        document.getElementById("respVerificada9").style.color = "#24ff00";
        document.getElementById("pontuaçaoquiz").textContent = pontos
        pontos = pontos + 500
    }
    else{
        document.getElementById("respVerificada9").textContent = "Voce Errou!"
        document.getElementById("respVerificada9").style.color = "red" 
    }
}

function verificar_resposta10(){
    let alternativa10 = document.getElementById("card-10primeira").checked
    if (alternativa10 == true){
        document.getElementById("respVerificada10").textContent = "Você acertou,mais 500 pontos!"
        document.getElementById("respVerificada10").style.color = "#24ff00";
        document.getElementById("pontuaçaoquiz").textContent = pontos
        pontos = pontos + 500
    }
    else{
        document.getElementById("respVerificada10").textContent = "Voce Errou!"
        document.getElementById("respVerificada10").style.color = "red" 
       
    }
}

function verificar_resposta11(){
    let alternativa11 = document.getElementById("card-11primeira").checked
    if (alternativa11== true){
        document.getElementById("respVerificada11").textContent = "Você acertou,mais 500 pontos!"
        document.getElementById("respVerificada11").style.color = "#24ff00";
        document.getElementById("pontuaçaoquiz").textContent = pontos
        pontos = pontos + 500
    }
    else{
        document.getElementById("respVerificada11").textContent = "Voce Errou!"
        document.getElementById("respVerificada11").style.color = "red" 
       
      
    }
}

function verificar_resposta12(){
    let alternativa12 = document.getElementById("card-12terceira").checked
    if (alternativa12 == true){
        document.getElementById("respVerificada12").textContent = "Você acertou,mais 500 pontos!"
        document.getElementById("respVerificada12").style.color = "#24ff00";
        document.getElementById("pontuaçaoquiz").textContent = pontos
        pontos = pontos + 500
    }
    else{
        document.getElementById("respVerificada12").textContent = "Voce Errou!"
        document.getElementById("respVerificada12").style.color = "red" 
    }
}
function refreshPage(){
    window.location.reload();
}

