/*_____________AULA 66 APP GAME MATA MOSQUITO DEFININDO A DIMENSÃO DO PALCO DO JOGO_____________*/
var largura = 0
var altura = 0
var vidas = 1
var tempo = 10
var nivel = window.location.search
nivel = nivel.replace('?', '')
var criaMosquitoTempo = 1500

function ajudaTamanhoPalcoJogo(){
    largura = window.innerWidth
    altura = window.innerHeight
    console.log(largura, altura)
}
ajudaTamanhoPalcoJogo()

/*_____________AULA 67 APP GAME MATA MOSQUITO CRIANDO POSIÇÕES RANDÔMICAS_____________*/
function posicaoRandomica(){
    // Remover mosquito anterior(Caso Exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        if(vidas > 3){
            window.location.href = 'gameover.html'
        }else{
            document.getElementById('v' + vidas).src = "../src/img/coracao_vazio.png"
            vidas++
        }
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX, posicaoY)
    // Criando o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = '../src/img/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)
}

/*_____________AULA 68 APP GAME MATA MOSQUITO TAMANHOS RANDÔMICOS_____________*/
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

/*_____________AULA 69 APP GAME MATA MOSQUITO LADO A E LADO B_____________*/
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

/*_____________AULA 70 APP GAME MATA MOSQUITO CRIANDO E REMOVENDO MOSQUITO A CADA CICLO DE TEMPO_____________*/
// FOI ATUALIZADO O "posicaoRandomica()", COM UM IF QUE VERIFICA SE TEM OUTRO MOSQUITO E REMOVE O ANTERIOR

/*_____________AULA 71 APP GAME MATA MOSQUITO CRIANDO O CENARIO_____________*/
// PARTE DO CSS CRIADO O FUNDO E PAINEL

/*_____________AULA 72 APP GAME MATA MOSQUITO CONTROLANDO OS PONTOS DE VIDA_____________*/
// FOI ATUALIZADO O "posicaoRandomica()", COM UM IF QUE VERIFICA SE O JOGADOR PERDEU AS 3 VIDAS

/*_____________AULA 73 APP GAME MATA MOSQUITO GAME OVER_____________*/
// CRIAÇÃO DE UM NOVO HTML E LINKANDO ENTRE O ORIGINAL CONLUIDO

/*_____________AULA 74 APP GAME MATA MOSQUITO ADICIONANDO CRONOMETRO_____________*/
var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

/*_____________AULA 75 APP GAME MATA MOSQUITO VITÓRIA_____________*/
// ADICIONANDO PAGINA VITORIA E ATUALIZANDO CRONOMETRO

/*_____________AULA 76 APP GAME MATA MOSQUITO PÁGINA INICIAL_____________*/
// CODIGO CRIADO SEPARADAMENTE EM INDEX.HTML PARA EVITAR ERROS

/*_____________AULA 77 APP GAME MATA MOSQUITO APLICANDO O NIVEL DE DIFICULDADE SELECIONADO_____________*/
if(nivel === 'normal'){
    //1500
    criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
    //1000
    criaMosquitoTempo = 1000
} else if(nivel === 'hardcore'){
    //750
    criaMosquitoTempo = 750
}
/*_____________AULA 78 APP GAME MATA MOSQUITO AJUSTES FINAIS E CONSIDERAÇÕES_____________*/
// COLOCANDO CURSOR PERSONALIZADO NO CSS E FIM DO PROJETO