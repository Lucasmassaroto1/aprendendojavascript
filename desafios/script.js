/* var a = 10
var b = 20
var c = null

document.write('A: ' + a + '<br/>')
document.write('B: ' + b + '<br/>')
document.write('Ac: ' + c + '<br/>')
document.write('<hr/>')

c = a
a = b
b = c
c = null
document.write('A: ' + a + '<br/>')
document.write('B: ' + b + '<br/>')
document.write('c: ' + c + '<br/>') */

function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            //limpa o visor res
            document.getElementById('res').value = ''
        }
        if(valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.'){
            document.getElementById('res').value += valor
        }
        if(valor === '='){
            var valor_campo = eval(document.getElementById('res').value)
            document.getElementById('res').value = valor_campo
        }
    } else if(tipo === 'valor'){
        document.getElementById('res').value += valor
    }
}