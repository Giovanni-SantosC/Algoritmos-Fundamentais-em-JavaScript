/* Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.  */

let numero01 = parseInt(prompt("Digite o primeiro número: "))
let numero02 = parseInt(prompt("Digite o segundo número: "))

let diferenca = 0

if( numero01 > numero02){
    diferenca = numero01 - numero02
    console.log(`A diferença dos valores ${numero01} e ${numero02} é ${diferenca}`)
}

else if( numero02 > numero01){
    diferenca = numero02 - numero01
    console.log(`A diferença dos valores ${numero01} e ${numero02} é ${diferenca}`)
}

else{
    console.log("Valores digitados iguais.")
}