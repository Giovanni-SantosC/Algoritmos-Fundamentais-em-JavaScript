/* Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o 
quadrado da soma dos três valores lidos. */

let numero01 = parseInt(prompt("Digite o valor do primeiro número: "))
let numero02 = parseInt(prompt("Digite o valor do segundo número: "))
let numero03 = parseInt(prompt("Digite o valor do terceiro número: "))

let soma = (numero01 + numero02 + numero03)

console.log(`O quadrado da soma dos valores ${numero01}, ${numero02}, ${numero03} é ${soma * soma}`)