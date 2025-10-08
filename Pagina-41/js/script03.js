/* Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não 
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o 
valor da média do aluno para qualquer condição.  */

let nota01 = parseFloat(prompt(`Digite a primeira nota: `))
let nota02 = parseFloat(prompt(`Digite a segunda nota: `))
let nota03 = parseFloat(prompt(`Digite a terceira nota: `))
let nota04 = parseFloat(prompt(`Digite a quarta nota: `))

let media = (nota01 + nota02 + nota03 + nota04) / 4

if (media >= 5){
    console.log(`Parabéns aluno tirou ${media} de nota é foi Aprovado`)
}

else{
    console.log(`Aluno tirou ${media} de nota é foi reprovado.`)
}