/* Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, 
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim 
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de 
multiplicação e apresentar doze resultados de saída.  */

let valorA = parseInt(prompt("Digite o valor A: "))
let valorB = parseInt(prompt("Digite o valor B: "))
let valorC = parseInt(prompt("Digite o valor C: "))
let valorD = parseInt(prompt("Digite o valor D: "))

function soma(numero01 , numero02){
    let soma = numero01 + numero02
    console.log(`A soma dos valores ${numero01} e do valor ${numero02} é ${soma}`)
}

function multiplicacao(numero01 , numero02){
    let multiplicacaoNumeros = numero01 * numero02
    console.log(`A multiplicação dos valores ${numero01} e do valor ${numero02} é ${multiplicacaoNumeros}`)
}

console.log("SOMA DOS VALORES: ")
console.log("")

soma(valorA,valorB)
soma(valorA,valorC)
soma(valorA,valorD)
soma(valorB,valorC)
soma(valorB,valorD)
soma(valorC,valorD)

console.log("")
console.log("MULTIPLICAÇÃO DOS VALORES: ")
console.log("")
multiplicacao(valorA , valorB)
multiplicacao(valorA , valorC)
multiplicacao(valorA , valorD)
multiplicacao(valorB , valorC)
multiplicacao(valorB , valorD)
multiplicacao(valorC , valorD)