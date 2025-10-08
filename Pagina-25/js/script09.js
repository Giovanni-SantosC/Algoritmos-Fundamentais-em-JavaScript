/* Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo 
segundo.  */

let numero01 = parseInt(prompt("Digite o primeiro valor: "))
let numero02 = parseInt(prompt("Digite o segundo valor: "))

let diferenca = numero01 - numero02

console.log(`O quadrado da diferença dos números ${numero01} e ${numero02} é ${diferenca * diferenca}`)