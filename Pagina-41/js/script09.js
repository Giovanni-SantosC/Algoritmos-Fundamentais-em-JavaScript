/* Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem 
informando se o número é par ou ímpar. */

let numero = parseInt(prompt("Digite um número: "))

if(numero % 2 == 0){
    console.log(`Número ${numero} é Par.`)
}

else{
    console.log(`Número ${numero} é Impar.`)
}