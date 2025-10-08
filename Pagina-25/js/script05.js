/* Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula  
PRESTACAO ← VALOR + (VALOR * TAXA/100) * TEMPO).  */

let valor = parseFloat(prompt("Digite o valor: "))
let taxa = parseFloat(prompt("Digite a taxa de atraso: "))
let tempo = parseInt(prompt("Digite a quanto tempo esta pretação esta atrasada: "))

let prestacao = valor + (valor * taxa/100) * tempo

console.log(`O valor é ${valor} a taxa de atraso desse valor é ${taxa} e o tempo que esta atrasado é ${tempo}. Sua prestação é ${prestacao} `)