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


*/

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
document.write()