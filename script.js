/* 
_____________AULA 1 INTRODUÇÃO_____________
alert("Ola, seja bem vindo para o meu site de aprendizagem")
document.getElementById('nome').value = 'oi'; */

/* 
_____________AULA 2 VARIÁVEIS_____________
var texto = 'Aprendendo Java Script'; // string
var numeroInteiro = -7; //number INT
var numeroFracionado = 10.75; //number FLOAT
var teste = true; //boolean TRUE || FALSE
//alert(texto) //Abrir Um Dialog
//document.writeln(texto)
console.log(teste)
 */

/* 
_____________AULA 3 CONCATENAÇÃO_____________
var nome = prompt('Digite o seu nome:')
var idade = prompt('Digite a sua idade:')
var idade2 = 30
console.log(idade)
console.log(idade2)
document.write(`<h1>Olá ` + nome + `, Tudo bem? você tem `, + idade + ` anos</h1>`)
*/

/* 
_____________AULA 4 VARIÁVEIS2.0_____________
var texto = 'Aprendendo Java Script'; // string
var numeroInteiro = -7; //number INT
var numeroFracionado = 10.75; //number FLOAT
var teste = true; //boolean TRUE || FALSE
var testnull = null// null
var testeunde // undefined
//alert(texto) //Abrir Um Dialog
//document.writeln(texto)
//console.log(teste)
//console.log(testnull)
//console.log(testeunde)
*/

/* 
_____________AULA 5 ALTERANDO VALORES DE VARIÁVEIS_____________
var testnull = null// null
console.log(testnull)
testnull = 'Valor modificado com sucesso'
console.log(testnull)
testnull = 127.48
console.log(testnull)
*/

/* _____________AULA 6 DESAFIO_____________*/

/* _____________AULA 7 IF / ELSE_____________*/

/* _____________AULA 8 OPERADORES DE COMPARAÇÃO(CONDICIONAIS)_____________*/

/* 
_____________AULA 9 IF / ELSE 2.0_____________
if(8 >= 10){
    document.write('Entrou no bloco if (verdadeiro)')
}else{
    document.write('Entrou no bloco else (falso)')
}
*/

/*
_____________AULA 10 PRATICANDO COM OPERADORES DE COMPARAÇÃO_____________
var media = 7
var nota = prompt("Digite a nota:")
if(nota >= media){
    document.write('Aprovado')
}else{
    document.write('Reprovado')
}
*/

/*
_____________AULA 11 CASTING DE TIPOS COM TOSTRING(), PARSEINT() E PARSEFLOAT()_____________
var variavel1 = prompt("Digite algum numero:")
var variavel2 = prompt("Digite outro numero:")
variavel1 = parseFloat(variavel1)
variavel2 = parseFloat(variavel2)
document.write(variavel1 + variavel2)

var variavel1 = 10
var variavel2 = 20
// variavel1 = parseFloat(variavel1)
// variavel2 = parseFloat(variavel2)
console.log(variavel1)
console.log(variavel2)
document.write(variavel1.toString() + variavel2.toString())
*/

/*_____________AULA 12 OPERADORES LÓGICOS_____________*/

/*
_____________AULA 13 IF / ELSE 3.0_____________
// True && True && False
if(2 == 2 && 3 >= 1 && 'a' == 'b'){
    document.write('Verdadeiro')
}else{
    document.write('Falso')
}
var nota = prompt("Digite a nota:")
var media = 7
var faltas = prompt('Digite a quantidade de faltas:')
var faltaMaximas = 15

if(nota >= media && faltas <= faltaMaximas){
    document.write('Aprovado')
}else{
    document.write('Reprovado')
}
*/

/*
_____________AULA 14 OPEADOR TERNARIO_____________
var resultado = <condicao> ? <verdadeiro> : <falso>
var nota = prompt("Digite a nota:")
var media = 7
var faltas = prompt('Digite a quantidade de faltas:')
var faltaMaximas = 15
var resultado = (nota >= media && faltas <= faltaMaximas) ? 'Aprovado' : 'Reprovado'
document.write(resultado)
*/

