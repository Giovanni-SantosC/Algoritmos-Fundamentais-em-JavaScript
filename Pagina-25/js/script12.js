/* 
Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à 
soma dos quadrados dos três valores lidos.  */

let numero01 = parseInt(prompt("Digite o valor do primeiro número: "))
let numero02 = parseInt(prompt("Digite o valor do segundo número: "))
let numero03 = parseInt(prompt("Digite o valor do terceiro número: "))

let somaQuadrado = (numero01 * numero01) + (numero02 * numero02) + (numero03 * numero03)

console.log(`A soma do quadrado dos valores ${numero01}, ${numero02}, ${numero03} é ${somaQuadrado}`)
