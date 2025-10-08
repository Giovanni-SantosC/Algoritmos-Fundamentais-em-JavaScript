/* Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de 
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da 
variável A. Apresentar os valores trocados  */

let numero01 = parseInt(prompt("Digite o primeiro número: "))
let numero02 = parseInt(prompt("Digite o segundo valor: "))

let guardarNumero = numero01
numero01 = numero02
numero02 = guardarNumero

console.log(`O primeiro número é ${numero01} e o segundo número é ${numero02}`)