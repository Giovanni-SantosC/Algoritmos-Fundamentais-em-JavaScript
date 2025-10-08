/*  Elaborar um programa que efetue a leitura de um valor que esteja entre a faixa de 1 a 9. Após a leitura do valor fornecido pelo usuário, o programa deverá indicar uma de duas mensagens: "O 
valor está na faixa permitida", caso o usuário forneça o valor nesta faixa, ou a mensagem "O valor 
está fora da faixa permitida", caso o usuário forneça valores menores que 1 ou maiores que 9.  */

let numero = parseInt(prompt("Digite um valor: "))

if(numero > 0 && numero < 10){
    console.log(`O valor ${numero} está na faixa permitida`)
}

else if(numero > 9 || numero < 1){
    console.log(`O valor ${numero} está fora da faixa permitida`)
}