/*
_____________AULA 15 SWITCH_____________
switch(opcao){
    case:
        break
    case:
        break
    default:
        break
}

*/

/*
_____________AULA 16 SWITCH NA PRATICA_____________
var parametro = prompt('Digite um numero:')
switch(parseInt(parametro)){
    case 1:
        document.write('Você acessou o parametro 1')
        break
    case 2:
        document.write('Você acessou o parametro 2')
        break
    
    default:
        document.write('Você acessou default')
        break
}

*/

/*_____________AULA 17 OPERADORES ARITMÉTICOS_____________*/

/*
_____________AULA 18 OPERADORES ARITMÉTICOS 2.0_____________
var num1 = prompt('Digite o valor de num1')
var num2 = prompt('Digite o valor de num2')

num1 = parseInt(num1)
num2 = parseInt(num2)

document.write('A Soma entre ' + num1 + ' e ' + num2 + ' é ' + (num1 + num2) + '<br>')
document.write('A Subtração entre ' + num1 + ' e ' + num2 + ' é ' + (num1 - num2) + '<br>')
document.write('A Multiplicação entre ' + num1 + ' e ' + num2 + ' é ' + (num1 * num2) + '<br>')
document.write('A Divisão entre ' + num1 + ' e ' + num2 + ' é ' + (num1 / num2) + '<br>')
document.write('O Módulo entre ' + num1 + ' e ' + num2 + ' é ' + (num1 % num2) + '<br>')
document.write('O Incremento de ' + num1 + ' e ' + (num1++) + '<br>')
document.write(num1, '<br>')
document.write('O Decremento de ' + num1 + ' e ' + (num1--) + '<br>')
document.write(num1)

*/

/*
_____________AULA 19 OPERAÇÕES ARITMÉTICAS NA ATRIBUIÇÃO DE VALORES_____________
var teste = 'Ola '

teste = teste + 5
teste += 5
teste -= 5
teste *= 5
teste /= 5
teste %= 5
teste += 'Lucas'
document.write(teste)

*/

/*
_____________AULA 20 PRECEDÊNCIA DE EXECUÇÃO DAS OPERAÇÕES ARITMÉTICAS_____________
document.write((11 + 5 - 5 * 2 )/ 2)
// () » Aplicar Precedência

*/

/*
_____________AULA 21/ AULA 22 FUNÇÕES_____________
//Existem dois tipos de Função, VOID || RETORNO
function calcularAreaTerreno(largura, comprimento){
    var area = largura * comprimento
    return area
}
var largura = prompt('Digite uma largura')
var comprimento = prompt('Digite um comprimento')
var area = calcularAreaTerreno(largura, comprimento)
document.writeln('O terreno possui ' + area + ' metros quadrados')

*/

/*
_____________AULA 23 FUNÇÕES FLEXIBILIDADE DE PARÂMETROS_____________
function soma(a, b){
    //b = b === undefined ? 0 : b
    // return a + b + c + d
    return a + b
}
console.log(soma(7, 7))
console.log(soma(7, 7, 9, 15)) // Desconsidera os parâmetros adicionais
console.log(soma(7))
console.log(soma())

*/

/*
_____________AULA 24 ESCOPO DE VARIÁVEIS_____________
// 3 escopos: global, função e bloco
// Escopo de bloco
var serie = 'Friends'
if(true){
    var serie2 = 'Game Of Thrones'
    document.write(serie)
}
document.write(serie2)
document.write('<br>')
//
function x(){
    var serie3 = 'The Walking Dead'
    document.write(serie)
    document.write(serie2)
}
x()
document.write('<br>')
document.write(serie3)

*/

/*
_____________AULA 25 FUNÇÃO ANONIMA E A TÉCNICA DE WRAPPER_____________
var exibirSaudacao = function(nome){
    document.write('Olá ' + nome)
}
exibirSaudacao('Lucas')

*/

