/* Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um 
valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se 
de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1.  */

let numero = parseInt(prompt("Digite um número: "))

if (numero < 0 ){
    console.log(`Número digitado menor que 0, então seu número positivo é ${numero * -1}`)
}
else{
    console.log(`Número digitado maior ou igual a 0, seu número é ${numero}`)
}