/*
_____________AULA 26 FUNÇÃO DE CALLBACK_____________
function exibirArtigo(id, callbackSucesso, callbackErro){
    // Logica: recuperar o Id via requisição HTTP
    if(true){
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas')
    }else{
        callbackErro('Erro ao recuperar os dados')
    }
}
var callbackSucesso = function(titulo, descricao){
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr>')
    document.write('<p>' + descricao + '</p>')
}
var callbackErro = function(erro){
    document.write('<p><b>Erro:</b>' + erro + '</p>')
}

exibirArtigo(1, callbackSucesso, callbackErro)

*/

/*
_____________AULA 27 FUNÇÕES NATIVAS PARA MANIPULAR STRINGS_____________
var nome = ' Lucas Massaroto '
// Propriedade length
document.write('-' + nome.trim() + '-')

*/

/*
_____________AULA 28 FUNÇÕES NATIVAS PARA TAREFAS MATEMATICAS_____________
// Math, random && ceil && floor && round
var x = Math.random()
document.write(x)

*/

/*
_____________AULA 29 FUNÇÕES NATIVAS PARA MANIPULAR DATAS_____________
// get, Date() && Month() && FullYear() && Hours() && Minutes() && Seconds() ETC..
// set, Hours() && Minutes() && Seconds() ETC..
var data = new Date()
document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + (data.getFullYear()) + '<br>')

*/

/*
_____________AULA 30 PRATICANDO UM POUCO MAIS COM DATAS_____________
var data = new Date()
// Adicionar / remover dias
document.write(data.toString())
data.setDate(data.getDate() + 1)
document.write('<hr>')
document.write(data.toString())
document.write('<br><hr>')
// Adicionar / remover meses
document.write(data.toString())
data.setMonth(data.getMonth() + 1)
document.write('<hr>')
document.write(data.toString())
document.write('<br><hr>')
// Adicionar / remover ano
document.write(data.toString())
data.setFullYear(data.getFullYear() + 1)
document.write('<hr>')
document.write(data.toString())
document.write('<br><hr>')

// 06/05/2025
var data1 = new Date(2025, 5, 6)

// 15/06/2025
var data2 = new Date(2025, 6, 15)

document.write(data1.toString())
document.write('<br><hr>')
document.write(data2.toString())
document.write('<br><hr>')

// converter datas para algo que de para calcular
document.write(data1.getTime())
document.write('<br><hr>')
document.write(data2.getTime())

// Encontrar a quantidade de milissegundos entre data1 e data2
document.write('<br><hr>')
var milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(milissegundos_entre_datas)

// 1 dia tem 24 horas, cada hora tem 60 minutos, cada minuto tem 60segundos e cada segundos tem 1000 milissegundos
var milissegundos_por_dias = (1*24*60*60*1000)
document.write('1 dia tem: ' + milissegundos_por_dias + ' milisegundos')
document.write('<br><hr>')
document.write('A diferença entre data1 e data2 é de ' + Math.ceil(milissegundos_entre_datas / milissegundos_por_dias) + ' dia(s).')

*/

/*
_____________AULA 31/ AUlA 32 EVENTOS MOUSE_____________
function mouse(){
    alert('Eventos utilizando mouse feitos com sucesso!')
}
function mouse2(){
    alert('Mouse deu tchau!')
}

*/

/*
_____________AULA 33 EVENTOS TECLADO_____________
function acao(){
    alert('Tecla pressionada!')
}

*/

/*
_____________AULA 34 EVENTOS JANELA_____________
function janela(){
    console.log('Janela Alterada')
}
function rolagem(){
    console.log('Pagina rolada')
}

*/

/*
_____________AULA 35 EVENTOS FORMULÁRIOS_____________
function focu(){
    console.log('Receba Foco')
}
function blu(){
    console.log('Perca Foco')
}
function chan(){
    console.log('Sofri Modificação')
}

*/

/*
_____________AULA 36/ AULA 37 DOM SELECIONANDO ELEMENTOS DA PÁGINA_____________
console.log(document.getElementById('nome_usuario'))
console.log(document.getElementsByTagName('input'))
console.log(document.getElementsByClassName('campo_texto'))
console.log(document.getElementsByName('nome'))
    
*/

/*
_____________AULA 38 DOM MANIPULANDO VALORES DE INPUTS(TEXT)_____________
function distribuiCaract(){
    // Selecionar o valor Digitado
    var caracter = document.getElementById('entrada').value
    // Limpar campo de digitação
    document.getElementById('entrada').value = ''
    // limpar espaços em branco nas extremidades da string
    caracter.trim()

    switch(caracter){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            // Adicionar o carcter no campo referente a números
            document.getElementById('apenas_numeros').value += caracter
            break
        default:
            // Adicionar o caracter no campo referente a letras
            document.getElementById('apenas_letras').value += caracter
    }
}

*/

/*
_____________AULA 39 DOM MANIPULANDO ESTILOS DE ELEMENTOS_____________
function modificaEstilo(corDeFundo, l, a){
    document.getElementById('quadro').style.background = corDeFundo
    document.getElementById('quadro').style.width = l
    document.getElementById('quadro').style.height = a
}

*/

/*
_____________AULA 40 DOM MANIPULANDO CLASSES DE ELEMENTOS_____________
function modificaClasse(){
    document.getElementById('mensagem').className = 'estilo2'
}

*/

/*_____________AULA 41 / AULA 42 CRIANDO UM APP CALCULADORA_____________*/

/*
_____________AULA 43 / AULA 44 ARRAY_____________
var lista_frutas = Array() PRIMEIRO JEITO
var lista_frutas = [] SEGUNDO JEITO
var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva'] TERCEIRO JEITO
var lista_frutas = Array('Banana', 'Maçã', 'Morango', 'Uva') QUARTO JEITO
PARA O JEITO 1 E 2
lista_frutas[1] = 'Banana'
lista_frutas[2] = 'Maçã'
lista_frutas[3] = 'Morango'
lista_frutas[4] = 'Uva'
console.log(lista_frutas)

*/

/*
_____________AULA 44.2 EXTRA DIFERENÇA ENTRE O ATRIBUTO LENGHT DE VARIAVEIS DO TIPO STRING E ARRAY_____________
var lista_frutas = Array()
lista_frutas[1] = 'Banana'
lista_frutas[2] = 'Maçã'
lista_frutas[3] = 'Morango'
lista_frutas[4] = 'Uva'
console.log(lista_frutas) NESTE CASO ARRAY RETORNARA LENGHT IGUAL A 5 E NÃO 4 POR CONTA DA INDEXAÇÃO

*/

/*
_____________AULA 45 ARRAY MULTIDIMENSIONAL_____________
var lista_coisas = Array()
lista_coisas['frutas'] = Array('Banana', 'Maçã', 'Morango', 'Uva')
lista_coisas['pessoas'] = ['Lucas', 'João', 'Maria']
console.log(lista_coisas)
document.write(lista_coisas['pessoas'][0])

*/

/*
_____________AULA 46 ARRAY METODOS DE INCLUSÃO E EXCLUSÃO DE ELEMENTOS_____________
var lista_frutas = Array()
lista_frutas[0] = 'banana'
lista_frutas[1] = 'Maça'
// Incluir elemento no inicio do Array
lista_frutas.unshift('Uva')
// Incluir elemento no final do Array
lista_frutas.push('Uva')
// Excluir elemento no inicio do Array
lista_frutas.shift()
// Excluir elemento no final do Array
lista_frutas.pop()
console.log(lista_frutas)

var lista_coisas = Array()
lista_coisas['frutas'] = Array()
lista_coisas['pessoas'] = []
lista_coisas['frutas'].push('Banana')
lista_coisas['frutas'].unshift('Uva')
lista_coisas.shift()
lista_coisas.pop()
console.log(lista_coisas)

*/

/*
_____________AULA 47 ARRAY MÉTODOS DE PESQUISA_____________
var lista_frutas = Array()
lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'
var auxiliar = lista_frutas.indexOf('Uva')
if(auxiliar === -1){
    console.log('Elemento não existe')
} else{
    console.log('Este elemento existe e esta na posição ' + auxiliar)
}

*/

/*
_____________AULA 48 ARRAY ORDENAÇÃO DE ELEMENTOS_____________
var lista_frutas = Array()
lista_frutas[0] = 'Maçã'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Morango'
console.log(lista_frutas.sort())
var lista_numeros = Array()
lista_numeros[0] = 12
lista_numeros[1] = 40
lista_numeros[2] = 3
lista_numeros[3] = 7
lista_numeros[4] = 19
lista_numeros[5] = 1
console.log(lista_numeros.sort(ordenaNumeros))
function ordenaNumeros(a, b){
    return a - b
    // < 0 = a ordenado antes de b
    // > 0 = b ordenado antes de a
    // == a ordem é mantida
}

*/

/*
_____________AULA 49/ AULA 50 ESTRUTURA DE REPETIÇÃO WHILE_____________
var x = 1
document.write('inicio <br>')
while(x <= 10){
    x++
    if(x === 5){
        continue
    }
    document.write(x + '<br>')
    
}
document.write('fim <br>')

*/

/*
_____________AULA 51 ESTRUTURA DE REPETIÇÃO DO WHILE_____________
var x = 11
do{
    document.write(x + '<br>')
    // break
    // continue
}while(x <= 10)

*/

/*
_____________AULA 52 ESTRUTURA DE REPETIÇÃO FOR_____________
while(condicao){

}
do{

}while(condicao)

for(var x = 10; x >= 0; x--){
    document.write(x + '<br>')
    // break
    // continue
}

*/

/*
_____________AULA 53 PRATICANDO UM POUCO PERCORRENDO E LISTANDO ITENS DE ARRAYS_____________
var lista_frutas = Array()
lista_frutas[0] = 'banana'
lista_frutas[1] = 'maçã'
lista_frutas[2] = 'morango'
lista_frutas[3] = 'uva'
var y = 0

while(y < lista_frutas.length){
    document.write(lista_frutas[y] + '<br>')
    y++
}

*/

/*
_____________AULA 54 PRATICANDO UM POUCO CRIANDO UMA TABUADA DE 1 A 10 (LAÇOS ENCADEADOS)_____________
for(var y = 1; y <= 10; y++){
    for(var x = 1; x <= 10; x++){
        document.write(y + ' x ' + x + ' = ' + (y * x) + '<br>')
    }
    document.write('<hr>')
}

*/

/*
_____________AULA 55 ESTRUTURA DE REPETIÇÃO FOR IN_____________
//var listaConvidados = ['Lucas', 'Jorge', 'josé', 'Ana', 'Mario']
var listaConvidados = Array()
listaConvidados['a'] = 'Lucas'
listaConvidados[10] = 'Jorge'
listaConvidados['zebra'] = 'josé'
listaConvidados[-1] = 'Ana'
listaConvidados[true] = 'Mario'
console.log(listaConvidados)
for(var x in listaConvidados){
    console.log('Indice ' + x + ' valor ' + listaConvidados[x])
}

*/

/*
_____________AULA 56 ESTRUTURA DE REPETIÇÃO FOREACH_____________
var listaFuncionarios = ['Viviane', 'Rosângela', 'Miguel', 'Lucas', 'Fernanda']
console.log(listaFuncionarios)
document.write(listaFuncionarios[3])
listaFuncionarios.forEach(function(valor, indice, array){
    // logica
    console.log('indice ' + indice + ' | valor: ' + valor)
    //console.log(array)
    if(valor == 'Lucas'){
        array[indice] = 'um novo valor'
    }
})
console.log(listaFuncionarios)
document.write('<br>' + listaFuncionarios[3])

var listaFuncionarios = Array()
listaFuncionarios['x'] = 'Viviane'
listaFuncionarios[false] = 'Rosângela'
listaFuncionarios[3] = 'Miguel' // APENAS APARECERA O 'Miguel' e 'Lucas' Pois forEach usa sequencia numerica
listaFuncionarios[27] = 'Lucas' 
listaFuncionarios[-12] = 'Fernanda'

var f = function(valor, indice){
    console.log(valor, indice)
}
listaFuncionarios.forEach(f)

*/

/*
_____________AULA 57 FUNÇÕES TRABALHANDO COM PARÂMETROS VARIÁVEIS_____________
function soma(){
    var res = 0
    for(var i in arguments){
        res += arguments[i]
    }
    return res
}
console.log(soma(7, 5, 3.2, 0.8, 'Texto'))

*/

/*
_____________AULA 58 TRATAMENTOS DE ERROS COM TRY, CATCH, THROW E FINALLY_____________
// Netflix
var video = Array()

video[1] = Array()
video[1]['nome'] = 'Fullmetal Alchemist'
video[1]['categoria'] = 'Anime'

function getVideo(video){
    try{
        // logica
        // hhtp
        console.log(video[0]['nome'])
    } catch(e){
        tratarErro(e)
        console.log('Agora sim podemos tratar este erro')
        //throw new Error('Deu merda aqui, mas ja vamos resolver')
    } finally{
        console.log('Sempre passa pro aqui (try / catch)')
    }
    console.log('Aplicação nao morreu')
}
function tratarErro(e){
    // Logica para registrar o erro no servidor
    console.log(e)
}
getVideo(video)

*/

/*
_____________AULA 59 / AULA 60 BOM WINDOW_____________
var janela
function abrirPopUp(){
    janela = window.open('http://google.com', 'Janela_nova', 'width=500, height=400')
}
function fecharPopUp(){
    janela.close()
}
*/



/*
_____________AULA 61 BOM SCREEN_____________

*/

/*
_____________AULA 62 BOM LOCATION_____________

*/

/*
_____________AULA 63 BOM TIMING_____________

*/

/*
_____________AULA 64 / AULA 65 APP GAME MATA MOSQUITO INICIANDO O PROJETO_____________

*/

/*
_____________AULA 66 APP GAME MATA MOSQUITO DEFININDO A DIMENSÃO DO PALCO DO JOGO_____________

*/

/*
_____________AULA 67 APP GAME MATA MOSQUITO CRIANDO POSIÇÕES RANDÔMICAS_____________

*/

/*
_____________AULA 68 APP GAME MATA MOSQUITO TAMANHOS RANDÔMICOS_____________

*/

/*
_____________AULA 69 APP GAME MATA MOSQUITO LADO A E LADO B_____________

*/

/*
_____________AULA 70 APP GAME MATA MOSQUITO CRIANDO E REMOVENDO MOSQUITO A CADA CICLO DE TEMPO_____________

*/

/*
_____________AULA 71 APP GAME MATA MOSQUITO CRIANDO O CENARIO_____________

*/

/*
_____________AULA 72 APP GAME MATA MOSQUITO CONTROLANDO OS PONTOS DE VIDA_____________

*/

/*
_____________AULA 73 APP GAME MATA MOSQUITO GAME OVER_____________

*/

/*
_____________AULA 74 APP GAME MATA MOSQUITO ADICIONANDO CRONOMETRO_____________

*/

/*
_____________AULA 75 APP GAME MATA MOSQUITO VITÓRIA_____________

*/

/*
_____________AULA 76 APP GAME MATA MOSQUITO PÁGINA INICIAL_____________

*/

/*
_____________AULA 77 APP GAME MATA MOSQUITO APLICANDO O NIVEL DE DIFICULDADE SELECIONADO_____________

*/

/*
_____________AULA 78 APP GAME MATA MOSQUITO AJUSTES FINAIS E CONSIDERAÇÕES_____________

*/
